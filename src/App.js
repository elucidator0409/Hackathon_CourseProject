import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurCourses from "./pages/OurCourses";
import CourseDetail from "pages/CourseDetails";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import { DashboardLayout } from "components/Dashboard/DashboardLayout";
import HourOfPurchaseHistoryPage from "pages/HourOfPurchaseHistoryPage";
import CoursesPage from "pages/MyCoursesPage";
import Register from "pages/student/Register";
import RequireAuth from "pages/student/RequireAuth";
import LoginPage from "pages/student/LoginPage";

function App() {

  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <div className="App">
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            {/* public routes */}

            <Route path="/register" element={<Register />} />
            <Route path="/login-page" element={<LoginPage />} />

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="our-courses" element={<OurCourses />} />
              <Route path="coursedetails/:id" element={<CourseDetail />} />
              <Route
                path="coursedetails/:orderId/:id"
                element={<CourseDetail />}
              />
              <Route path="cart" element={<Cart />} />
              <Route element={<RequireAuth />}>
  
                <Route path="checkout" element={<CheckoutPage />} />
              </Route>
            </Route>
            {/* protected routes */}

            <Route element={<RequireAuth />}>
              
              <Route path="/mainboard/:orderId" element={<DashboardLayout />}>
                <Route path="my-courses/:orderId" element={<CoursesPage />} />
                <Route
                  path="hour-purchase-history/:orderId"
                  element={<HourOfPurchaseHistoryPage />}
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
