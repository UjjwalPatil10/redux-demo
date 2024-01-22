import { useRoutes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { routes } from './routes';


function App() {
  const content = useRoutes(routes);

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
