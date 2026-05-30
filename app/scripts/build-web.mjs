import { rename } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { spawn } from "node:child_process";

const appRoot = process.cwd();
const routesRoot = path.join(appRoot, "app");

const excludedEntries = [
  { root: routesRoot, name: "(docs)" },
  { root: routesRoot, name: "(health)" },
  { root: appRoot, name: "proxy.ts" },
];

async function moveEntry(from, to) {
  await rename(from, to);
}

function runNextBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn("pnpm", ["next", "build"], {
      cwd: appRoot,
      stdio: "inherit",
      env: {
        ...process.env,
        NODE_ENV: "production",
        BUILD_WEB_STATIC: "true",
      },
    });

    child.on("exit", (code, signal) => {
      if (signal) {
        reject(new Error(`next build interrupted by signal ${signal}`));
        return;
      }

      if (code !== 0) {
        reject(new Error(`next build failed with exit code ${code}`));
        return;
      }

      resolve();
    });

    child.on("error", reject);
  });
}

const movedEntries = [];

try {
  for (const entry of excludedEntries) {
    const sourcePath = path.join(entry.root, entry.name);
    const targetPath = path.join(entry.root, `__build-web__${entry.name}`);

    await moveEntry(sourcePath, targetPath);
    movedEntries.push({ sourcePath, targetPath });
  }

  await runNextBuild();
} finally {
  for (const { sourcePath, targetPath } of movedEntries.reverse()) {
    await moveEntry(targetPath, sourcePath);
  }
}
