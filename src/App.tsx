import { useEffect } from "react";
import { fetchAPIConfig, fetchCountries, fetchJobs, fetchLanguages, fetchPrimaryTranslations, fetchTimezones } from "./api/asyncActions/fetchConfigs";
import { MoviesPopularPage } from "./components/pages/moviesPopularPage";
import { useTypedDispatch } from "./hooks/useTypeSelctor";

const App = () => {

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchAPIConfig());
    dispatch(fetchCountries());
    dispatch(fetchJobs());
    dispatch(fetchLanguages());
    dispatch(fetchPrimaryTranslations());
    dispatch(fetchTimezones());
  }, [dispatch])

  return (
    <div>
      <MoviesPopularPage />
    </div>
  );
}

export default App;
