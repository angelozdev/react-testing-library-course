import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Summary, Entry } from "./pages";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Entry} />
          <Route exact path="/summary" component={Summary} />
          <Route exact path="/thanks">
            <h1>Thanks :D</h1>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
