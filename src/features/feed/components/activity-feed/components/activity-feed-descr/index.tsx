import { Button, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React from 'react';
import { useState } from 'react';

const ActivityFeedDescr = ({ deleteItem, ...feed }: ActivityFeedDescrProps) => {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    deleteItem(feed.id);
  };

  return (
    <Grid2
      onMouseEnter={() => setHidden(true)}
      onMouseLeave={() => setHidden(false)}
      sx={{ width: '500px', bgcolor: '#eee', px: 1.5, py: 1.25, mr: 0, textAlign: 'left', position: 'relative' }}>
      <Typography variant="subtitle1" sx={{ color: '#111' }}>
        <Typography sx={{ display: 'inline', color: '#00c6ed' }}>{feed.user}</Typography>
        {feed.type === 'note' ? ' added' : ' had'} a {feed.type} {feed.type === 'note' ? 'to ' : 'with '}
        <Typography sx={{ display: 'inline', color: '#00c6ed' }}>{feed.contact}</Typography>
      </Typography>
      <Typography variant="body2" sx={{ color: '#111' }}>
        {feed.message}
      </Typography>
      {hidden ? (
        <Button onClick={handleClick} variant="text" sx={{ color: '#00c6ed', position: 'absolute', top: 15, right: 2 }}>
          Delete
        </Button>
      ) : null}
    </Grid2>
  );
};

const ActivityFeedDescrMemo = React.memo(ActivityFeedDescr, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});

export { ActivityFeedDescrMemo };
