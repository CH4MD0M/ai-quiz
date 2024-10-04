import { Link } from 'react-router-dom';

import Button from 'components/atoms/Button';

const Home = () => {
  return (
    <section className="mx-auto w-full max-w-4xl p-8 text-center">
      <h2 className="mb-4 text-4xl font-bold text-blue-800 sm:text-5xl md:text-[5rem]">
        AI 퀴즈로
        <br />
        당신의 <span className="text-green-500">CS 실력</span>을<br />
        레벨업하세요
      </h2>
      <p className="mb-6 text-gray-600"></p>
      <Link to="/select-topics">
        <Button variant="primary" size="md">
          시작하기
        </Button>
      </Link>
    </section>
  );
};

export default Home;
