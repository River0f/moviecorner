import s from './App.module.scss';
import { MoviesPopularPage } from './components/pages/moviesPopularPage';

const App = () => {
  return (
    <div className={s.app}>
      <MoviesPopularPage />
    </div>
  );
}

export default App;
