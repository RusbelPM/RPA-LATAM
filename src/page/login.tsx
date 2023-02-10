import { Link } from "react-router-dom";
import FormContainer from "../components/form/form-container";

export const Login = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <FormContainer title="Login">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        {/* <span>Something went wrong</span> */}
      </form>
      <p>
        You don't have an account? <Link to="/register">Register</Link>
      </p>
    </FormContainer>
  );
};
