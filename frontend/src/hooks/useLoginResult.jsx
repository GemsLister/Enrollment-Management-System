import { useState } from "react";

export const useLoginResult = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const loginResult = () => {
    setSuccess(false);
    setError(false);
  };
};
