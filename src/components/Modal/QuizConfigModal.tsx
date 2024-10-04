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
      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <HashLoader color="#93c5fd" size={80} />
        </div>
      )}
      <div className="mb-6 flex items-center justify-center">
        <h2 className="text-[2.5rem] font-bold text-gray-800">옵션 선택</h2>
      </div>
      <div className="mb-[3rem] flex w-fit items-center gap-[1rem] rounded-[12px] bg-[#a6c6f3] p-[1rem] text-[2.2rem] font-semibold text-blue-700">
        <MdTopic /> <span>{subTopic}</span>
      </div>
      <div className="mb-[2rem] space-y-[2rem]">
        <SelectDropdown selectId="difficultyLevel" options={DIFFICULTY_LEVELS} label="난이도" />
        <SelectDropdown selectId="quizCount" options={QUIZ_COUNTS} label="문제 수" />
        <SelectDropdown selectId="quizType" options={QUIZ_TYPES} label="문제 유형" />
      </div>
      <Button
        variant="primary"
        size="lg"
        onClick={handleFetchQuiz}
        disabled={isPending}
        className="mt-8 text-white"
      >
        {isPending ? '퀴즈 생성 중...' : '퀴즈 생성'}
      </Button>
    </div>
  );
};

export default QuizConfigModal;
