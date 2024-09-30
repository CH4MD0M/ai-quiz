import { Outlet } from 'react-router-dom';

// Components
import ModalRenderer from 'components/Modal/ModalRenderer';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

const GlobalLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Header />
      <main className="mx-auto mt-[10rem] min-h-[calc(100vh_-_20rem)] w-full max-w-[1200px]">
        <Outlet />
      </main>
      <Footer />
      <ModalRenderer />
    </div>
  );
};

export default GlobalLayout;
