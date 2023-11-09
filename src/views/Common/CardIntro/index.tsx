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
    <CardIntroWrapper className="card-intro">
      <div className="content">
        <h2 dangerouslySetInnerHTML={{ __html: data.title }}>
        </h2>
        {data.description&&
          <p dangerouslySetInnerHTML={{ __html: data.description }}>
          </p>
        }
        <div className="cards">
          {data.items.map((data: any, index: number) =>
            <div
              key={index}
              className="one"
            >
              <div className="title">
                <h4>{data.title}</h4> 
              </div>
              <div
                className="detail"
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