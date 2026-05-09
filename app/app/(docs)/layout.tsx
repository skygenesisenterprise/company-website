import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { UserSidebar } from "@/components/docs/sidebar";
import { UserHeader } from "@/components/docs/header";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <UserSidebar />
        <SidebarInset>
          <UserHeader />
          <main className="flex-1 overflow-auto">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
