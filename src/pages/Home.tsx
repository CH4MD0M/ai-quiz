import Button from 'components/atoms/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <section className="mb-12 rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-[5rem] font-bold text-blue-800">
          AI 퀴즈로
          <br />
          당신의 <span className="text-green-500">CS 실력</span>을<br />
          레벨업하세요
        </h2>
        <p className="mb-6 text-gray-600"></p>
        <Link to="select-topics">
          <Button variant="primary" size="md">
            시작하기
          </Button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
