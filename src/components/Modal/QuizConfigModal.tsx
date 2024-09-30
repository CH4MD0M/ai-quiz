import { useModal } from 'hooks/useModal';
import TestModal from './TestModal';

const QuizConfigModal = () => {
  const { openModal } = useModal();

  const clickHandler = () => {
    openModal('test', { component: TestModal });
  };

  return (
    <div>
      <h2>Quiz Configuration</h2>
      <button onClick={clickHandler}>테스트 모달</button>
      <p>Configure your quiz here...</p>
    </div>
  );
};

export default QuizConfigModal;
