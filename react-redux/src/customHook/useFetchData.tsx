import axios, { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";

export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

export const useFetchData = (url: string, method: HTTPMethod) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    switch (method) {
      case "GET":
        axios
          .get(url)
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          })
          .catch((err) => {
            setError(err);
          })
          .finally(() => {
            setLoading(false);
          });
    }
  }, []);
  return { data, error, loading };
};
