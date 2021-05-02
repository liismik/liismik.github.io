import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route><MainPage></MainPage></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
