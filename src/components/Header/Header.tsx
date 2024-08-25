import React, { useEffect, useState } from 'react';
import { useData } from '../../Context/DataContext';
import DateRange from '../DateRange/DateRange';
import Meses from '../Meses/Meses';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [title, setTitle] = useState('Resumo');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('Resumo');
      document.title = 'Fintech | Resumo';
    } else if (location.pathname === '/vendas') {
      setTitle('Vendas');
      document.title = 'Fintech | Vendas';
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="dateRange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
