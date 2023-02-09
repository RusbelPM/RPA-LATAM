import Main from "../components/main/main";
import LayoutContent from "../layout/LayoutContent";
import LayoutGrid from "../layout/LayoutGrid";

const Home = () => {
  return (
    <LayoutContent>
      <LayoutGrid>
        <Main />
      </LayoutGrid>
    </LayoutContent>
  );
};
export default Home;
