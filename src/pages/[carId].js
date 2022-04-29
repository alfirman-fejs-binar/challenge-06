import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardDetail from "../components/card/card-detail";
import { LayoutLanding } from "../components/layout";
import { getCar } from "../redux/slice/carSlice";

const CarDetail = () => {
  const { carId } = useParams();
  const { car } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCar(carId));
  }, [dispatch, carId]);

  return (
    <LayoutLanding>
      <div id="car-detail">
        <Detail />
        <div>
          <CardDetail car={car} />
        </div>
      </div>
    </LayoutLanding>
  );
};

export default CarDetail;

function Detail() {
  return (
    <div>
      <div>
        <h6>Tentang Paket</h6>
        <ul>
          <p>Include</p>
          <li>
            <span></span>
            <p>Apa saja yang termasuk dalam paket misal durasi max 12 jam</p>
          </li>
          <li>
            <span></span>
            <p>Sudah termasuk bensin selama 12 jam</p>
          </li>
          <li>
            <span></span>
            <p>Sudah termasuk Tiket Wisata</p>
          </li>
          <li>
            <span></span>
            <p>Sudah termasuk pajak</p>
          </li>
        </ul>
        <ul>
          <p>Exclude</p>
          <li>
            <span></span>
            <p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
          </li>
          <li>
            <span></span>
            <p>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </p>
          </li>
          <li>
            <span></span>
            <p>Tidak termasuk akomodasi penginapan</p>
          </li>
        </ul>
        <div>
          <h6>TRefund, Reschedule, Overtime</h6>
        </div>
        <ul>
          <li>
            <span></span>
            <p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
          </li>
          <li>
            <span></span>
            <p>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </p>
          </li>
          <li>
            <span></span>
            <p>Tidak termasuk akomodasi penginapan</p>
          </li>
          <li>
            <span></span>
            <p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
          </li>
          <li>
            <span></span>
            <p>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </p>
          </li>
          <li>
            <span></span>
            <p>Tidak termasuk akomodasi penginapan</p>
          </li>
          <li>
            <span></span>
            <p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
          </li>
          <li>
            <span></span>
            <p>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </p>
          </li>
          <li>
            <span></span>
            <p>Tidak termasuk akomodasi penginapan</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
