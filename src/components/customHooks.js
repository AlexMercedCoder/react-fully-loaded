import React from "react";

//////////////////////////////
// UseFetch hook
// Pass in a url and it will return the api data
// and a function to update the url and refetch
//////////////////////////////
export const useFetch = (url) => {
  const [urlState, setUrl] = React.useState(url);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const response = await fetch(urlState);
      const json = await response.json();
      setData(json);
    };

    getData();
  }, [urlState]);

  return [data, setUrl];
};

//////////////////////////////
// useAdjuster
// Returns initial Value and Increment and Decrement function
// Adjusts by the passed in interval
//////////////////////////////
export const useAdjuster = (initial, interval) => {
  const [count, setCount] = React.useEffect(initial);

  const inc = () => setCount(count + interval);

  const dec = () => setCount(count - interval);

  return [count, inc, dec];
};
