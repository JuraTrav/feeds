import { RadioGroup } from "@mui/material";
import { FeedTypesProps } from "./activity-feed-form-radio";
import { ActivityFeedFormRadio } from "./activity-feed-form-radio";
import { useSelector, useDispatch } from 'react-redux';
import { setFeedType, selectFeedType, selectFeedTypes } from '@features/feed/store/feedsSlice';

export const FeedsRadioButtons = () => {
  const feedType = useSelector(selectFeedType);
  const FeedRadioButtons = useSelector(selectFeedTypes);
  const dispatch = useDispatch();

  return (
    <RadioGroup
      row
      defaultValue={feedType || 'note'}
      value={feedType}
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="type"
      onChange={(e) => dispatch(setFeedType(e.target.value as FeedTypesProps))}
    >
      {FeedRadioButtons.map((iconName) => (
        <ActivityFeedFormRadio
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
  )
}

export default FeedsRadioButtons;

