import ReactDOM from "react-dom/client";
import React from "react";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}
function Menu() {
  return (
    <>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
    </>
  );
}
function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open!</footer>
  );
}

function Pizza() {
  return (
    <>
      <h2>Pizza Spinaci</h2> Tomato, mozarella, spinach, and ricotta cheese;
      <img src="pizzas/spinaci.jpg" alt="pizza" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
