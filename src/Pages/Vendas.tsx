import VendaItem from '../components/VendaItem/VendaItem';
import { useData } from '../Context/DataContext';

const Vendas = () => {
  const { data } = useData();
  if (data === null) return null;
  return (
    <ul>
      {data.map((venda) => (
        <li>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
