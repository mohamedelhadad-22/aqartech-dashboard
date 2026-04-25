"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname, Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
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
import LanguageToggle from "@/components/ui/LanguageToggle";
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
import Logo from "@/components/icons/logo";
import { cn } from "@/lib/utils";

export default function AppSidebar() {
  const pathname = usePathname();
  const locale = useLocale();
  const isRTL = locale === "ar";
  const t = useTranslations("Sidebar");

  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      side={isRTL ? "right" : "left"}
      className="relative"
    >
      <div
        className={cn(
          "absolute top-13 z-50 transition-all duration-300",
          isRTL ? "-left-3" : "-right-3",
        )}
      >
        <SidebarTrigger
          className="h-6 w-6 rounded-full border border-border bg-background shadow-sm transition-all cursor-pointer 
           duration-200 hover:scale-110 hover:bg-background hover:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <SidebarHeader className="flex items-start justify-center py-6">
        <h2 className=" flex items-center px-3 w-full py-2 gap-2 justify-start font-bold text-white group-data-[collapsible=icon]:hidden">
          <Logo /> AqarTech
        </h2>
        <h2 className="hidden text-xl font-bold text-primary group-data-[collapsible=icon]:block">
          <Logo />
        </h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="gap-1.5 px-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            const translatedTitle = t(item.title);
            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={translatedTitle}
                  className="px-3 py-5 transition-all duration-200"
                >
                  <Link href={item.path} className="flex items-center gap-3">
                    <item.icon className="size-5 shrink-0" />
                    <span className="text-[15px] font-medium tracking-wide text-white/80 hover:text-white/100">
                      {translatedTitle}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>

        <div className="mt-auto flex flex-col gap-1 px-2 pb-4">
          <div className="group-data-[collapsible=icon]:hidden px-2 py-2">
            <LanguageToggle />
          </div>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={t("Notifications")}
                className="px-3 py-5"
              >
                <Bell className="size-5 shrink-0" />
                <span className="text-[15px] font-medium tracking-wide  text-white/80 hover:text-white/100 cursor-pointer">
                  {t("Notifications")}
                </span>
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
            <DropdownMenuTrigger className="flex flex-1 items-center gap-2.5 rounded-md p-2 text-start outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:p-1 group-data-[collapsible=icon]:justify-center">
              <Avatar className="h-8 w-8 shrink-0 rounded-full">
                <AvatarImage src="" alt="Olivia Rhye" />
                <AvatarFallback className="bg-indigo-100 font-bold text-indigo-700">
                  OR
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col flex-1 overflow-hidden text-start group-data-[collapsible=icon]:hidden">
                <span className="truncate text-sm font-bold leading-tight  text-muted-foreground">
                  Olivia Rhye
                </span>
                <span className="truncate text-[11px] text-muted-foreground leading-tight mt-0.5">
                  olivia@aqartech.com
                </span>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-56 rounded-xl bg-white shadow-lg"
              side="top"
              align={isRTL ? "end" : "start"}
              sideOffset={10}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-2 py-2 text-start text-sm">
                  <Avatar className="h-8 w-8 shrink-0 rounded-full">
                    <AvatarFallback>OR</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col flex-1 overflow-hidden text-start">
                    <span className="truncate font-bold  text-muted-foreground leading-tight">
                      Olivia Rhye
                    </span>
                    <span className="truncate text-xs text-muted-foreground leading-tight mt-0.5">
                      olivia@aqartech.com
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer py-2">
                  <User className="me-2 size-4" />
                  {t("Profile")}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer py-2">
                  <Settings className="me-2 size-4" />
                  {t("Settings")}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600 group-data-[collapsible=icon]:hidden"
            title="Logout"
            onClick={() => console.log("Logged out successfully")}
          >
            <LogOut className="size-[18px]" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
