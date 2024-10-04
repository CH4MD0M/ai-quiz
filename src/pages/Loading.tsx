import { MoonLoader } from 'react-spinners';

const LoadingPage = () => {
  return (
    <div className="flex h-[calc(100vh_-_200px)] w-full items-center justify-center">
      <MoonLoader color="#4565cc" />
    </div>
  );
};

export default LoadingPage;
