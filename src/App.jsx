import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Scooters from "./pages/Scooters";
import Parts from "./pages/Parts";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ScooterDetails from "./pages/ScooterDetails";
import BlogDetails from "./pages/BlogDetails";
import Condtion from "./pages/Condtion";
import Loaders from "./pages/Loaders"
import Policy from "./pages/Policy";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/scooters" element={<Scooters />} />
        <Route path="/loaders" element={<Loaders/>} />

        <Route path="/features" element={<Parts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/scooterDetails" element={<ScooterDetails />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/condition" element={<Condtion />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/scooterDetails/:id" element={<ScooterDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
