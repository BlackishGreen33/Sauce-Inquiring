import { Navigate, Route, Routes } from "react-router-dom";

import { TraditionalChinese, SimplifiedChinese, English } from "./pages";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/TraditionalChinese/*" element={<TraditionalChinese />} />
        <Route path="/SimplifiedChinese/*" element={<SimplifiedChinese />} />
        <Route path="/English/*" element={<English />} />
        {/* if the router not matching */}
        <Route path="*" element={<Navigate to={"./TraditionalChinese"} />} />
      </Routes>
    </>
  );
}

export default App;
