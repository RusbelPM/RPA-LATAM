import {BrowserRouter} from "react-router-dom";
import './styles/styles.scss'
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
    <AppRouter/>
  </BrowserRouter>
  );
}

export default App;
