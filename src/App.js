import { BrowserRouter, Route, Routes } from "react-router-dom";

// Page
import HomePage from "./components/homePage/homePage";
import BlogsPage from "./components/blogsPage/blogsPage";

import GlobalStyle from "./GlobalStyle/GlobalStyle";

function App() {
  return (
    <GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/blogsPage" element={<BlogsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyle>
  );
}

export default App;
