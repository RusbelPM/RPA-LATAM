import { useCategories } from "../../hooks/useNews";
import LayoutContent from "../../layout/LayoutContent";
import { LayoutGrid } from "../../layout/LayoutGrid";
import {Contain} from './contain';
import {Premium } from './premium';

export const Main = () => {
  const { categories } = useCategories();

  return (
    <LayoutContent>
      <LayoutGrid>
        <Contain category="Medicina" data={categories} lotContent={6} />
        <Contain category="Negocio" data={categories} lotContent={6} />
        <Premium category="Ciencia" data={categories} lotContent={6} />
        <Contain category="Tecnologia" data={categories} lotContent={12} />
      </LayoutGrid>
    </LayoutContent>
  );
};
export default Main;
