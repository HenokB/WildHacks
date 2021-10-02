import Header from "../../components/header/Header";
import "./home.css";
import axios from "axios";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <h1>Hello World</h1>
      </div>
    </>
  );
}
