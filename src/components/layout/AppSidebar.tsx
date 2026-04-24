"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname, Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NAV_ITEMS from "@/constants/navigation";
import LanguageToggle from "@/components/Header/LanguageToggle";
import { Bell, LogOut, Settings, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export default function AppSidebar() {
  const pathname = usePathname();
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      side={locale === "ar" ? "right" : "left"}
      className="relative"
    >
      <div
        className={cn(
          "absolute top-5 z-50 transition-all duration-300",
          isRTL ? "-left-3" : "-right-3",
        )}
      >
        <SidebarTrigger
          className="h-6 w-6 rounded-full border border-border bg-background shadow-sm transition-all cursor-pointer 
           duration-200 hover:scale-110 hover:bg-background hover:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <SidebarHeader className="flex items-center justify-center py-4">
        <LanguageToggle className="group-data-[collapsible=icon]:hidden" />
        <h2 className="text-2xl font-bold text-primary group-data-[collapsible=icon]:hidden">
          AqarTech
        </h2>
        <h2 className="hidden text-xl font-bold text-primary group-data-[collapsible=icon]:block">
          AQ
        </h2>
      </SidebarHeader>

      {/* links */}
      <SidebarContent>
        <SidebarMenu>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.title}
                >
                  <Link href={item.path} className="flex items-center gap-3">
                    <item.icon className="size-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>

        <div className="mt-auto px-2 pb-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Notifications">
                <Bell className="size-5" />
                <span>Notifications</span>
                {/* رقم الإشعارات (لاحظ استخدام ms-auto عشان يقلب يمين مع العربي) */}
                <div className="ms-auto flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-medium text-white">
                  1
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-2">
        <div className="flex w-full items-center justify-between gap-1 group-data-[collapsible=icon]:justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-1 items-center gap-3 rounded-md p-2 text-start outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:p-1 group-data-[collapsible=icon]:justify-center">
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src="" alt="Olivia Rhye" />
                <AvatarFallback className="bg-indigo-100 font-bold text-indigo-700">
                  OR
                </AvatarFallback>
              </Avatar>

              <div className="grid flex-1 text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-bold">Olivia Rhye</span>
                <span className="truncate text-xs text-muted-foreground">
                  olivia@aqartech.com
                </span>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-56 rounded-xl bg-white"
              side={isRTL ? "top" : "top"}
              align="end"
              sideOffset={10}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-2 py-2 text-start text-sm">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarFallback>OR</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 leading-tight">
                    <span className="truncate font-bold">Olivia Rhye</span>
                    <span className="truncate text-xs text-muted-foreground">
                      olivia@aqartech.com
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer">
                  <User className="me-2 size-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="me-2 size-4" />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600 group-data-[collapsible=icon]:hidden"
            title="Logout"
            onClick={() => {
              console.log("Logged out successfully");
            }}
          >
            <LogOut className="size-5" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
