/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ChangeEvent, useState } from "react";

// const useInputeChange = <T,>(val: T) => {
export default function useInputChange<T>(val: T) {
  const [state, setState] = useState<T>(val);
  const onChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
      | { target: { name: string; value: string | number } },
  ) => {
    // @ts-ignore

    const value = e.target.checked || e.target.value;

    setState((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
  };

  const onChangeByName = (
    name: keyof T,

    value: string | number | Record<string, string> | any,
  ) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return { onChange, state, onChangeByName, setState };
}

// export default useInputeChange;
