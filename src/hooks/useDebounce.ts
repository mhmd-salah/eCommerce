import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useDebounce = (
  initialState: boolean,
  delay: number
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    if (!state) return;
    setState(true);
    const timeout = setTimeout(() => setState(false), delay);
    return () => clearTimeout(timeout);
  }, [delay, state]);

  return [state, setState];
};

export default useDebounce;
