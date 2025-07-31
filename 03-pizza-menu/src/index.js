import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Eazy's Pizzaria</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic african made pizzas "Italian" style right from Chef Eazy's
            kitchen! Made with steeze and ease for the pleasure and treasure of
            your taste buds
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're currently working on a menu</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, Mozarella, Spinach and Ricotta Cheese"
        img="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mozarella, Spinach and Ricotta Cheese"
        img="pizzas/funghi.jpg"
        price={15}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // using multiple returns to remove soldout pizza
  // if (pizzaObj.soldOut) return null;
  return (
    // Child props
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : " "}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <p>{pizzaObj.ingredients}</p>
        <h3>{pizzaObj.name}</h3>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (our >= openHour && hour <= closeHour) alert("We're currently opened");
  // else alert("We're closed mate");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHours={openHour} closeHours={closeHour} />
      ) : (
        <p>
          We're Opened from {openHour}:00 till {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ openHours, closeHours }) {
  return (
    <div className="order">
      <p>
        We're opened from {openHours}:00 till {closeHours}. Come visit us or
        order online
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
