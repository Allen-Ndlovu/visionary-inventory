import { useState, useEffect } from 'react';
import api from '../services/api';

export default function useFetch(path) {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get(path).then(r => setData(r.data));
  }, [path]);
  return data;
}
