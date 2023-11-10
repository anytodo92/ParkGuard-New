import { Link } from "react-router-dom";
import {
  Images,
  Icons,
} from "../../../utils/assets";
import {
  FooterWrapper
} from "./styled";

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <section>
        <div className="content">
          <div className="col">
            <h2>Adresse</h2>
            <p>ParkX AG<br />Leimatt B<br />6317 Zug</p>
          </div>
          <div className="col">
            <h2>Kontakt</h2>
            <p>T +41 58 123 45 67<br />info@pakrx.swiss</p>
          </div>
          <div className="col">
            <h2>Rechtliches</h2>
            <p><a className="link" href="/impressum">Impressum</a></p>
            <p><a className="link" href="/datenschutz">Datenschutz</a></p>
            <p><a className="link" href="/agb">AGB</a></p>
          </div>
        </div>
      </section>
      <section>
        <div className="content">
          <div className="txt">&copy;Copyright 2023 - ParkX AG</div>          
        </div>
      </section>
    </FooterWrapper>
  );
};

export default Footer;
