import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Home from './components/Home';

const Data = lazy(() => import(
  /* webpackChunkName: "data" */
  './components/Data'
));
const Game = lazy(() => import(
  /* webpackChunkName: "game" */
  './components/Game'
));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
