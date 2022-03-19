import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Routes, Route, Router } from "react-router-dom";
import NavBar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Pages/HomePage/Home";
import PostsPage from "./Pages/PostsPage/PostsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PostDetail from "./Pages/PostsPage/PostsDetail";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});
const PATHS = {
  HOME: "/",
  POSTS: "/posts",
  LOGIN: "/login",
  PROFILE: "/profile",
};
const routes = [
  {
    path: PATHS.HOME,
    element: <Home />,
  },
  {
    path: PATHS.POSTS,
    element: <PostsPage />,
  },
  {
    path: PATHS.LOGIN,
    element: <LoginPage />,
  },
];
const App = () => {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Router>
        <Routes>
        {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          <Route path="/posts/:id" element={<PostDetail />} /> 
        </Routes>
        </Router>

        <div>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
