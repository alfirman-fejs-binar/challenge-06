import { FooterLanding } from "../../footer";
import { SearchFormCar } from "../../form";
import { HeaderLanding } from "../../header";
import { HeroLanding } from "../../hero";
import "../../../style/landing.css";

const LayoutLanding = ({ children }) => {
  return (
    <div id="layout-landing">
      <HeaderLanding />
      <main>
        <HeroLanding />
        <section id="search">
          <SearchFormCar />
          {children}
        </section>
      </main>
      <FooterLanding />
    </div>
  );
};

export default LayoutLanding;
