export const Header = () => {
  return (
    <header className="sticky top-0 w-screen z-50 bg-primary shadow-md shadow-gray-700/20">
      <div className="container relative flex h-14 items-center justify-center gap-8 max-w-5xl md:justify-start">
        <img src="/encora-logo.svg" alt="Encora's logo" className="object-contain h-10" />
      </div>
    </header>
  );
};
