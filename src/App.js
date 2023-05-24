import './App.css';
import { Route, useLocation } from 'react-router-dom';
import { Home, Landing, Form, Detail } from './views/index';
import NavBar from './components/NavBar/NavBar';

function App() {

  const { pathname } = useLocation()

  return (
    <div className="App">

        { pathname !== '/' &&  <NavBar />}

        <Route exact path='/' component={Landing} />

        <Route path='/home' render={() => <Home /> } />

        <Route path='/detail/:id' render={() => <Detail/> } />

        <Route path='/create' render={() => <Form/> } />

    </div>
  );
}

export default App;
