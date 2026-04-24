import Header from "@/components/layout/Header";
import AppSidebar from "@/components/layout/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cookies } from "next/headers";
export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const cookieStore = await cookies();
  const sidebarState = cookieStore.get("sidebar_state")?.value;
  const defaultOpen = sidebarState === "false" ? false : true;

  const { locale } = await params;
  return (
    <div className="flex h-screen w-full overflow-hidden transition-all duration-500 ease-in-out">
      <TooltipProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <div
            key={locale}
            className="flex min-h-screen w-full flex-col md:flex-row animate-in fade-in zoom-in-[0.99] duration-500 ease-out"
          >
            <AppSidebar />

            <div className="flex flex-1 flex-col overflow-hidden">
              <Header />
              <main className="flex-1 overflow-auto bg-gray-50/50 p-6">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </TooltipProvider>
    </div>
  );
}
