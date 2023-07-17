import Header from "./Components/Header/header";
import Nav from "./Components/Nav/nav";
import About from "./Components/About/about";
import Experience from "./Components/Experience/experience";
import Portfolio from "./Components/Portfolio/portfolio";
import Testimonial from "./Components/Testmonials/testmonials";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
