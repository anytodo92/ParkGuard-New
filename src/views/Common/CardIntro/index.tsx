import { useState } from "react";
import {
  CardIntroWrapper
} from "./styled";

type CardIntroProps = {
  data: any
}
const CardIntro = ({ data }: CardIntroProps): JSX.Element => {
  const [openedIdList, setOpenedIdList] = useState<number[]>([]); 
  
  return (
    <CardIntroWrapper className="cards-intro">
      <div className="content">
        <div className="main">
          <h2 dangerouslySetInnerHTML={{ __html: data.title }}>
          </h2>
          {data.description&&
            <div className="desc" dangerouslySetInnerHTML={{ __html: data.description }}>
            </div>
          }
        </div>
        <div className="cards">
          {data.items.map((data: any, index: number) =>
            <div
              key={index}
              className="one"
            >
              <div className="title">
                <h4 dangerouslySetInnerHTML={{ __html: data.title }}></h4> 
              </div>
              <div
                className="desc"
                dangerouslySetInnerHTML={{ __html: data.description }}>
              </div>
            </div>
          )}
        </div>
      </div>
    </CardIntroWrapper>
  );
}

export default CardIntro;