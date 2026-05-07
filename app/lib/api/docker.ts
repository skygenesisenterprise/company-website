import { apiClient } from "./client";

export interface DockerLogResponse {
  logs?: string[];
  container?: string;
  success: boolean;
  data?: {
    logs: string[];
    container: string;
  };
}

export interface DockerExecResponse {
  output: string;
  exitCode: number;
  success: boolean;
}

class DockerApi {
  private client = apiClient;

  async getLogs(
    containerName: string = "etheriatimes",
    lines: number = 100
  ): Promise<DockerLogResponse> {
    try {
      const response = await this.client.get<DockerLogResponse>(`/api/v1/docker/logs`, {
        params: {
          container: containerName,
          lines: lines.toString(),
        },
      });
      return response;
    } catch {
      return { logs: [], success: false };
    }
  }

  async execCommand(
    command: string,
    containerName: string = "etheriatimes"
  ): Promise<DockerExecResponse> {
    try {
      const response = await this.client.post<DockerExecResponse>(`/api/v1/docker/exec`, {
        container: containerName,
        command,
      });
      return response;
    } catch (error) {
      return {
        output: error instanceof Error ? error.message : "Failed to execute command",
        exitCode: 1,
        success: false,
      };
    }
  }

  async getContainerStatus(
    containerName: string = "etheriatimes"
  ): Promise<{ running: boolean; uptime: string }> {
    try {
      const response = await this.client.get<{ running: boolean; uptime: string }>(
        `/api/v1/docker/status`,
        {
          params: { container: containerName },
        }
      );
      return response;
    } catch {
      return { running: false, uptime: "Unknown" };
    }
  }

  async checkForUpdates(): Promise<{ hasUpdate: boolean; currentImage: string }> {
    try {
      const response = await this.client.get<{
        success: boolean;
        data: { hasUpdate: boolean; currentImage: string };
      }>(`/api/v1/docker/check-updates`);
      return {
        hasUpdate: response.data?.hasUpdate ?? false,
        currentImage: response.data?.currentImage ?? "etheriatimes:latest",
      };
    } catch {
      return { hasUpdate: false, currentImage: "etheriatimes:latest" };
    }
  }

  async updateContainer(
    image: string = "etheriatimes:latest"
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await this.client.post<{ success: boolean; message: string }>(
        `/api/v1/docker/update`,
        {
          image,
        }
      );
      return { success: response.success, message: response.message };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Failed to update",
      };
    }
  }
}

export const dockerApi = new DockerApi();
