// @ts-check
import React, { useEffect, useState } from 'react';
import DogImage  from './DogImage';
import DogListContainer from './DogListContainer';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg"); //（）内は初期値
    const picform = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const dogpicture = await response.json();
      setDogUrl(dogpicture.message);
    };
  return (
  <>        
    <div>
      <p>わんこ、好きでしょう？写真を見せてあげよう</p>
      <button onClick={() => picform()}>別のわんこもおるぞ</button>
    </div>
      <DogImage imageUrl = {dogUrl} />
    <div>
      <DogListContainer />
    </div>
      
    </>
  );
}

export default Description
