import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
