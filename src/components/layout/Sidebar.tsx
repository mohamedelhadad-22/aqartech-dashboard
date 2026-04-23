// src/components/layout/AppSidebar.tsx
"use client";

import { usePathname, Link } from "@/i18n/navigation";
import NAV_ITEMS from "@/constants/navigation";
import LanguageToggle from "@/components/Header/LanguageToggle"; // مسار زرار اللغات اللي عملناه
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      {/* 1. رأس السايد بار (اللوجو) */}
      <SidebarHeader className="flex items-center justify-center py-4">
        <h2 className="text-2xl font-bold text-primary group-data-[collapsible=icon]:hidden">
          AqarTech
        </h2>
        <h2 className="hidden text-xl font-bold text-primary group-data-[collapsible=icon]:block">
          AQ
        </h2>
      </SidebarHeader>

      {/* 2. محتوى السايد بار (الروابط) */}
      <SidebarContent>
        <SidebarMenu>
          {NAV_ITEMS.map((item) => {
            // التحقق من الرابط النشط
            const isActive = pathname === item.path;

            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.title} // عشان لما يكون مقفول (Icon mode) يظهر اسم اللينك
                  className="transition-all duration-200"
                >
                  {/* استخدمنا Link بتاع next-intl عشان يحافظ على اللغة في الرابط */}
                  <Link href={item.path} className="flex items-center gap-3">
                    <item.icon className="size-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* 3. ذيل السايد بار (زرار اللغات) */}
      <SidebarFooter className="flex items-center justify-center p-4">
        {/* حطينا زرار اللغات هنا عشان يكون سهل الوصول ليه */}
        <LanguageToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
