import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [err, setErr] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, name) => {
    setErr(null);
    setIsPending(true);
    try {
      //signup user
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!response) {
        throw new Error("Something went wrong");
      }

      //add name of user
      await response.user.updateProfile({ displayName: name });

      //dispatch login action
      dispatch({ type: "LOGIN", payload: response.user });

      if (!isCancelled) {
        setIsPending(false);
        setErr(null);
      }
    } catch (error) {
      //if error catch it
      if (!isCancelled) {
        console.log(err.message);
        setErr(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { err, isPending, signup };
};
