import { Route, Routes } from "react-router-dom";
import TransactionsList from "@/components/TransactionsList";
import TransactionDetail from "@/components//TransactionDetail";

function App() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md min-h-screen">
      <Routes>
        <Route path="/" element={<TransactionsList />} />
        <Route path="/transaction/:id" element={<TransactionDetail />} />
      </Routes>
    </div>
  );
}

export default App;
