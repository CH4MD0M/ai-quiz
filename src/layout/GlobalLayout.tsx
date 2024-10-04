import { Outlet } from 'react-router-dom';

// Components
import ModalRenderer from 'components/Modal/ModalRenderer';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

const GlobalLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-grow items-center justify-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ModalRenderer />
    </div>
  );
};

export default GlobalLayout;
