import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Territory from "./pages/Territory";
import Donate from "./pages/Donate";
import Social from "./pages/Social";
import Doctrine from "./pages/Doctrine";
import Join from "./pages/Join";
import "./styles/globals.css";

//Comité de campaña / Comité electoral / Corriente interna
function App() {
  return (
    <MainLayout>
      {/* Secciones principales en orden lógico */}
      <Home />
      <Agenda />
      <Doctrine />
      <Territory />
      <Join />
      <Donate />
      <Social />
    </MainLayout>
  );
}

export default App;
