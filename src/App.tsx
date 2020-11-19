import React, { useEffect, useState } from 'react';
import { Toolbar } from './components/Toolbar';
import Economy from './components/Economy';
import { items } from './lib/db';

const App: React.FC = () => {
  const [industries, setIndustries] = useState<{
    active: Array<any>;
    toggleAll: boolean;
  }>({
    active: [],
    toggleAll: true,
  });

  useEffect(() => {
    if (industries.active.length === 0) {
      const newArr = items.map((x) => {
        return {
          ...x,
          active: true,
        };
      });
      setIndustries({
        active: newArr,
        toggleAll: industries.toggleAll,
      });
    }
  }, [industries]);

  return (
    <>
      <Toolbar industries={industries} setIndustries={setIndustries} />
      <Economy industries={industries} />
    </>
  );
};

export default App;
