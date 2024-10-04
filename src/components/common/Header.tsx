import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-blue-200 shadow-md">
      <div className="container mx-auto px-4 py-[1rem]">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/assets/logo.png" alt="CSQuizHub Logo" className="h-[4rem] w-auto" />
          <span className="text-[2.4rem] font-bold text-white">CSQuizHub</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
