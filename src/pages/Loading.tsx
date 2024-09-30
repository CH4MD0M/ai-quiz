import { BeatLoader } from 'react-spinners';

const LoadingPage = () => {
  return (
    <div className="flex h-[calc(100vh_-_200px)] w-full items-center justify-center">
      <BeatLoader color="#4565cc" size={25} />
    </div>
  );
};

export default LoadingPage;
