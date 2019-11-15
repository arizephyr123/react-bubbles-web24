import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = props => {
  console.log(props.rest);
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

useEffect (() => {
fetchColors();
}, [setColorList]);

  const fetchColors = () => {
axiosWithAuth()
.get("/api/colors")
.then(res => {
  //console.log(res.data);
  setColorList(res.data);
})
.catch(err => console.log(err))
  };

  
  return (
    <>
      <ColorList props={props.rest} colors={colorList} updateColors={setColorList} fetchColors={fetchColors}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
