// @ts-check
import React from "react";
/** @param {{ imageUrl: string }} props */ // ←@ts-checkがあいまい表現を禁止することからimageUrlの型を宣言する


export const DogImage = (props) => {
  return <img src={props.imageUrl} alt="いぬ" />;
};

export default DogImage
