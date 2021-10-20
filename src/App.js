import './App.css';
import Home from './Componants/Home/Home';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Services from './Componants/Services/Services';
import Profle from './Componants/Profile/Profle';
import Blog from './Componants/Blog/Blog';
import Contact from './Componants/Contact/Contact';
import PageNotFound from './Componants/PageNotFound/PageNotFound';
import Footer from './Componants/Footer/Footer';
import DetailsView from './Componants/DetailsView/DetailsView';
import PrivateRoute from './Componants/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Header from './Componants/Header/Header';
import Signup from './Componants/Signup/Signup';
import Login from './Componants/Login/Login';
import ExpertTips from './Componants/ExpertTips/ExpertTips';




function App() {
  return (
    <div className="App">


      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/profile">
              <Profle></Profle>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <PrivateRoute path="/detail_service/:serviceId">
              <DetailsView></DetailsView>
            </PrivateRoute>
            <PrivateRoute path="/experttips">
              <ExpertTips></ExpertTips>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider >
    </div>

  );
}

export default App;
