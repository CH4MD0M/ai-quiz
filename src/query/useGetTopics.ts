import { useSuspenseQuery } from '@tanstack/react-query';
import { getTopicsData } from 'api/getTopics';
import { TopicData } from 'types/topic';

export const useGetTopics = () => {
  return useSuspenseQuery<TopicData[]>({
    queryKey: ['mainTopics'],
    queryFn: getTopicsData,
    staleTime: 24 * 60 * 60 * 1000, // 24시간
    gcTime: 7 * 24 * 60 * 60 * 1000, // 7일
  });
};
