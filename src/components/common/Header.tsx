const Header = () => {
  return (
    <header className="bg-red-500 text-white p-4 fixed top-0 left-0 right-0 h-[72px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">CSQuizHub</div>
        <nav>{/* Add navigation items here */}</nav>
      </div>
    </header>
  );
};

export default Header;
