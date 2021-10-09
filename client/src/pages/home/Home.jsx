import Header from "../../components/header/Header";
import "./home.css";
import axios from "axios";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="headerText">
          <p>
            The Amazon is the world's biggest rainforest, larger than the next 
            two largest rainforests — in the Congo Basin and Indonesia — combined.
          </p>
          {/* <p>
            As of 2020, the Amazon has 526 million hectares of primary forest, 
            which accounts for nearly 84% of the region's 629 million hectares 
            of total tree cover.
          </p> */}
          <p>
            The Amazon River Basin is home to the largest rainforest on Earth.
            The basin -- roughly the size of the forty-eight contiguous 
            United States -- covers some 40 percent of the South American continent and 
            includes parts of eight South American countries: Brazil, Bolivia, Peru, Ecuador, 
            Colombia, Venezuela, Guyana, and Suriname, as well as French Guiana, a department of 
            France.
          </p>
        </div>
      </div>
    </>
  );
}
