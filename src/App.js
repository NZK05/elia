import "./scss/global.scss";
import { Header, Footer } from "./components/sections/export";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Career, CareerDetails } from './screens/export';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <body>
          <section>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/career" element={<Career />} />
              <Route path="/career/:type" element={<CareerDetails />} />
            </Routes>
          </section>
          <Footer />
        </body>
      </div>
    </Router>
  );
}

export default App;
