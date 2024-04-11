import { Button, FormControl, RadioGroup } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { ActivityFeedFormRadioMemo } from './activity-feed-form-radio';

const FeedRadioButtons = ['note', 'call', 'meeting', 'coffee'];

type ActivityFeedFormFooterProps = {
  submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ActivityFeedFormFooter = ({ change, submit }: ActivityFeedFormFooterProps) => {
  return (
    <>
      <Grid2 sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <FormControl sx={{ verticalAlign: 'middle', "& label.MuiFormControlLabel-root": { m: 0, p: 0 } }}>
          <RadioGroup
            row
            defaultValue='note'
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={change}>
            {FeedRadioButtons.map((iconName) => (
              <ActivityFeedFormRadioMemo
                key={iconName}
                iconName={iconName}
                feedCheckedIconColor="#fff"
                feedIconColor="#999"
                sx={{ minWidth: '12px', p: 1, m: 1, borderRadius: 50 }}
                variant="contained"
                size="small"
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button size="small" type="submit" onClick={submit} variant="contained" color="primary">
          Submit
        </Button>
      </Grid2>
    </>
  );
};

export { ActivityFeedFormFooter };
