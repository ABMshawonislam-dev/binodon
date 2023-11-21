import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import RootLayouts from "./components/RootLayouts";
import Msg from "./pages/Msg";
import Notification from "./pages/Notification";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route>
       <Route
        path="/"
        element={<Reg />}
      ></Route>
      <Route
        path="/login"
        element={<Login />}
      ></Route>
      <Route
        path="/page"
        element={<RootLayouts />}
      >
         <Route
          path="home"
          element={<Home />}
          >

          </Route>
         <Route
          path="msg"
          element={<Msg />}
          >

          </Route>
         <Route
          path="notification"
          element={<Notification />}
          >

          </Route>

      </Route>
     </Route>
    )
  );

  return (
    <>
       <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
     <RouterProvider router={router} />
    </>
  )
}

export default App
