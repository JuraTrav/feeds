import * as Icon from '@mui/icons-material';
import { SvgIconOwnProps } from '@mui/material';

const Icons = {
  "meeting": "Person",
  "call": "Call",
  "note": "ChatBubble",
  "coffee": "FreeBreakfast",
}

interface FeedIconProps extends Partial<SvgIconOwnProps> {
  iconName: string;
}

const FeedIcon = ({ iconName, ...props }: FeedIconProps) => {
  const icon = Icons[iconName as keyof typeof Icons];
  const FeedIcon = Icon[icon as keyof typeof Icon];

  return (
    <FeedIcon {...props} />
  );
}

export default FeedIcon;