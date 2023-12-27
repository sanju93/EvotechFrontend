import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Survey from "./pages/SurveryForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Viewforms from "./pages/ViewForms";
function App() {

  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/SurveyForm",
      element: <Survey />,
    },
    {
      path : "/viewForms",
      element : <Viewforms/>
    }
  ]);

  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={routes} />
      
    </div>
  );
}

export default App;
