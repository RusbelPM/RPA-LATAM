import { Link } from "react-router-dom";
import FormContainer from "../components/form/form-container";

export const Register = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <FormContainer title="Register">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="display name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img
            src="https://img.icons8.com/ultraviolet/256/full-image.png"
            alt=""
          />
          <span>Add an avatar</span>
        </label>
        <button>Sign up</button>
        {/* {<span>Something went wrong</span>} */}
      </form>
      <p>
        You do have an account? <Link to="/login">Login</Link>
      </p>
    </FormContainer>
  );
};
