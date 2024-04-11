import { useState } from "react";

type FocusOutsideProps = {
  clickedOutside: () => void;
  children: React.ReactNode;
};

const FocusOutside = ({ clickedOutside, ...props }: FocusOutsideProps) => {

  let _timeoutID: ReturnType<typeof setTimeout>;

  const [IsManagingFocus, setIsManagingFocus] = useState(false);

  const _onBlur = () => {
    _timeoutID = setTimeout(() => {
      if (IsManagingFocus) {
        setIsManagingFocus(false)
        clickedOutside()
      }
    }, 0);
  }

  const _onFocus = () => {
    clearTimeout(_timeoutID);
    if (!IsManagingFocus) {
      setIsManagingFocus(true)
    }
  }

  return (
    <div
      onBlur={_onBlur}
      onFocus={_onFocus}
    >{props.children}</div>
  );
}

export default FocusOutside;