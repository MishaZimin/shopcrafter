export const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="h-px w-full bg-graphite/10 mb-3"></div>
      <span className="text-sm text-graphite/30">
        © Шопкрафтер, {new Date().getFullYear()}
      </span>
    </footer>
  );
};
