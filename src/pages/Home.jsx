import fish from "../assets/fish.jpg";

export default function Home() {
  return (
    <div>
      <h1>Home / Landingpage</h1>
      <div className="image--container">
        <img src={fish} alt="A fish" />
      </div>
    </div>
  );
}
