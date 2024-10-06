import { Outlet } from 'react-router-dom';

// Components
import ModalRenderer from 'components/Modal/ModalRenderer';
import Header from 'components/common/Header';

const GlobalLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-grow items-center justify-center">
        <div className="w-full md:px-[4rem]">
          <Outlet />
        </div>
      </main>
      <ModalRenderer />
    </div>
  );
};

export default GlobalLayout;
