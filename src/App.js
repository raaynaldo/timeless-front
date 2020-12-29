import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./containers/Home";

// const render = () => {
//   return (
//     <div>
//       <Link to="/login">
//         <button>Login</button>
//       </Link>
//       <Link to="/signup">
//         <button>SignUp</button>
//       </Link>
//     </div>
//   );
// };

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
    // {/* <Switch location={true}>
    //   <Route exact path="/login"
    //   component={withRouter(<Login />)}
    //   />
    //   <Route exact path="/signup"
    //   component={withRouter(<SignUp />)}
    //   />
    //   <Route exact path="/"
    //   component={withRouter(<Home />)}
    //   />
    // </Switch> */}
  );
}

export default App;
