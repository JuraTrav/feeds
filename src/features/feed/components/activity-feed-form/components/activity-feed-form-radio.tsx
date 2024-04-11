import { FormControlLabel, Radio, Button, ButtonOwnProps } from "@mui/material";
import FeedIcon from "@components/feed-icon/feed-icon";
import React from "react";

interface ActivityFeedFormRadioProps extends ButtonOwnProps {
  iconName: string;
  feedCheckedIconColor: string;
  feedIconColor: string;
}

const ActivityFeedFormRadio = ({ iconName, feedCheckedIconColor, feedIconColor, ...props }: ActivityFeedFormRadioProps) => {
  console.log(iconName);
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

const ActivityFeedFormRadioMemo = React.memo(ActivityFeedFormRadio, (prevProps, nextProps) => {
  return prevProps.iconName === nextProps.iconName;
});

export { ActivityFeedFormRadioMemo };
