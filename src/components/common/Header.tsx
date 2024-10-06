import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 h-[8rem] w-full bg-white shadow-[0px_5px_5px_0px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-start px-4 py-[1rem]">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://res.cloudinary.com/dfdnn20e7/image/upload/v1728219007/quiz/logo_psatxv.png"
            alt="CSQuizHub Logo"
            className="h-[6rem] w-auto"
          />
          <span className="text-[2.4rem] font-bold text-black">CSQuizHub</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
