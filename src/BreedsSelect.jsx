import React from "react";

export const BreedsSelect = ({ breeds, onSelectChange }) => {
  return (
    <select data-testid="breeds-select" onChange={(e) => onSelectChange(e.target.value)}>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
};

export default BreedsSelect