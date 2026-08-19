import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { AuthLayout } from "./Component/index.js";
import Home from "./Pages/Home.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx"
import EditPost from "./Pages/EditPost.jsx";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPost.jsx";
import AddPost from "./Pages/AddPost.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        }
      />
      <Route
        path="/all-post"
        element={
          <AuthLayout authentication>
            {""}
            <AllPosts />
          </AuthLayout>
        }
      />
      <Route
        path="/edit-post/:slug"
        element={
          <AuthLayout authentication>
            {""}
            <EditPost />
          </AuthLayout>
        }
      />
      <Route
        path="/add-post"
        element={
          <AuthLayout authentication>
            {""}
            <AddPost />
          </AuthLayout>
        }
      />
      <Route path="/post/:slug" element={<Post />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
