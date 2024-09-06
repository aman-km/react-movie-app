import React, { createContext, useState } from 'react';

export const context = createContext();

export const WatchlistProvider = ({ children }) => {
  const [wcount, setWcount] = useState(0);
  const [watchlist, setWatchlist] = useState([]);

  return (
    <context.Provider value={{ wcount, setWcount }}>
      {children}
    </context.Provider>
  );
};