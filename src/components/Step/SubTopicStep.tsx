import { StepComponentProps } from 'types/step';
import { useTopicStore } from 'store/useTopicStore';
import { useModalStore } from 'store/useModalStore';
import { useGetTopics } from 'query/useGetTopics';

// Components
import Card from 'components/Card';
import Button from 'components/atoms/Button';
import QuizConfigModal from 'components/Modal/QuizConfigModal';

const SubTopicStep = ({ onBack }: StepComponentProps) => {
  const { openModal } = useModalStore();
  const { mainTopic, setSubTopic } = useTopicStore();
  const { data: topicsData } = useGetTopics();

  const selectedMainTopic = topicsData.find(topic => topic.name === mainTopic);

  const cardClickHandler = (selectedTopic: string) => {
    setSubTopic(selectedTopic);
    openModal('QUIZ_CONFIG', { component: QuizConfigModal });
  };

  return (
    <div className="mt-[4rem] px-[2rem] md:px-[4rem]">
      <div className="my-[2rem] mb-[2rem] flex flex-col-reverse items-center justify-center gap-[3rem] md:flex-row md:justify-start md:gap-0">
        <Button
          variant="primary"
          size="md"
          onClick={onBack}
          className="max-w-[10rem] md:max-w-[10rem] md:self-auto"
        >
          뒤로가기
        </Button>
        <h1 className="flex-1 break-keep text-center text-[2.5rem] font-bold md:text-[4rem]">
          {mainTopic}
        </h1>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-[2rem] py-[4rem] md:grid-cols-3 md:gap-[4rem] lg:grid-cols-4">
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
    </div>
  );
};

export default SubTopicStep;
