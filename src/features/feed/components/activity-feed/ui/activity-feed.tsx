// import { useEffect } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import { ActivityFeedDescrMemo } from '../components/activity-feed-descr';
import { ActivityFeedDetailMemo } from '../components/activity-feed-detail';
import { useFeedContext } from '@contexts/FeedFeatureContext/feed-feature-context-provider';
import { ActivityFeedDescrProps } from '@features/feed/types/activity-feed';

const ActivityFeed = () => {
  const { feeds, fetchFeeds } = useFeedContext();

  const handleDelete = async (id: string | undefined) => {
    await fetch(`http://localhost:5000/feeds/${id}`, {
      method: 'DELETE',
    });

    fetchFeeds();
  }

  return (
    <>
      {feeds.map((feed: ActivityFeedDescrProps) => (
        <Grid2 key={feed.timestamp} sx={{ display: 'flex', width: '600px', mt: 3, justifyContent: 'end' }}>
          <ActivityFeedDetailMemo iconName={feed.type} date={feed.timestamp} date1={Date.now().valueOf().toString()} />
          <ActivityFeedDescrMemo {...feed} deleteItem={handleDelete} />
        </Grid2>
      ))}
    </>
  );
};

export { ActivityFeed };
