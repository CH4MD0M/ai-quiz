import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-10 h-[5rem] bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-[2rem] font-bold">
          <Link to="/">CSQuizHub</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
