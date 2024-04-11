import FeedIcon from '@components/feed-icon/feed-icon';
import Grid2 from '@mui/material/Unstable_Grid2';
import { DateUtils } from '@utils/DateUtils';
import React from 'react';

const ActivityFeedDetail = ({ ...props }) => {
  const date =
    DateUtils.diffBetweenDates(Number(props.date), props.date1) > 24
      ? DateUtils.getDays(Number(props.date)) + 'd'
      : DateUtils.diffBetweenDates(Number(props.date), props.date1) + 'h';

  return (
    <>
      <Grid2 sx={{ display: 'flex', mr: 1.5, mt: 1.6, fontSize: 12 }}>{date}</Grid2>
      <Grid2 sx={{ display: 'flex', mr: 2, mt: 1 }}>
        <FeedIcon
          iconName={props.iconName}
          sx={{ color: '#999', border: '1px solid #999', borderRadius: 50, p: 0.8 }}
          fontSize="inherit"
        />
      </Grid2>
    </>
  );
};

const ActivityFeedDetailMemo = React.memo(ActivityFeedDetail, (prevProps, nextProps) => {
  return prevProps.iconName === nextProps.iconName;
});

export { ActivityFeedDetailMemo };
