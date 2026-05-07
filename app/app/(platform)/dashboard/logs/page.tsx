"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RefreshCw,
  Download,
  Search,
  Trash2,
  Filter,
  Terminal,
  Terminal as TerminalIcon,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { dockerApi } from "@/lib/api/docker";

interface LogEntry {
  id: string;
  timestamp: string;
  level: "info" | "warn" | "error" | "debug";
  message: string;
  service: string;
}

const mockLogs: LogEntry[] = [
  {
    id: "1",
    timestamp: "2026-03-27T14:30:00Z",
    level: "info",
    message: "Server started on port 8080",
    service: "api",
  },
  {
    id: "2",
    timestamp: "2026-03-27T14:30:01Z",
    level: "info",
    message: "Database connected successfully",
    service: "api",
  },
  {
    id: "3",
    timestamp: "2026-03-27T14:30:02Z",
    level: "info",
    message: "Next.js dev server started on port 3000",
    service: "frontend",
  },
  {
    id: "4",
    timestamp: "2026-03-27T14:31:00Z",
    level: "warn",
    message: "JWT_SECRET not set, using default",
    service: "api",
  },
  {
    id: "5",
    timestamp: "2026-03-27T14:32:00Z",
    level: "error",
    message: "Connection timeout to external API",
    service: "api",
  },
  {
    id: "6",
    timestamp: "2026-03-27T14:33:00Z",
    level: "info",
    message: "Health check endpoint called",
    service: "api",
  },
  {
    id: "7",
    timestamp: "2026-03-27T14:34:00Z",
    level: "debug",
    message: "Rendering page: /fr",
    service: "frontend",
  },
  {
    id: "8",
    timestamp: "2026-03-27T14:35:00Z",
    level: "info",
    message: "User logged in successfully",
    service: "api",
  },
];

export default function LogsPage() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [serviceFilter, setServiceFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState("");
  const [terminalCommand, setTerminalCommand] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fetchLogs = async () => {
    try {
      setIsLoading(true);
      const response = await dockerApi.getLogs("etheriatimes", 100);
      const logsData = response.data?.logs || response.logs || [];
      if (response.success && logsData.length > 0) {
        const parsedLogs: LogEntry[] = logsData.map((log: string, index: number) => {
          const match = log.match(
            /^\[?(\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}:\d{2}[^\]]*)\]?\s*\[?(\w+)\]?\s*(.*)$/
          );
          return {
            id: `${Date.now()}-${index}`,
            timestamp: match ? match[1] : new Date().toISOString(),
            level: (match ? match[2].toLowerCase() : "info") as LogEntry["level"],
            message: match ? match[3] : log,
            service:
              log.includes("Next.js") || log.includes("next") || log.includes("Next")
                ? "frontend"
                : "api",
          };
        });
        setLogs(parsedLogs);
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    } catch {
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
    setLastUpdated(new Date().toLocaleTimeString("fr-FR"));
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setLastUpdated(new Date().toLocaleTimeString("fr-FR"));
  }, [logs, isLoading]);

  const filteredLogs = logs.filter((log) => {
    const matchesSearch = log.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === "all" || log.level === levelFilter;
    const matchesService = serviceFilter === "all" || log.service === serviceFilter;
    return matchesSearch && matchesLevel && matchesService;
  });

  const handleRefresh = async () => {
    await fetchLogs();
  };

  const handleClear = () => {
    setLogs([]);
  };

  const handleDownload = () => {
    const content = filteredLogs
      .map(
        (log) => `[${log.timestamp}] [${log.level.toUpperCase()}] [${log.service}] ${log.message}`
      )
      .join("\n");
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `etheriatimes-logs-${new Date().toISOString().split("T")[0]}.log`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExecuteCommand = async () => {
    if (!terminalCommand.trim()) return;
    setIsExecuting(true);
    const cmd = terminalCommand;
    setTerminalOutput((prev) => prev + `\n$ ${cmd}\n`);

    if (cmd === "clear") {
      setTerminalOutput("");
      setTerminalCommand("");
      setIsExecuting(false);
      return;
    }

    try {
      const response = await dockerApi.execCommand(cmd, "etheriatimes");
      setTerminalOutput((prev) => prev + (response.output || "(no output)\n"));
      if (!response.success) {
        setTerminalOutput((prev) => prev + `Error: Command failed\n`);
      }
    } catch {
      setTerminalOutput((prev) => prev + `Failed to execute command\n`);
    }

    setTerminalCommand("");
    setIsExecuting(false);
  };

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(fetchLogs, 2000);
    return () => clearInterval(interval);
  }, [autoRefresh]);

  const getLevelBadge = (level: string) => {
    const variants: Record<string, string> = {
      info: "bg-blue-100 text-blue-800",
      warn: "bg-yellow-100 text-yellow-800",
      error: "bg-red-100 text-red-800",
      debug: "bg-gray-100 text-gray-800",
    };
    return variants[level] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Logs</h1>
          <p className="text-sm text-muted-foreground">
            Consultation des logs en temps réel des services Docker
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            Actualiser
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </Button>
          <Button variant="outline" size="sm" onClick={handleClear}>
            <Trash2 className="h-4 w-4 mr-2" />
            Effacer
          </Button>
          <Button variant="default" size="sm" onClick={() => setTerminalOpen(true)}>
            <TerminalIcon className="h-4 w-4 mr-2" />
            Terminal
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              <CardTitle className="text-base">Console Docker</CardTitle>
            </div>
            <Badge
              variant="outline"
              className={isConnected ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
            >
              <span
                className={`w-2 h-2 rounded-full mr-2 ${isConnected ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
              />
              {isConnected ? "Connecté" : "Déconnecté"}
            </Badge>
          </div>
          <CardDescription>Container: etheriatimes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher dans les logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-37.5">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warn">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="debug">Debug</SelectItem>
              </SelectContent>
            </Select>
            <Select value={serviceFilter} onValueChange={setServiceFilter}>
              <SelectTrigger className="w-37.5">
                <SelectValue placeholder="Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les services</SelectItem>
                <SelectItem value="api">API (Go)</SelectItem>
                <SelectItem value="frontend">Frontend (Next.js)</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="autoRefresh"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="h-4 w-4"
              />
              <label htmlFor="autoRefresh" className="text-sm text-muted-foreground">
                Auto-refresh
              </label>
            </div>
          </div>

          <div className="rounded-md border bg-card">
            <div className="max-h-125 overflow-y-auto font-mono text-xs">
              {filteredLogs.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground">Aucun log trouvé</div>
              ) : (
                <table className="w-full">
                  <thead className="sticky top-0 bg-muted">
                    <tr>
                      <th className="text-left p-2 font-medium">Horodatage</th>
                      <th className="text-left p-2 font-medium">Niveau</th>
                      <th className="text-left p-2 font-medium">Service</th>
                      <th className="text-left p-2 font-medium">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLogs.map((log) => (
                      <tr key={log.id} className="border-t">
                        <td className="p-2 text-muted-foreground whitespace-nowrap">
                          {new Date(log.timestamp).toLocaleString("fr-FR")}
                        </td>
                        <td className="p-2">
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-medium ${getLevelBadge(log.level)}`}
                          >
                            {log.level.toUpperCase()}
                          </span>
                        </td>
                        <td className="p-2 text-muted-foreground">{log.service}</td>
                        <td className="p-2">{log.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{filteredLogs.length} entrées</span>
            <span>Dernière mise à jour: {lastUpdated || "--:--:--"}</span>
          </div>
        </CardContent>
      </Card>

      <Dialog open={terminalOpen} onOpenChange={setTerminalOpen}>
        <DialogContent className="max-w-[95vw] w-350 h-100 p-0 gap-0">
          <DialogTitle className="sr-only">Terminal Docker - etheriatimes</DialogTitle>
          <div className="bg-[#252526] rounded-t-lg px-4 py-2 flex items-center justify-between border-b border-[#3c3c3c]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[#858585] text-xs">bash — 80×24</span>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="etheriatimes">
                <SelectTrigger className="w-45 h-7 bg-[#3c3c3c] border-[#3c3c3c] text-xs text-[#cccccc]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="etheriatimes">etheriatimes</SelectItem>
                  <SelectItem value="etheria-db">etheria-db</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex-1 flex flex-col bg-[#1e1e1e] min-h-0">
            <div
              className="flex-1 p-4 font-mono text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-[#3c3c3c] scrollbar-track-transparent"
              style={{ fontFamily: "'SF Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace" }}
              onClick={() => {
                const input = document.getElementById("terminal-input");
                input?.focus();
              }}
            >
              <div className="space-y-1">
                <div className="text-[#569cd6] text-xs mb-4">
                  <pre className="whitespace-pre-wrap">{`  ____              _      ____            _        _   _______          _ _ 
 | __ )  ___   ___| | __ |  _ \\ ___ _ __ | |_ __ _| | |_   _|__  ___| | |
 |  _ \\ / _ \\ / __| |/ / | |_) / _ \\ '_ \\| __/ _\` | |   | |/ _ \\/ __| | |
 | |_) | (_) | (__|   <  |  _ <  __/ | | | || (_| | |   | | (_) \\__ \\ |_|
 |____/ \\___/ \\___|_|\\_\\ |_| \\_\\___|_| |_|\\__\\__,_|_|   |_|\\___/|___/(_)
                                                                   
Welcome to Docker Terminal - Etheria Times
Type 'help' to see available commands, 'clear' to clear terminal`}</pre>
                </div>
                {terminalOutput.split("\n").map((line, i) => (
                  <div key={i} className="whitespace-pre-wrap">
                    {line.startsWith("$ ") ? (
                      <span>{line}</span>
                    ) : line.startsWith("root@") ? (
                      <span className="text-[#4ec9b0]">
                        {line.split("@")[0]}
                        <span className="text-[#9cdcfe]">@{line.split("@")[1]}</span>
                      </span>
                    ) : line.includes("not found") ||
                      line.includes("error") ||
                      line.includes("Error") ? (
                      <span className="text-[#f44747]">{line}</span>
                    ) : line.includes("warning") || line.includes("Warning") ? (
                      <span className="text-[#dcdcaa]">{line}</span>
                    ) : (
                      <span className="text-[#d4d4d4]">{line}</span>
                    )}
                  </div>
                ))}
                <div className="flex items-center gap-1">
                  <span className="text-[#4ec9b0]">root</span>
                  <span className="text-[#9cdcfe]">@</span>
                  <span className="text-[#4ec9b0]">etheriatimes</span>
                  <span className="text-[#d4d4d4]">:</span>
                  <span className="text-[#569cd6]">~</span>
                  <span className="text-[#d4d4d4]">$</span>
                  <input
                    id="terminal-input"
                    type="text"
                    value={terminalCommand}
                    onChange={(e) => setTerminalCommand(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleExecuteCommand();
                    }}
                    disabled={isExecuting}
                    className="flex-1 bg-transparent border-none outline-none text-[#d4d4d4] focus:ring-0 caret-[#d4d4d4]"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-[#3c3c3c] px-4 py-1 flex items-center justify-between bg-[#252526] text-xs text-[#858585]">
              <div className="flex items-center gap-4">
                <span>
                  Container: <span className="text-[#cccccc]">etheriatimes</span>
                </span>
                <span>
                  Image: <span className="text-[#cccccc]">etheria-dev:latest</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTerminalOutput("")}
                  className="h-6 text-xs text-[#858585] hover:text-[#cccccc]"
                >
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
