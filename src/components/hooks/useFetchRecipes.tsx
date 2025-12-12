import { useState, useCallback } from 'react';
import axios from 'axios';

export function useFetchRecipes<T, R = T[]>(url: string, mapFn: (data: T) => R) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<R | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<T>(url);
      setData(mapFn(response.data));
    } catch {
      setError('Unable to load recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [url, mapFn]);

  return { loading, error, data, fetchData, setError };
}