import { createContext, PropsWithChildren, useContext } from 'react';
import useFetch from '../hooks/useFetch';

type IDataContext = {
  loading: boolean;
  error: string | null;
  data: IVenda[] | null;
};
type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartao';
  data: string;
  parcelas: number | null;
};

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('UseData precis esta em DataContextProvider');
  return context;
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>('https://data.origamid.dev/vendas');

  return <DataContext.Provider value={{ data, loading, error }}>{children}</DataContext.Provider>;
};
