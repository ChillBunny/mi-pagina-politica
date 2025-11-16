import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import Social from "./pages/Social";
import Doctrine from "./pages/Doctrine";
import Join from "./pages/Join";
import "./styles/globals.css";

function App() {
  return (
    <MainLayout>
      {/* Secciones principales en orden lógico */}
      <Home />
      <Agenda />
      <Doctrine />
      <Team />
      <Join />
      <Donate />
      <Social />
    </MainLayout>
  );
}

export default App;
