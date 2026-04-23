import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <TooltipProvider>
        <SidebarProvider>
          <Sidebar />

          <div className="flex flex-1 flex-col overflow-hidden">
            <Header />
            <SidebarTrigger />
            <main className="flex-1 overflow-auto p-6 bg-gray-50/50">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </TooltipProvider>
    </div>
  );
}
