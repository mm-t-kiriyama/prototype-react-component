import React from "react";

export type CheckboxProps = {
  name: string;
  label: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ name, label }) => {
  return (
    <>
      <input type="checkbox" name={name} id={name} />
      <label htmlFor={name}>{label}</label>
    </>
  );
};

export default Checkbox;
