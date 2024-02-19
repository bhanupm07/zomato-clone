import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      setError(null);
      dispatch(thunk(arg))
        .unwrap()
        .then((result) => setData(result))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );
  return [runThunk, data, isLoading, error];
}
