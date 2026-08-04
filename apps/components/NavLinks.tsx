import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GitHubIcon } from "@/components/ui/icons/GitHubIcon";
import { BookOpen, Globe, LogIn, Menu } from "lucide-react";

const links = [
  {
    text: "Website",
    url: "/fr",
    icon: Globe,
  },
  {
    text: "Documentation",
    url: "/docs",
    icon: BookOpen,
  },
  {
    text: "Login",
    url: "/login",
    icon: LogIn,
  },
  {
    text: "GitHub",
    url: "https://github.com/skygenesisenterprise/company-website",
    icon: GitHubIcon,
    external: true,
  },
];

export function NavLinks() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          aria-label="Open documentation links"
        >
          <Menu className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {links.map((link, index) => {
          const Icon = link.icon;

          return (
            <div key={link.text}>
              {index === 3 ? <DropdownMenuSeparator /> : null}
              <DropdownMenuItem asChild>
                <a
                  href={link.url}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex cursor-pointer items-center gap-3"
                >
                  <Icon className="size-4 text-fd-muted-foreground" />
                  <span>{link.text}</span>
                </a>
              </DropdownMenuItem>
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
