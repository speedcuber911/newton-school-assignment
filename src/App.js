import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./Screens/Home";
import PostDetails from "./Screens/PostDetails";
import Posts from "./Screens/Posts";
import { TopNav } from "./components/TopNav";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/details">
            <PostDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
