import React from "react";

const classes = {
  main: "layout-content",
};

interface ContentProps {
  children: React.ReactNode;
}

const LayoutContent: React.FC<ContentProps> = ({ children }) => {
  return <div className={classes.main}>{children}</div>;
};
export default LayoutContent;
