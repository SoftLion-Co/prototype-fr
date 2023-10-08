"use client";

import { useEffect } from "react";

export const useClient = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, [callback]);
};

export const useClientServer = () => {
  useEffect(() => {
    console.log("Running server-side logic");

    const fetchData = async () => {
      try {
        const response = await fetch("https://example.com/api/data");
        const data = await response.json();
        console.log("Data fetched on server:", data);
      } catch (error) {
        console.error("Error fetching data on server:", error);
      }
    };

    fetchData();
  }, []);
};
