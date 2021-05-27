import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Summary, Entry, Thanks } from "./pages";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Entry} />
          <Route exact path="/summary" component={Summary} />
          <Route exact path="/thanks" component={Thanks} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
