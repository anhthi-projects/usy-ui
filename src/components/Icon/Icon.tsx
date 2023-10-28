import { FC } from "react";

import { ReactSVG } from "react-svg";

export interface IconProps {
  fileName: string;
}

const Icon: FC<IconProps> = ({ fileName }) => {
  return <ReactSVG src={`../../assets/icons/${fileName}`} />;
};

export default Icon;
