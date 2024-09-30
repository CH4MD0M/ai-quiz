import { instance } from './instance';
import { TopicData } from 'types/topic';

export const getTopicsData = async () => {
  const { data } = await instance.get<TopicData[]>('/topics');
  return data;
};
