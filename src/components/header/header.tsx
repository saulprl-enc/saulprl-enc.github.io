import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { Navbar } from "../navbar/navbar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetPortal,
  SheetTrigger,
} from "../ui/sheet";

export const Header = () => {
  return (
    <Sheet>
      <header className="sticky top-0 w-screen z-50 bg-primary shadow-md shadow-gray-700/20 text-white">
        <div className="container relative flex h-14 items-center justify-center gap-4 max-w-6xl md:justify-start">
          <SheetTrigger className="md:hidden">
            <MenuIcon />
          </SheetTrigger>
          <Link
            to="/"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 md:static md:translate-x-0 md:translate-y-0"
          >
            <img
              src="/encora-symbol.svg"
              alt="Encora's symbol"
              className="object-contain h-10"
            />
            <span className="text-lg font-bold whitespace-nowrap">
              Saúl&apos;s Spark Journey
            </span>
          </Link>
          <div className="flex-grow"></div>
          <Navbar className="hidden md:inline-flex" />
        </div>
      </header>
      <SheetPortal>
        <SheetContent side="left" className="bg-primary border-r-0">
          <SheetHeader>
            <Link to="/" className="flex items-center gap-4">
              <img
                src="/encora-symbol.svg"
                alt="Encora's symbol"
                className="object-contain h-10"
              />
              <span className="text-white text-lg font-bold whitespace-nowrap">
                Saúl&apos;s Spark Journey
              </span>
            </Link>
          </SheetHeader>
          <Navbar orientation="vertical" />
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};
