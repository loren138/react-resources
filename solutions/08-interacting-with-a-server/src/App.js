import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items')
      .then((result) => setItems(result.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Header />
      <Home items={items} />
    </div>
  );
}

export default App;
