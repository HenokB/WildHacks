import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Gallery from "./pages/gallery/Gallery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <TopBar />
      <Switch>
        <Route exact path="/">{user ?  <Home /> : <Register />}</Route>

        <Route path="/register">{user ? <Home /> : <Register />}</Route>

        <Route path="/login">{user ? <Home /> : <Login />}</Route>

        <Route path="/forest"></Route>

        <Route path="/wild-life"></Route>

        <Route path="/gallery">{user ? <Gallery /> : <Register />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
