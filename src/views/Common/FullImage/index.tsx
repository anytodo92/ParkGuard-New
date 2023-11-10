import {
  FullImageWrapper
} from "./styled";
import { Images } from "../../../utils/assets";

const FullImage = (): JSX.Element => {
  return (
    <FullImageWrapper className="full-image">
      <img src={Images.BgUrl} width="1920" height="215" alt="" />
    </FullImageWrapper>
  );
};

export default FullImage;