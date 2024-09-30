import { useTopicStore } from 'store/useTopicStore';
import { useGetTopics } from 'query/useGetTopics';
import { useModal } from 'hooks/useModal';

// Components
import Card from 'components/Card';
import Button from 'components/atoms/Button';
import QuizConfigModal from 'components/Modal/QuizConfigModal';

interface SubTopicStepProps {
  onBack: () => void;
}

const SubTopicStep = ({ onBack }: SubTopicStepProps) => {
  const { openModal } = useModal();
  const { data: topicsData } = useGetTopics();

  const mainTopic = useTopicStore(state => state.mainTopic);
  const selectedMainTopic = topicsData.find(topic => topic.name === mainTopic);
  const setSubTopic = useTopicStore(state => state.actions.setSubTopic);

  const cardClickHandler = (selectedTopic: string) => {
    setSubTopic(selectedTopic);
    openModal('QUIZ_CONFIG', { component: QuizConfigModal });
  };

  return (
    <>
      <div className="mb-[6rem] flex items-center gap-[3rem]">
        <Button variant="primary" size="md" onClick={onBack}>
          뒤로가기
        </Button>
        <h1 className="text-center text-[3.5rem] font-bold md:text-[4rem]">{mainTopic}</h1>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-[4rem] md:grid-cols-2 lg:grid-cols-4">
        {selectedMainTopic?.subTopics?.map(({ name, image }, index) => (
          <Card
            key={name}
            index={index}
            onClick={() => cardClickHandler(name)}
            title={name}
            imageUrl={image}
          />
        ))}
      </div>
    </>
  );
};

export default SubTopicStep;
