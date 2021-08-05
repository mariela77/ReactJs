import Form from './components/Form';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Civilization from './components/Civilization';
import Usuario from './components/Usuario';

function App() {
  return (
    <Router>
      <div className="container m-3">
        <div className="btn-group">
          <button className="btn-dark">
            <Link to="/">Inicio</Link>
          </button>
          <button className="btn-dark">
            <Link to="/form">Form</Link>
          </button>
          <button className="btn-dark">
            <Link to="/users">Users</Link>
          </button>
          <button className="btn-dark">
            <Link to="/posts">Posts</Link>
          </button>
          <button className="btn-dark">
            <Link to="/comments">Comments</Link>
          </button>
          <button className="btn-dark">
            <Link to="/civilization">Civilization</Link>
          </button>
        </div>
        <hr />

        <Switch>
          <Route path="/civilization/:id">
            <Usuario />
          </Route>
          <Route path="/civilization">
            <Civilization />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/" exact>
            <h1>Inicio</h1>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
