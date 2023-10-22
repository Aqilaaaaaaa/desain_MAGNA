import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/main-new.css';
import './assets/css/swiper-bundle.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Router from './components/Router';
import BackToTopButton from './components/layouts/ScrollToTop';

function App() {
  return (
    <>
      <Helmet>
        <title>Magna Juara Kreasi</title>
        <meta name="description" content="Partner terpercaya yang mengkhususkan diri dalam membantu bisnis meraih kesuksesan melalui pemanfaatan potensi penuh dunia digital" />
      </Helmet>
      <BrowserRouter>
        <BackToTopButton />
        <Router />
      </BrowserRouter>
    </>

  );
}

export default App;
