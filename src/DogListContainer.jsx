import React, { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("akita"); //初期表示は秋田犬
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const breedList = Object.keys(data.message); // Object → 配列へ
        setBreeds(breedList);
      });
  }, []);

  //画像取得
  const fetchImage = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then((res) => res.json())
      .then((data) => {
        setImageList(data.message);
      })
  };

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        onSelectChange={(value) => setSelectedBreed(value)}
      />
      <div>
        <p>選択された犬種：{selectedBreed}</p>
        <button onClick={fetchImage}>表示</button>

        <ul>
          {imageList.map((url, index) => (
            <li key={index}>
              <img src={url} alt="犬" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DogListContainer
