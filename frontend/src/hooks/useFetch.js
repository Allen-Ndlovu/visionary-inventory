import { useState, useEffect } from "react";

export function useFetch(fetcher, args = []) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    let mounted = true;
    fetcher(...args)
      .then(res => mounted && setData(res.data))
      .catch(err => mounted && setError(err))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [fetcher, ...args]);

  return { data, loading, error };
}
