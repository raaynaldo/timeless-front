import "./App.css";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import Login from './containers/Login'
import SignUp from './containers/SignUp'

function App() {
  return (
    <div>
      <Toolbar />
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
