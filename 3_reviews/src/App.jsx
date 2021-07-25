import "./App.css";
import Reviews from "./Reviews";
function App() {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Reviews />
      </div>
    </main>
  );
}

export default App;
