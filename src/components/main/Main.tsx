import LayoutContent from "../../layout/LayoutContent";
import { LayoutGrid } from "../../layout/LayoutGrid";
import Contain from "./contain";
import Premium from "./premium";

const Main = () => {
  return (
    <LayoutContent>
      <LayoutGrid>
        <Contain
          titleCategory="Medicina"
          nameCategory="health"
          lotContent={6}
        />
        <Contain
          titleCategory="Negocios"
          nameCategory="business"
          lotContent={6}
        />
        <Premium nameCategory="science" lotContent={6} />
        <Contain
          titleCategory="Tecnologia"
          nameCategory="technology"
          lotContent={12}
        />
      </LayoutGrid>
    </LayoutContent>
  );
};
export default Main;
