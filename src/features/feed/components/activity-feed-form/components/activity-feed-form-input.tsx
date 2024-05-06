import { TextField } from "@mui/material";
import React, { forwardRef, memo } from "react";

type FormInputProps = {
  handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
};

type FormInputRef = HTMLInputElement;

const ActivityFeedFormInput = forwardRef<FormInputRef, FormInputProps>(({ handleFocus }, ref) => {
  return (
    <TextField
      inputRef={ref}
      size="small"
      sx={{ bgcolor: '#fff', borderRadius: 1 }}
      fullWidth
      multiline
      rows={1}
      name={'message'}
      placeholder="Add a note about Milton Romaguera..."
      id="outlined-basic"
      variant="outlined"
      onFocus={handleFocus}
    />
  );
});

const MemoActivityFeedFormInput = memo(ActivityFeedFormInput);

export { MemoActivityFeedFormInput as ActivityFeedFormInput };