import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCars } from "../../../redux/slice/carSlice";

export default function SearchFormCar() {
  const push = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    type: "",
    date: "",
    time: "",
    totalPassenger: "",
  });

  const setValue = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    dispatch(getCars());
    push("/");
  };

  return (
    <form onSubmit={(e) => submit(e)}>
      <div className="label-input">
        <label>Tipe Driver</label>
        <select
          name="type"
          value={form.type || "default"}
          onChange={(e) => setValue(e)}
        >
          <option value={"Dengan Sopir"}>Dengan Sopir</option>
          <option value={"Tanpa Sopir (Lepas Kunci)"}>
            Tanpa Sopir (Lepas Kunci)
          </option>
          <option disabled value="default">
            Pilih Tipe Driver
          </option>
        </select>
      </div>
      <div className="label-input">
        <label htmlFor="date">Tanggal</label>
        <input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={(e) => setValue(e)}
        />
      </div>
      <div className="label-input">
        <label htmlFor="time">Waktu Jemput/Ambil</label>
        <input
          id="time"
          name="time"
          type="time"
          value={form.time}
          onChange={(e) => setValue(e)}
        />
      </div>
      <div className="label-input">
        <label htmlFor="totalPassenger">Jumlah Penumpang (optional)</label>
        <input
          id="totalPassenger"
          name="totalPassenger"
          placeholder="Jumlah Penumpang (optional)"
          type="number"
          value={form.totalPassenger}
          onChange={(e) => setValue(e)}
        />
      </div>
      <div>
        <button type="submit" className="green-button">
          Cari Mobil
        </button>
      </div>
    </form>
  );
}
