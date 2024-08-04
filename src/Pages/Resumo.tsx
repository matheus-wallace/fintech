import React from 'react';
import { useData } from '../Context/DataContext';

const Resumo = () => {
  const { data } = useData();
  console.log(data);

  return <div></div>;
};

export default Resumo;
