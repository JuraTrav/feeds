interface ActivityFeedFeatureProps {
  id: string;
  user: string;
  type: string;
  contact: string;
  message: string;
  icon: string;
  timestamp: number;
}

export interface ActivityFeedDescrProps extends Partial<ActivityFeedFeatureProps> {
  deleteItem: (timestamp: string | undefined) => void;
}
