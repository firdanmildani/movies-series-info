import './styles/style.css'
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import { apiKey, trending, popular } from "./modules/Api";
import Hero from './components/Hero';

const itemsProps = {
  numberOfMovies:12,
  moviesOn:true,
  tvSeriesOn:false,
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero 
      apiEndpoint={`${trending}?api_key=${apiKey}`}
      numberOfMovies={1}
      />
      <CardContainer 
      {...itemsProps}
      apiEndpoint={`${trending}?api_key=${apiKey}`}
      containerHeading={"Trending Movies"}
      />

      <CardContainer 
      {...itemsProps} 
      apiEndpoint={`${popular}?api_key=${apiKey}`}
      containerHeading={"Popular Movies"}
      />
    </div>
  );
}

export default App;
