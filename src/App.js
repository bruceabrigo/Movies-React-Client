import './App.css';
import api from "./api/apiConfig";
import Layout from './components/Layout';
import Home from './components/home/Home';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {
  // create set state for movies api call
  const [movies, setMovies] = useState();

  // change state function for movies
  const getMovies = async () => {

    try {
      const response = await api.get('/api/v1/movies');
  
      // set movie state to response dat from api GET request
      console.log(response.data)

      setMovies(response.data)

    } catch(err) {
      console.log('Error returning data', err);
    }

  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}> </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
