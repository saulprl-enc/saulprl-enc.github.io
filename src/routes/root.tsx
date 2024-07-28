import { Header } from "@/components/header/header";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-purple-200">
      <Header />
      <main className="flex flex-col w-full px-4 items-center gap-4 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
