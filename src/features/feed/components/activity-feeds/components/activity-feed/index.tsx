import React from "react";
import { ActivityFeedDescrMemo } from "../activity-feed-descr";
import { ActivityFeedDetailMemo } from "../activity-feed-detail";
import Grid2 from "@mui/material/Unstable_Grid2";
import { ActivityFeedProps } from '@features/feed/types/activity-feed';

const ActivityFeed = ({ feed }: ActivityFeedProps) => {
  return (
    <Grid2 key={feed.timestamp} sx={{ display: 'flex', width: '600px', mt: 3, justifyContent: 'end' }}>
      <ActivityFeedDetailMemo iconName={feed.type} date={feed.timestamp} date1={Date.now().valueOf().toString()} />
      <ActivityFeedDescrMemo {...feed} />
    </Grid2>
  )
}

const MemoActivityFeed = React.memo(ActivityFeed, (prevProps, nextProps) => {
  return prevProps.feed.timestamp === nextProps.feed.timestamp;
});

export { MemoActivityFeed };