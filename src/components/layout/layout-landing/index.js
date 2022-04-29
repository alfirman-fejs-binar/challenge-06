import { FooterLanding } from "../../footer";
import { SearchFormCar } from "../../form";
import { HeaderLanding } from "../../header";
import { HeroLanding } from "../../hero";
import "../../../style/landing.css";

const LayoutLanding = ({ children }) => {
  return (
    <>
      <HeaderLanding />
      <main>
        <HeroLanding />
        <section id="search">
          <SearchFormCar />
          {children}
        </section>
      </main>
      <FooterLanding />
    </>
  );
};

export default LayoutLanding;
