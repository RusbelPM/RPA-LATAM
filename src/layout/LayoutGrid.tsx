import React from "react";

const classes = {
  main: "layout-grid",
};

interface GridProps {
  children: React.ReactNode;
}

export const LayoutGrid: React.FC<GridProps> = ({ children }) => {
  return <div className={classes.main}>{children}</div>;
};
