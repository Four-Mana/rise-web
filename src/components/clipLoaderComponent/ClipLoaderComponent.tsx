
'use client';

import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

export const ClipLoaderComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <BeatLoader color={"#f28300"} loading={loading} size={15} aria-label="Loading Spinner"  margin={3}/>
    </div>
  ) : (
    <>{children}</>
  );
};


