"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const getHello = async () => {
      const response = await fetch("http://localhost:8000");
      const json = await response.json();
      setData(json);
    };
    getHello();
  }, []);
  if (!data) {
    return <div>...Loading</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
}
