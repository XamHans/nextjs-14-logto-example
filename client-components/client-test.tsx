// ClientComponent.tsx
"use client";

import { getSensitiveData } from '@/server/actions';
import React, { useEffect, useState } from 'react';

const ClientComponent: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await getSensitiveData();
      setData(result);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Client Component</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default ClientComponent;