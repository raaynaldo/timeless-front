import "./App.css";
import Button from "@material-ui/core/Button";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";

function App() {
  return (
    <div>
      <Toolbar />
      <h1>cool World bryce </h1>
      {/* <Typography variant="h1" component="h2">
        h1. Heading
      </Typography> */}
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
