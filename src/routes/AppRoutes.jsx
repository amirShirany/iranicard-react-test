import { Route, Routes } from "react-router-dom"
import Login from "../pages/auth/Login"
import Transactions from "../pages/transactions/Transactions"

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} /> 
    <Route path="/" element={<Transactions />} />
  </Routes>
)

export default AppRoutes