import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  // const query = useRef(_query).current
  // const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    // if (query) {
    //   ref = ref.where(...query)
    // }
    // if (orderBy) {
    //   ref = ref.orderBy(...orderBy)
    // }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
          console.log("added doc", doc.data());
        });

        // update state
        setDocuments(results);
        console.log(results);
        setError(null);
      },
      (error) => {
        setError("could not fetch the data");
        console.log("The error is " + error);
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collection]);

  // query, orderBy

  return { documents, error };
};
