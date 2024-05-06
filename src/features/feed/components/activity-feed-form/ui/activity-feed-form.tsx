import React, { useCallback, useRef, useState } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import { ActivityFeedFormFooter } from '../components/activity-feed-form-footer';
import FocusOutside from '../helper/outside-click';
import { FeedFormIcon } from '../components/feed-form-icon';
import { ActivityFeedFormInput } from '../components/activity-feed-form-input';
// import { usePostFeedMutation } from '@features/feed/api/apiSlice';

const ActivityFeedForm = () => {
  // const [postFeed] = usePostFeedMutation();
  const [footer, setFooter] = useState(false);
  const messsageRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    setFooter(true);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.nativeEvent)
    // const $formData = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries());
    // const data = { ...$formData, user: "You", contact: "user", timestamp: new Date().valueOf() }
    // postFeed(data);
    if (messsageRef.current) {
      messsageRef.current.value = "";
    }
  }

  const onOutsideClick = useCallback(() => {
    setFooter(false);
  }, [footer]);

  return (
    <Grid2 sx={{ display: 'flex', width: '600px', justifyContent: 'end' }}>
      <FeedFormIcon />
      <FocusOutside clickedOutside={onOutsideClick}>
        <form onSubmit={handleSubmit}>
          <Grid2 sx={{ width: '500px', bgcolor: '#eee', p: 1.5, mr: 0 }}>
            <ActivityFeedFormInput ref={messsageRef} handleFocus={handleFocus} />
            <ActivityFeedFormFooter isActive={footer} />
          </Grid2>
        </form>
      </FocusOutside>
    </Grid2>
  );
};

export { ActivityFeedForm };
