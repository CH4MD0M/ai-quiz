import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { MdTopic } from 'react-icons/md';

import { DIFFICULTY_LEVELS, QUIZ_COUNTS, QUIZ_TYPES } from 'constants/quizConfigOption';
import { useQuizMutation } from 'query/useQuizMutation';
import { useTopicStore } from 'store/useTopicStore';
import { useQuizStore } from 'store/useQuizStore';
import { useQuizConfigStore } from 'store/useQuizConfigStore';

// Components
import Button from 'components/atoms/Button';
import SelectDropdown from 'components/SelectDropdown';
import QuizTypeButtons from 'components/QuizTypeButtons';

interface QuizConfigModalProps {
  onClose: () => void;
}

const QuizConfigModal = ({ onClose }: QuizConfigModalProps) => {
  const navigate = useNavigate();
  const subTopic = useTopicStore(state => state.subTopic);
  const { quizType, difficultyLevel, quizCount } = useQuizConfigStore();

  const { resetQuizData, setQuizDataList } = useQuizStore();

  const { mutate: fetchQuiz, isPending } = useQuizMutation();

  const handleFetchQuiz = async () => {
    // reset Quiz state
    resetQuizData();

    fetchQuiz(
      {
        quizTopic: subTopic,
        difficulty: difficultyLevel,
        quizCount,
        quizType,
      },
      {
        onSuccess: data => {
          setQuizDataList(data);
          onClose();
          navigate('/solve', { state: { quizType } });
        },
        onError: error => {
          throw error;
        },
      },
    );
  };

  return (
    <div className="min-w-[400px] px-4 py-8">
      <h2 className="mb-[3rem] text-center text-[2rem] font-bold text-gray-800">퀴즈 옵션 설정</h2>

      <div className="mb-[3rem] flex items-center text-[2rem]">
        <MdTopic className="mr-[1rem] text-blue-600" size={24} />
        <span className="font-medium text-blue-800">{subTopic}</span>
      </div>

      <div className="mb-[2rem] space-y-[3rem]">
        <SelectDropdown selectId="difficultyLevel" options={DIFFICULTY_LEVELS} label="난이도" />
        <SelectDropdown selectId="quizCount" options={QUIZ_COUNTS} label="문제 수" />
        <QuizTypeButtons selectId="quizType" options={QUIZ_TYPES} label="문제 유형" />
      </div>

      <Button
        variant="primary"
        size="lg"
        onClick={handleFetchQuiz}
        disabled={isPending}
        className="mt-[2rem] w-full rounded-[6px] py-[2rem] text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-600"
      >
        {isPending ? '퀴즈 생성 중...' : '퀴즈 생성하기'}
      </Button>

      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <HashLoader color="#93c5fd" size={80} />
        </div>
      )}
    </div>
  );
};

export default QuizConfigModal;
