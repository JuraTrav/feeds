import { FormControlLabel, Radio, Button, ButtonOwnProps } from "@mui/material";
import FeedIcon from "@components/feed-icon/feed-icon";
import { memo } from "react";

export type FeedTypesProps = 'note' | 'call' | 'meeting' | 'coffee';

type ActivityFeedFormRadioProps = ButtonOwnProps & {
  iconName: FeedTypesProps;
  feedCheckedIconColor: string;
  feedIconColor: string;
}

const ActivityFeedFormRadio = ({ iconName, feedCheckedIconColor, feedIconColor, ...props }: ActivityFeedFormRadioProps) => {
  return (
    <FormControlLabel
      value={iconName}
      control={
        <Radio
          sx={{ p: 0 }}
          checkedIcon={
            <Button
              color='rdbtnactive'
              {...props}
            >
              <FeedIcon iconName={iconName} sx={{ color: feedCheckedIconColor }} fontSize="inherit" />
            </Button>
          }
          icon={
            <Button
              color='rdbtn'
              {...props}
            >
              <FeedIcon iconName={iconName} sx={{ color: feedIconColor }} fontSize="inherit" />
            </Button>
          }
        />
      }
      label=""
    />
  );
};

const ActivityFeedFormRadioMemo = memo(ActivityFeedFormRadio);

export { ActivityFeedFormRadioMemo as ActivityFeedFormRadio };
