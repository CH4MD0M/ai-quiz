interface TopicBase {
  name: string;
  image: string;
}

export interface TopicData extends TopicBase {
  subTopics: TopicBase[];
}

export interface StepComponentProps {
  onClick: () => void;
  onBack: () => void;
}

export interface StepProps {
  title: string;
  Component: React.ComponentType<StepComponentProps>;
}
