import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { auth } from "../../firebase";

const classes = {
  main: "user-button",
};

export const UserButtons = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className={classes.main}>
      <img src={currentUser.photoURL} alt={currentUser.displayName} />
      <span>{currentUser.displayName}</span>
      <button onClick={() => signOut(auth)}>logout</button>
    </div>
  );
};
