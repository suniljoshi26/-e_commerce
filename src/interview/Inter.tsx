import React from "react";

export const Inter = () => {
  const arr = [
    14, 58, 20, 77, 66, 82, 42, 67, 42, 4, 0.5, 1, 34, 76, 77, 89, 90,
  ];

  /* let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < result) {
      result = arr[i];
    }
  }

  console.log(result);
  // const min =arr.reduce((a,b)=>a<b?a:b)
  // console.log(min)

  const a = [
    { x: 1, y: 14830 },
    { x: 2, y: 85055 },
    { x: 3, y: 3485 },

    { x: 4, y: 57885 },
  ];

  const b = a.map((i) => console.log("x", i.x, "y", i.y));*/

  //  var str = "Hello World";

  // let result=arr[0];
  //  for(let i=1;i<arr.length;i++){
  //     if(arr[i]>result){
  //       result=arr[i]
  //     }
  //  }
  //  console.log(result)

  // var finalStr = str.substring(0, str.length-1);
  //   console.log(finalStr)

  //  odd number

  const a = arr.filter((i) => i % 2 === 1);
  console.log(a);
  return <div>a</div>;
};
