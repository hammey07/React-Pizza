import ReactDOM from "react-dom/client";
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello React!!</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
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
