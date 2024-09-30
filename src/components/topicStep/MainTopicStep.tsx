import { useTopicStore } from 'store/useTopicStore';
import { useGetTopics } from 'query/useGetTopics';

// Components
import Card from 'components/Card';

interface MainTopicStepProps {
  onClick: () => void;
}

const MainTopicStep = ({ onClick }: MainTopicStepProps) => {
  const { data: topicsData } = useGetTopics();

  const { setMainTopic } = useTopicStore(state => state.actions);

  const cardClickHandler = (selectedTopic: string) => {
    setMainTopic(selectedTopic);
    onClick();
  };

  return (
    <>
      <h1 className="text-center text-[3.5rem] font-bold md:text-[4rem]">
        <span className="text-sky-600">메인 주제</span>를 선택해 주세요
      </h1>
      <div className="mt-[10rem] grid grid-cols-1 justify-items-center gap-[4rem] md:grid-cols-3">
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
