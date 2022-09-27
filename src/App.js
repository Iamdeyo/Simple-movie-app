import MovieList from './componets/Movies';
import Navbar from './componets/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './componets/Movie';
import NotFound from './componets/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<MovieList />} />
          <Route path="/:id" exact element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
