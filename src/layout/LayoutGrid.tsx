import React from "react";

const classes = {
  main: "layout-grid",
};

interface GridProps {
  children: React.ReactNode;
}

const LayoutGrid: React.FC<GridProps> = ({ children }) => {
  return <div className={classes.main}>{children}</div>;
};
export default LayoutGrid;
