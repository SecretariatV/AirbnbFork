import { Suspense } from "react";
import { Dashboard, LoadingPage } from "./pages";
import { GlobalStyles } from "@styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<LoadingPage />}>
        <Dashboard />
      </Suspense>
    </>
  );
}

export default App;
