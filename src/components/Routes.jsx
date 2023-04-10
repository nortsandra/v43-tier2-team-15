import { Route, Routes } from "react-router-dom";
import App from "../App";
import ProductList from "./pages/ProductListPage";

export default function RoutesList() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
}