import { useSelector } from "react-redux";
import { CardCar } from "../components/card";
import { LayoutLanding } from "../components/layout";

const Home = () => {
  const { cars } = useSelector((state) => state.car);

  return (
    <LayoutLanding>
      <div id="cars">
        {cars.map((car, index) => (
          <CardCar key={index} car={car} />
        ))}
      </div>
    </LayoutLanding>
  );
};

export default Home;
