// import { useFeedContext } from '@contexts/FeedFeatureContext/feed-feature-context-provider';
import { ActivityFeedDescrProps } from '@features/feed/types/activity-feed';
import { MemoActivityFeed } from '../components/activity-feed';
import { useGetFeedsQuery } from '@features/feed/api/apiSlice';

const ActivityFeeds = () => {
  const { data: feeds, isLoading, isError, isSuccess } = useGetFeedsQuery();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = feeds.map((feed: ActivityFeedDescrProps) => (
      <MemoActivityFeed key={feed.timestamp} feed={feed} />
    ))
  } else if (isError) {
    content = <div>Error</div>;
  }

  return (
    <>
      {content}
    </>
  );
};

export { ActivityFeeds };
