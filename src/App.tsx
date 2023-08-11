import { ThemeProvider } from "styled-components";
import LightTheme from "./styles/LightTheme";
import Home from "./pages/Home";


function App() {
  document.body.dir = "rtl";
  return (
    <ThemeProvider theme={LightTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
