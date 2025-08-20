import { useState } from "react";

const useShowHook = () => {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  return { show, open, close };
};

export default useShowHook;
