import * as React from "react";

function useStateWithCallback<T>(
  initialState: T,
  callback: (state: T) => void
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = React.useState<T>(initialState);

  React.useEffect(() => {
    callback(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, setState];
}

export default useStateWithCallback;
