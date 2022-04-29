import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../button";

export default function CardCar({ car }) {
  const push = useNavigate();
  return (
    <div onClick={() => push("/" + car.id)} className="rent-card">
      <div>
        <img src={car.image} alt={car.name} />
      </div>
      <p>{car.name}</p>
      <h6>Rp {car.price.toLocaleString("id-ID")} / hari</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <ul>
        <li>
          <img src="/icons/fi_users.svg" alt="users" />
          <p>4</p>
        </li>
        <li>
          <img src="/icons/fi_settings.svg" alt="settings" />
          <p>Manual</p>
        </li>
        <li>
          <img src="/icons/fi_calendar.svg" alt="settings" />
          <p>2021</p>
        </li>
      </ul>
      <ButtonPrimary>Pilih Mobil</ButtonPrimary>
    </div>
  );
}
