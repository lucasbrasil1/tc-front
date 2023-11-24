import { Route, Routes } from "react-router-dom";
import Layout from "./app/Layout";
import Public from "./app/Public";
import Chikungunya from "./app/Chikungunya";
import Doenca from "./app/Doenca";
import Dados from "./app/Dados";
import Padroes from "./app/Padroes";
import PadraoDengue from "./app/PadraoDengue";

function App() {
  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Public />} />
      <Route path="data" element={<Dados />} />
      <Route path="patterns" element={<Padroes />} />
    </Route>
  </Routes>

}

export default App;
