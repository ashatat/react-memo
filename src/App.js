import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Input from './components/Input';

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [giphyState] = useFetchData('https://gifphy/', []);

  return (
    <div className="App">
      {giphyState.loading && 'loading...'}
      <Input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {giphyState.error && giphyState.error}
    </div>
  );
}

/**
 * custom hook to fetch data on the first render
 * @param {string} url url  to fetch data from api
 * @param {any} initState the initial state
 * @returns [state, error]
 */
function useFetchData(url, initState) {
  const [data, setState] = useState(initState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let mount = true;
    async function fetData() {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        if (mount) {
          setLoading(false);
          setState(data);
        }
      } catch (error) {
        if (mount) {
          setLoading(false);
          setError('aaaaaa');
        }
      }
    }

    fetData();
    return () => {
      mount = false;
    };
  }, [url]);

  const state = {
    data,
    error,
    loading,
  };
  return [state];
}

export default App;
