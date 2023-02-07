import ContainLeft from "./contain-left";
import ContainRight from "./contain-right";

const classes = {
  main: "main",
  content: "main__container",
};

const Main = () => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <ContainLeft />
        <ContainRight />
      </div>
    </div>
  );
};
export default Main;
