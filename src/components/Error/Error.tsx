import React from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

import styles from "./styles.module.scss";

export const Error = () => {
  const { errorMessage } = useAppSelector((state) => state.numberReducer);
  return (
    <div className={styles.errorContainer}>
      <h1>{errorMessage}</h1>
    </div>
  );
};
