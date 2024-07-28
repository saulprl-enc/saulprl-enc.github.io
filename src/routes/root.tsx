import { Header } from "@/components/header/header";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center gap-4 bg-purple-200">
      <Header />
    </main>
  );
};
