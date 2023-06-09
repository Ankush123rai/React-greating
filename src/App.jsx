import React, { useState } from 'react';

export default function Third() {
  const [ArrIndex, setArrIndex] = useState(0);
  const [ImgArr, setImgArr] = useState([
    "congratulations",
    "Happy Birthday",
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
    "Good Night",
  
  ]);

  const handleChange = () => {
    const len = ImgArr.length-1;
    if (ArrIndex === len) {
      setArrIndex(ArrIndex - len);
    } else {
      setArrIndex(ArrIndex + 1);
    }
  };
  return (
    <div className="container">
     <h1>{ImgArr[ArrIndex]}</h1>
      <div>
        <button onClick={handleChange} className="btn">
          Change Greeting
        </button>
      </div>
    </div>
  );
}
