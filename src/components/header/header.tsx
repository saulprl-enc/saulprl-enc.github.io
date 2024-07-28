import { Navbar } from "../navbar/navbar";

export const Header = () => {
  return (
    <header className="sticky top-0 w-screen z-50 bg-primary shadow-md shadow-gray-700/20 text-white">
      <div className="container relative flex h-14 items-center justify-center gap-4 max-w-6xl md:justify-start">
        <img
          src="/encora-symbol.svg"
          alt="Encora's symbol"
          className="object-contain h-10"
        />
        <span className="text-lg font-bold">Saúl&apos;s Spark Journey</span>
        <div className="flex-grow"></div>
        <Navbar />
      </div>
    </header>
  );
};
