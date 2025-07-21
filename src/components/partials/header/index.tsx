"use client";
import { cn } from "@/src/lib/utils";
import { useSidebar, useThemeStore } from "@/src/store";
import React from "react";
import HorizontalHeader from "./horizontal-header";
import HorizontalMenu from "./horizontal-menu";
import ProfileInfo from "./profile-info";

import { useMediaQuery } from "@/src/hooks/use-media-query";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import ClassicHeader from "./layout/classic-header";
import MobileMenuHandler from "./mobile-menu-handler";
const NavTools = ({
  isDesktop,
  isMobile,
  sidebarType,
}: {
  isDesktop: boolean;
  isMobile: boolean;
  sidebarType: string;
}) => {
  return (
    <div className="nav-tools flex items-center  gap-2">
      {/* {isDesktop && <Language />}
      {isDesktop && <FullScreen />} */}

      {/* <ThemeButton /> */}
      {/* <Inbox /> */}
      {/* <NotificationMessage /> */}

      <div className="ltr:pl-2 rtl:pr-2 flex items-center gap-2">
        <ProfileInfo />
        <LogOut
          className="cursor-pointer"
          onClick={() => {
            if (confirm("Tem certeza que deseja sair?")) {
              signOut();
            }
          }}
        />
      </div>
      {!isDesktop && sidebarType !== "module" && <MobileMenuHandler />}
    </div>
  );
};
const Header = ({
  handleOpenSearch,
  trans,
}: {
  handleOpenSearch: () => void;
  trans: string;
}) => {
  const { setSidebarType } = useSidebar();
  const { layout, navbarType } = useThemeStore();

  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isMobile = useMediaQuery("(min-width: 768px)");

  // set header style to classic if isDesktop
  React.useEffect(() => {
    if (!isDesktop && layout === "horizontal") {
      setSidebarType("classic");
    }
  }, [isDesktop]);

  return (
    <ClassicHeader
      className={cn(" ", {
        "sticky top-0 z-50": navbarType === "sticky",
      })}
    >
      <div className="w-full bg-card/90 backdrop-blur-lg md:px-6 px-[15px] py-3 border-b">
        <div className="flex justify-between items-center h-full">
          <HorizontalHeader handleOpenSearch={handleOpenSearch} />
          <NavTools
            isDesktop={isDesktop}
            isMobile={isMobile}
            sidebarType="horizontal"
          />
        </div>
      </div>
      {isDesktop && (
        <div className=" bg-card bg-card/90 backdrop-blur-lg  w-full px-6  shadow-md">
          <HorizontalMenu trans={trans} />
        </div>
      )}
    </ClassicHeader>
  );
};

export default Header;
