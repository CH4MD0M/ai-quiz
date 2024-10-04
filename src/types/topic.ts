interface TopicBase {
  name: string;
  image: string;
}

export interface TopicData extends TopicBase {
  subTopics: TopicBase[];
}
