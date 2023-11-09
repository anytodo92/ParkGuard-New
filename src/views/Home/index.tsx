
import Banner from "../Common/Banner";
import CardIntro from "../Common/CardIntro";
import Contact from "../Common/Contact";
import {
  Images, Icons,
} from "../../utils/assets";
import {
  HomeWrapper
} from "./styled";

const Home = (): JSX.Element => {
  const bannerData = {
    title: "Park-Busse erhalten?",
    description: `
      Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
    `,
    intro1: {
      title: "Wir kümmern uns um Falschparker",
      description: `
        Die komplette digitale Lösung - kostenlos!
        <br />
        Zusammenarbeit starten ipsum dolor sit amet consectetur adipisicing elit. Impedit a rerum distinctio, non commodi consectetur facilis nostrum saepe architecto porro quidem quia necessitatibus ea corporis autem tempora perspiciatis expedita quibusdam!
      `,
      buttonText: "Zusammenarbeit",
      buttonUrl: "/kontakt",
    },

    intro2: {
      title: "Wie funktioniert’s?",
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a rerum distinctio, non commodi consectetur facilis nostrum saepe architecto porro quidem quia necessitatibus ea corpo
      `,
      buttonText: "Unsere Lösung",      
      buttonUrl: "/unsere-losung",
    }

  };
  return (
    <HomeWrapper>
      <Banner data={bannerData} />
    </HomeWrapper>
  );
};

export default Home;