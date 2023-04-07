import {
  Home,
  Cart,
  Category,
  Test,
  Develop,
  Configurator,
  ProductPage,
  Register,
} from "./Pages";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Category/:categoryName" element={<Category />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/Develop" element={<Develop />} />
          <Route path="/Configurator" element={<Configurator />} />
          <Route
            path="/Category/:categoryName/:productId"
            element={<ProductPage />}
          />
          <Route path="/Register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
