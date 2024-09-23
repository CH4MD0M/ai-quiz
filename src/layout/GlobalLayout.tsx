import { Outlet } from 'react-router-dom';

// Components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

const GlobalLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 mt-[72px] mb-[28px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
