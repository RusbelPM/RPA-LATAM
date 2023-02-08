import {
  useBusiness,
  useHealth,
  useScience,
  useTecnology,
} from "../../hooks/useNews";
import LayoutContent from "../../layout/LayoutContent";
import { LayoutGrid } from "../../layout/LayoutGrid";
import Contain from "./contain";
import Premium from "./premium";

const Main = () => {
  const { health } = useHealth();
  const { business } = useBusiness();
  const { technology } = useTecnology();
  const { science } = useScience();

  return (
    <LayoutContent>
      <LayoutGrid>
        <Contain category="Medicina" data={health} lotContent={6} />
        <Contain category="Negocio" data={business} lotContent={6} />
        <Premium category="Ciencia" data={science} lotContent={6} />
        <Contain category="Tecnologia" data={technology} lotContent={12} />
      </LayoutGrid>
    </LayoutContent>
  );
};
export default Main;
