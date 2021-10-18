
import './App.css';
import Home from './Componants/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Services from './Componants/Services/Services';
import Profle from './Componants/Profile/Profle';
import Blog from './Componants/Blog/Blog';
import Contact from './Componants/Contact/Contact';
import PageNotFound from './Componants/PageNotFound/PageNotFound';
import Footer from './Componants/Footer/Footer';

import DetailsView from './Componants/DetailsView/DetailsView';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/detail_service/:serviceId">
            <DetailsView></DetailsView>
          </Route>
          <Route path="/profile">
            <Profle></Profle>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
