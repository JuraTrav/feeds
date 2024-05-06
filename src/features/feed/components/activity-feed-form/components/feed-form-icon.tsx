import Grid2 from "@mui/material/Unstable_Grid2";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { memo } from "react";

const FeedFormIcon = () => {
  return (
    <Grid2 sx={{ display: 'flex', mr: 2, mt: 1 }}>
      <FormatListBulletedIcon sx={{ color: '#999', border: '1px solid #999', borderRadius: 50, p: 0.8 }} fontSize="inherit" />
    </Grid2>
  );
};

const MemoFeedFormIcon = memo(FeedFormIcon);

export { MemoFeedFormIcon as FeedFormIcon };