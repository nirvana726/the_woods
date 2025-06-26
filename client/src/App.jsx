import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import Terms from "./pages/policies/Terms";
import Cancellation from "./pages/policies/Cancellation";
import GuestGuidelines from "./pages/policies/GuestGuidelines";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/guest-guidelines" element={<GuestGuidelines />} />
      </Routes>
    </Layout>
  );
}

export default App;
