import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { numberReducer } from "../../store/reducers/numberReducer";
import { fetchData } from "../../store/reducers/ActionCreator";

import styles from "./styles.module.scss";
import { ReactComponent as SearchSvg } from "./../../assets/search.svg";
import { ReactComponent as UpArrowSvg } from "./../../assets/up-arrow.svg";
import { ReactComponent as AngleArrowSvg } from "./../../assets/angle-arrow.svg";
import e from "express";

export const EnterNumber: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setNumber } = numberReducer.actions;
  const { number } = useAppSelector((state) => state.numberReducer);
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const changeInputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (Number(e.target.value) < 0) {
      setNumber(Number(e.target.value));
    }

    // запрещаем писать пользователю "-" и "+"
    if (typeof +e.target.value === "number") {
      dispatch(setNumber(Number(e.target.value)));
    }

    // удаляем дефолтный "0", если инпут пустой
    if (Number(e.target.value) === 0) {
      dispatch(setNumber(""));
    }
  };

  const keyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (typeof number === "number") {
        dispatch(fetchData());
      }
    }
  };

  const clickSearchBtn = () => {
    if (typeof number === "number") {
      dispatch(fetchData());
    }
  };

  const incrementNumberHandle = () => {
    if (typeof number === "number") {
      const upper = +number + 1;
      dispatch(setNumber(upper));
      dispatch(fetchData());
    } else {
    }
  };

  const decrementNumberHandle = () => {
    if (typeof number === "number") {
      if (+number - 1 >= 0) {
        const angle = +number - 1;
        dispatch(setNumber(angle));
        dispatch(fetchData());
      }
    }
  };

  React.useEffect(() => {
    inputRef.current.focus();
    dispatch(fetchData());
  }, []);

  return (
    <div className={styles.enterNumber}>
      <h1>Enter a number</h1>
      <div className={styles.inputContainer}>
        <div className={styles.inputBlock}>
          <input
            type="number"
            onChange={changeInputHandle}
            onKeyDown={keyDownInput}
            value={number}
            min={1}
            ref={inputRef}
          />
          <SearchSvg className={styles.searchBtn} onClick={clickSearchBtn} />
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={incrementNumberHandle}>
            <UpArrowSvg className={styles.arrow} />
          </button>
          <button className={styles.button} onClick={decrementNumberHandle}>
            <AngleArrowSvg className={styles.arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};
