import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../components/form/form-container";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
          navigate("/");
        });
      });
    } catch (err) {
      setErr(true);
    }
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
        {err && <span>Something went wrong</span>}
      </form>
      <p>
        You do have an account? <Link to="/login">Login</Link>
      </p>
    </FormContainer>
  );
};
