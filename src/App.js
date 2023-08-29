import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic buldling
// Lazy loading
// On demand loading

const Grocery = lazy(() => import("./components/Grocery") )

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(async () => {
    const data = await fetch('https://api.github.com/users/editi-bft');
    const json = await  data.json();
    setUserName(json.name)
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
      {/* Header */}
      <Header />
      
      <Outlet />
      {/* <Footer /> */}
    </div>
    </UserContext.Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>loading...</h1>} ><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)