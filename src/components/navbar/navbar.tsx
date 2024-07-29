import { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { NavLink, NavLinkProps } from "react-router-dom";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

export const Navbar: FC<NavigationMenuProps> = ({
  orientation,
  className,
  ...props
}) => {
  return (
    <NavigationMenu
      {...props}
      orientation={orientation}
      className={cn(className)}
    >
      <NavigationMenuList className="gap-2">
        {orientation === "vertical" ? <div className="py-2"></div> : null}
        <NavigationMenuItem>
          <CustomNavLink to="/">
            <NavigationMenuLink>Home</NavigationMenuLink>
          </CustomNavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <CustomNavLink to="/blog">
            <NavigationMenuLink>Blog</NavigationMenuLink>
          </CustomNavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <CustomNavLink to="/technical-logs">
            <NavigationMenuLink>Technical Logs</NavigationMenuLink>
          </CustomNavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const CustomNavLink: FC<NavLinkProps> = ({ children, ...props }) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        isActive
          ? "p-2 font-bold text-white relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-1 after:bg-white after:rounded-full"
          : "text-white p-2"
      }
    >
      {children}
    </NavLink>
  );
};
