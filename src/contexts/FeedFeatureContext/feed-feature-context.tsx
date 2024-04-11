import { ActivityFeedDescrProps } from '@features/feed/types/activity-feed';
import { useCallback, useEffect, useState } from 'react';

export type FeedFeatureContextProps = {
  feeds: ActivityFeedDescrProps[];
  setFeeds: React.Dispatch<React.SetStateAction<ActivityFeedDescrProps[] | []>>;
  fetchFeeds: () => Promise<void>;
}

const useFeedFeatureContext = (): FeedFeatureContextProps => {
  const [feeds, setFeeds] = useState<ActivityFeedDescrProps[] | []>([])

  const fetchFeeds = useCallback(async () => {
    const data = await fetch('http://localhost:5000/feeds?_sort=-timestamp');
    const feeds = await data.json();

    setFeeds(feeds);
  }, []);

  useEffect(() => {
    fetchFeeds();
  }, []);

  return {
    feeds,
    setFeeds,
    fetchFeeds,
  }
}

export default useFeedFeatureContext;
