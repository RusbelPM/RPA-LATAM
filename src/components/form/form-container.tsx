const classes = {
  main: "form-container",
  content: "form-wrapper",
  logo: "form-wrapper__logo",
  title: "form-wrapper__title",
};

interface ContentProps {
  children: React.ReactNode;
  title: string;
}
const FormContainer: React.FC<ContentProps> = ({ children, title = "" }) => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <span className={classes.logo}>RPA News</span>
        <span className={classes.title}>{title}</span>
        {children}
      </div>
    </div>
  );
};
export default FormContainer;
