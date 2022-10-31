import { ReactComponent as arrowLeft } from "./svgs/arrow-left.svg";
import { ReactComponent as arrowRight } from "./svgs/arrow-right.svg";

const icons = {
  arrowLeft,
  arrowRight,
};

export const Icon = ({ name, ...props }) => {
  const Element = icons[name];
  return <Element {...props} />;
};
