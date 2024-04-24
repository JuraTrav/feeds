import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ActivityFeedFeatureProps } from '@features/feed/types/activity-feed';
import { FeedTypesProps } from '../components/activity-feed-form/components/activity-feed-form-radio';
import { RootState } from '../../../app/store';

type FeedsSliceProps = {
  feedsList: ActivityFeedFeatureProps[];
  feedType: FeedTypesProps;
  FeedRadioButtons: FeedTypesProps[];
};

const initialState: FeedsSliceProps = {
  feedsList: [],
  feedType: 'note',
  FeedRadioButtons: ['note', 'call', 'meeting', 'coffee'],
};

export const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    setFeeds: (state, action: PayloadAction<ActivityFeedFeatureProps>) => {
      state.feedsList.push(action.payload);
    },
    setFeedType: (state, action: PayloadAction<FeedTypesProps>) => {
      state.feedType = action.payload;
    },
  },
});

export const selectFeedType = (state: RootState) => state.feeds.feedType;
export const selectFeedTypes = (state: RootState) => state.feeds.FeedRadioButtons;

export const { setFeeds, setFeedType } = feedsSlice.actions;

export default feedsSlice.reducer;
