import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignUp = () => {
  const [err, setErr] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, name) => {
    setErr(null);
    setIsPending(true);
    try {
      //signup user
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response.user);

      if (!response) {
        throw new Error("Something went wrong");
      }

      //add name of user
      await response.user.updateProfile({ name });

      setIsPending(false);
      setErr(null);
    } catch (error) {
      //if error catch it
      console.log(error.message);
      setErr(error.message);
      setIsPending(false);
    }
  };

  return { err, isPending, signup };
};
