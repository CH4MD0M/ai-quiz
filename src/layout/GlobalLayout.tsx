import { Outlet } from 'react-router-dom';

// Components
import ModalRenderer from 'components/Modal/ModalRenderer';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

const GlobalLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mt-[5rem] min-h-[calc(100vh_-_150px)] flex-grow p-6 md:px-16 lg:px-24">
        <Outlet />
      </main>
      <Footer />
      <ModalRenderer />
    </div>
  );
};

export default GlobalLayout;
