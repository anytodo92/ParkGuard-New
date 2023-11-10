
import Banner from "../Common/Banner";
import CardIntro from "../Common/CardIntro";
import Contact from "../Common/Contact";
import FullImage from "../Common/FullImage";
import {
  Images, Icons,
} from "../../utils/assets";
import {
  HomeWrapper
} from "./styled";

const Home = (): JSX.Element => {
  const bannerData = {
    title: "<p><strong>Die vollumfängliche Lösung zur Parkplatzbewirtschaftung</strong></p>",
    description: `
      <p>Wir decken alle Prozesse der modernen Parkplatzbewirtschaftung durch unsere digitalen Tools ab. </p>
      <p><br/></p>
      <p>Unsere Gesamtlösung besteht aus <strong>ParkGuard</strong>, dem Tool zur Ausstellung von Umtriebsenschädigungen und <strong>ParkGO</strong>, dem Tool zur Erteilung von Parkbewilligungen.</p>
    `,
    intro1: {
      description: `
        Mit ParkGuard befreist du deine Liegenschaften von Falschparkern. Via App werden Verstösse erfasst und die Umtriebsentschädiung kann mit wenigen Klicks beglichen werden. 
      `,
      buttonText: "Mehr erfahren",
      buttonUrl: "/#park-guard",
    },

    intro2: {
      description: `
        Mit ParkGO können deine Mieter und Eigentümmer auf einfachste Art und Weise Besucher erfassen und Parkbewilligungen ausstellen. Von wenigen Minuten bis zu permanenten Bewilligungen.
      `,
      buttonText: "Mehr erfahren",      
      buttonUrl: "/#park-go",
    }

  };

  const introData1 = {
    title: "Was ist ParkGuard?",
    description: `
    Durch ParkGO schaffen wir Klarheit. Berechtigte Fahrzeuge sind in unserem Backoffice erfasst und es besteht keine Gefahr, dass irrtümlich Vorderungen in Form eine Umtriebsentschädigung auf der Windschutzscheibe deiner Besucher.innen landen.
    `,
    items: [
      {
        title: "Welche Probleme werden<br/>mit ParkGuard gelöst?",
        description: `
        Unsere Bewilligungsplattform vereinfacht dir das Erfassen von berechtigten Fahrzeugen auf deinen Besucher- und Mieterparkplätzen. Wir schaffen Klarheit über berechtigte- und nichtberechtigte Fahrzeuge. 
        `
      },
      {
        title: "Wie funktioniert<br />ParkGuard?",
        description: `
        Auf unserer digitalen ParkGo Plattform, erfasst du deine Besucher und erteilst ihnen somit temporäre- und permanente Parkbewilligungen. Die Bewilligung ist mit wenigen Klicks erteilt. Wir benötigen lediglich das Kennzeichen und die Dauer der auszustellenden Berechtigung.
        `
      }
    ]
  }
  const introData2 = {
    title: "Was ist ParkGO?",
    description: `
    Durch ParkGO schaffen wir Klarheit. Berechtigte Fahrzeuge sind in unserem Backoffice erfasst und es besteht keine Gefahr, dass irrtümlich Vorderungen in Form eine Umtriebsentschädigung auf der Windschutzscheibe deiner Besucher.innen landen.
    `,
    items: [
      {
        title: "Welche Probleme werden<br/>mit ParkGuard gelöst?",
        description: `
        Unsere Bewilligungsplattform vereinfacht dir das Erfassen von berechtigten Fahrzeugen auf deinen Besucher- und Mieterparkplätzen. Wir schaffen Klarheit über berechtigte- und nichtberechtigte Fahrzeuge. 
        `
      },
      {
        title: "Wie funktioniert<br />ParkGuard?",
        description: `
        Auf unserer digitalen ParkGo Plattform, erfasst du deine Besucher und erteilst ihnen somit temporäre- und permanente Parkbewilligungen. Die Bewilligung ist mit wenigen Klicks erteilt. Wir benötigen lediglich das Kennzeichen und die Dauer der auszustellenden Berechtigung.
        `
      }
    ]
  }
  return (
    <HomeWrapper>
      <Banner data={bannerData} />
      <FullImage />
      <CardIntro data={introData1} />
      <CardIntro data={introData2} />
      <Contact />
    </HomeWrapper>
  );
};

export default Home;