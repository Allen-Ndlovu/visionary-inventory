import { useState, useEffect } from 'react';
import { getList } from '../services/api';

export default function useFetch(resource) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getList(resource)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [resource]);

  return { data, loading, error };
}
