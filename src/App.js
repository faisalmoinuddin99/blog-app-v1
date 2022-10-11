import "./App.css";

import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import BlogPostDetailPage from "./components/BlogPostDetailPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboard />} />

            <Route path="*" element={<ErrorPage />} />
            <Route path="/:id" element={<BlogPostDetailPage />} />
          </Routes>
        </div>
      </div>
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
