import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { ActivityFeedFormFooter } from '../components/activity-feed-form-footer';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FocusOutside from '../helper/outside-click';
import { useFeedContext } from '@contexts/FeedFeatureContext/feed-feature-context-provider';

const ActivityFeedForm = () => {
  const { fetchFeeds } = useFeedContext();
  const [footer, setFooter] = useState(false);
  const [feedType, setFeedType] = useState('note');
  const [message, setMessage] = useState('');
  const handleFocus = () => {
    setFooter(true);
  };
  const handleSubmit = () => {
    // event.preventDefault();
    fetch('http://localhost:5000/feeds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "user": "You",
        "contact": "Milton Romaguera",
        "message": message,
        "type": feedType,
        "timestamp": new Date().valueOf()
      })
    }).then(response => {
      console.log(response);
      fetchFeeds();
    });
    setMessage('');
    setFooter(false);
  };
  const onOutsideClick = () => {
    setFooter(false);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedType(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }

  return (
    <Grid2 sx={{ display: 'flex', width: '600px', justifyContent: 'end' }}>
      <Grid2 sx={{ display: 'flex', mr: 2, mt: 1 }}>
        <FormatListBulletedIcon sx={{ color: '#999', border: '1px solid #999', borderRadius: 50, p: 0.8 }} fontSize="inherit" />
      </Grid2>
      <FocusOutside clickedOutside={onOutsideClick}>
        <Grid2 sx={{ width: '500px', bgcolor: '#eee', p: 1.5, mr: 0 }}>
          <TextField
            size="small"
            sx={{ bgcolor: '#fff', borderRadius: 1 }}
            fullWidth
            multiline
            rows={footer ? 2 : 1}
            placeholder="Add a note about Milton Romaguera..."
            id="outlined-basic"
            variant="outlined"
            value={message}
            onChange={handleInputChange}
            onFocus={handleFocus}
          />
          {footer && (
            <>
              <ActivityFeedFormFooter change={handleChange} submit={handleSubmit} />
            </>
          )}
        </Grid2>
      </FocusOutside>
    </Grid2>
  );
};

export { ActivityFeedForm };
