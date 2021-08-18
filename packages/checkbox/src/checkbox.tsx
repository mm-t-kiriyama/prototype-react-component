import React from "react";

export type Props = {
  name: string;
  label: string;
};

const Checkbox: React.FC<Props> = ({ name, label }) => {
  return (
    <>
      <input type="checkbox" name={name} id={name} />
      <label htmlFor={name}>{label}</label>
    </>
  );
};

export default Checkbox;
