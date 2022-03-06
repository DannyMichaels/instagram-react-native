import { useState, useEffect } from 'react';

export default function useFetch(fetcherFn) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetcherFn();
        setResponse(res);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return [response, isLoading, error];
}
