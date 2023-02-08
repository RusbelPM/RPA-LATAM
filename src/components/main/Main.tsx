import LayoutContent from "../../layout/LayoutContent";
import { LayoutGrid } from "../../layout/LayoutGrid";
import ContainLeft from "./contain-left";
import ContainRight from "./contain-right";

const Main = () => {
  return (
    <LayoutContent>
      <LayoutGrid>
        <ContainLeft />
        <ContainRight />
      </LayoutGrid>
    </LayoutContent>
  );
};
export default Main;
