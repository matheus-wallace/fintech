import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';
import { DataContextProvider } from './Context/DataContext';
import Resumo from './Pages/Resumo';
import './style.css';

function App() {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
