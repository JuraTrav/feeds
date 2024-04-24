import { ActivityFeedDescrProps } from '@features/feed/types/activity-feed';
import { useCallback, useEffect, useMemo, useState } from 'react';

export type FeedFeatureContextProps = {
  // feeds: ActivityFeedDescrProps[];
  setFeeds: React.Dispatch<React.SetStateAction<ActivityFeedDescrProps[] | []>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  resetMessage: () => void;
  fetchFeeds: () => Promise<void>;
  feedType: string;
  handleFeedType: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useFeedFeatureContext = (): FeedFeatureContextProps => {
  const [feeds, setFeeds] = useState<ActivityFeedDescrProps[] | []>([])
  const [message, setMessage] = useState<string>('');
  const [feedType, setFeedType] = useState('note');

  const fetchFeeds = useCallback(async () => {
    const data = await fetch('http://localhost:5000/feeds?_sort=-timestamp');
    const feeds = await data.json();

    setFeeds(feeds);
  }, []);

  const resetMessage = useCallback(() => {
    setMessage('');
  }, [fetchFeeds]);

  const handleFeedType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedType(e.target.value);
  }, [setFeedType]);

  // const handleFeeds = useCallback((feeds: ActivityFeedDescrProps[]) => {
  //   setFeeds(feeds);
  // }, [feeds]);

  useEffect(() => {
    fetchFeeds();
  }, []);

  const useMemoFeedFeatures = useMemo(() => {
    return {
      feeds,
      setFeeds,
      feedType,
    }
  }, [
    feeds,
    feedType,
    setFeeds
  ]);

  return {
    ...useMemoFeedFeatures,
    handleFeedType,
    message,
    setMessage,
    resetMessage,
    fetchFeeds,
  }
}

export default useFeedFeatureContext;
