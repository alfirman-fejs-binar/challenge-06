import { ButtonPrimary } from "../../button";

export default function CardDetail({ car }) {
  return (
    <div>
      <div>
        <img src={car?.image} alt={car?.name} />
      </div>
      <div>
        <p>{car?.name}</p>
        <ul>
          <li>
            <img src="/icons/fi_users.svg" alt="users" />
            <p>4</p>
          </li>
          <li>
            <img src="/icons/fi_settings.svg" alt="settings" />
            <p>Otomatis</p>
          </li>
          <li>
            <img src="/icons/fi_calendar.svg" alt="settings" />
            <p>2024</p>
          </li>
        </ul>
        <div>
          <p>Total</p>
          <p>Rp {car?.price?.toLocaleString("id-ID")}</p>
        </div>
        <ButtonPrimary>Lanjutkan Pembayaran</ButtonPrimary>
      </div>
    </div>
  );
}
