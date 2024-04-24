import React from 'react';
import { Button, FormControl } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import FeedsRadioButtons from './feeds-radio-buttons';

type ActivityFeedFormFooterProps = {
  isActive: boolean;
};

const ActivityFeedFormFooter = ({ isActive }: ActivityFeedFormFooterProps) => {
  return (
    isActive ?
      <>
        <Grid2 sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
          <FormControl sx={{ verticalAlign: 'middle', "& label.MuiFormControlLabel-root": { m: 0, p: 0 } }}>
            <FeedsRadioButtons />
          </FormControl>
          <Button size="small" type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid2>
      </> : null
  );
};

const ActivityFeedFormFooterMemo = React.memo(ActivityFeedFormFooter, (prevProps, nextProps) => {
  return prevProps.isActive === nextProps.isActive;
});

export { ActivityFeedFormFooterMemo as ActivityFeedFormFooter };
