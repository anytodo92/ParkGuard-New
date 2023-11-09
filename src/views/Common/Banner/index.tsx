import { Images, Icons } from "../../../utils/assets";
import { Link } from "react-router-dom";
import {
  BannerWrapper
} from "./styled";

type BannerPropsType = {
  data: any,
};

const Banner = ({ data }: BannerPropsType): JSX.Element => {
  /*function keypress(event) {
      var text = event.target.value;
      try {
          var cleaned = ("" + text).replace(/\D/g, "");
          var match = cleaned.match(/^(\d{0,6})?(\d{0,3})?(\d+)?$/);
          var intlCode = match[1] ? "+1 " : "";
          console.log(match);
          event.target.value = [
            match[1],
            match[2] ? "-" : "",
            match[2],
          ].join("");
        } catch (err) {
          return "";
        }
    }*/
  return (
    <BannerWrapper className="banner">
      <div className="bg">
        <div className="lt"></div>
        <div className="rt"></div>
      </div>

      <div className="content">
        
        <div className="summary">
          <h2 dangerouslySetInnerHTML={{ __html: data.title }}></h2>
          {data.description&&
            <div className="desc" dangerouslySetInnerHTML={{ __html: data.description }}></div>
          }
        </div>

        <div className="cards">
          {(data.intro1 && data.intro2)&&
            <>
              <div className="card1">
                <h2>{data.intro1.title}</h2>
                {data.intro1.description&&
                  <p dangerouslySetInnerHTML={{ __html: data.intro1.description }}>
                  </p>
                }
                {data.intro1.buttonText&&
                  <div className="func">
                    <Link to={data.intro1.buttonUrl}>{data.intro1.buttonText}</Link>
                  </div>
                }
              </div>
              <div className="card2">
                <h2>{data.intro2.title}</h2>
                {data.intro2.description&&
                  <p dangerouslySetInnerHTML={{ __html: data.intro2.description }}>
                  </p>
                }
                {data.intro2.buttonText&&
                  <div className="func">
                    <Link to={data.intro2.buttonUrl}>{data.intro2.buttonText}</Link>
                  </div>
                }
              </div>
            </>
          }
        </div>
      </div>

    </BannerWrapper>
  );
}

export default Banner;