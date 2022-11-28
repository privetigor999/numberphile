import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux-hooks";
import { fetchData } from "../../store/reducers/ActionCreator";
import { numberReducer } from "../../store/reducers/numberReducer";
import { INumbers } from "../../types/numbers";
import { items } from "../../data/items";

import styles from "./styles.module.scss";

export const Result: React.FC = () => {
  const dispatch = useAppDispatch();
  const { result, type } = useAppSelector((state) => state.numberReducer);
  const { setType } = numberReducer.actions;

  const removeCornerRadius = () => {
    if (type === "trivia") {
      return { borderTopLeftRadius: "0px" };
    }
    if (type === "date") {
      return { borderTopRightRadius: "0px" };
    }
  };

  const changeTypeHandle = (typeOfItem: INumbers["type"]): void => {
    dispatch(setType(typeOfItem));
    dispatch(fetchData());
  };

  return (
    <div className={styles.resultContainer}>
      <div className={styles.items}>
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => changeTypeHandle(item.type)}
            className={
              item.type === type
                ? `${styles.item} ${styles.activeItem}`
                : styles.item
            }
          >
            {item.type}
          </div>
        ))}
      </div>
      <h1 style={removeCornerRadius()}>{result}</h1>
    </div>
  );
};
