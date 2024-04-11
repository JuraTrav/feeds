import { act, render, screen } from '@testing-library/react';
import { FeedFeature } from '../feed';

jest.mock('../feed/components/activity-feed-form', () => ({
  ActivityFeedForm: () => <div>ActivityFeedForm</div>,
  ActivityFeedFormRadioMemo: () => <div>ActivityFeedFormRadioMemo</div>,
}));

jest.mock('../feed/components/activity-feed', () => ({
  ActivityFeed: () => <div>ActivityFeed</div>,
}));

jest.mock('../feed/components/activity-feed/components/activity-feed-descr', () => ({
  ActivityFeedDescr: () => <div>ActivityFeedDescr</div>,
}));

jest.mock('../feed/components/activity-feed/components/activity-feed-detail', () => ({
  ActivityFeedDetail: () => <div>ActivityFeedHeader</div>,
}));

const mockFetchUserData = (data: []) => {
  return global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => data
    })
  )
}

describe('FeedFeature', () => {
  it('render FeedFeature with ActivityFeed component', async () => {
    mockFetchUserData([]);
    act(() => {
      render(
        <FeedFeature />
      );
    });
    const activityFeed = screen.getByText('ActivityFeed');

    expect(activityFeed).toBeInTheDocument();
  });


  it('render FeedFeature with ActivityFeedForm component', async () => {
    mockFetchUserData([]);
    act(() => {
      render(
        <FeedFeature />
      );
    });
    const activityFeedForm = screen.getByText('ActivityFeedForm');

    expect(activityFeedForm).toBeInTheDocument();
  });
});
