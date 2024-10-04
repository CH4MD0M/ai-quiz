import { StepComponentProps } from 'types/step';
import { useTopicStore } from 'store/useTopicStore';
import { useGetTopics } from 'query/useGetTopics';

// Components
import Card from 'components/Card';

const MainTopicStep = ({ onNext }: StepComponentProps) => {
  const { data: topicsData } = useGetTopics();
  const { setMainTopic } = useTopicStore();

  const cardClickHandler = (selectedTopic: string) => {
    setMainTopic(selectedTopic);
    onNext?.();
  };

  return (
    <>
      <h1 className="text-center text-[3.5rem] font-bold md:text-[4rem]">
        <span className="text-sky-600">메인 주제</span>를 선택해 주세요
      </h1>
      <div className="mt-[10rem] grid grid-cols-1 justify-items-center gap-[4rem] p-[2rem] md:grid-cols-3 md:p-[4rem]">
        {topicsData?.map(({ name, image }, index) => (
          <Card
            key={name}
            onClick={() => cardClickHandler(name)}
            title={name}
            imageUrl={image}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default MainTopicStep;
