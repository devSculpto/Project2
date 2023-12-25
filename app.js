

// Creating a call back hell  21 dec :::::::::::::::::::::::; 
// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
// Input 
    // savetoDb(
    //     "Aniket Prajapati",
    //     () => {
    //     console.log("data 1 saved ");
    //     savetoDb(
    //         "Deepak Prajapati",
    //         () => {
    //             console.log("data 2 saved ");
    //             savetoDb(
    //                 "Jayprakash Prajapati",
    //                 () =>{
    //                     console.log("data 3 saved");
    //                 },
    //                 () => {
    //                     console.log("data 3 was not saved");
    //                 }
    //                 );
    //         },
    //         () => {
    //             console.log("data 2 was not saved");
    //         }
    //     );
    //     } ,
    //     () => {
    //     console.log("data was not saved :  weak connection");
    // });

// using prommises :::::::::::::::::::::::::::::::::
// function savetoDb(data) {
//     return new Promise( (resolve,reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//         resolve("success: data was saved");
//         } else {
//         reject("failure: data  was not saved");
//         }
//     });
// }
// request promise object : 
// savetoDb("Aniket Prajapati")
//     .then( (result) => {
//         console.log("data 1 saved");
//         console.log("result of promise : ",result);
//         return savetoDb("hello world 1 ");
//     })
//     .then( (result) => {
//         console.log("data 2 saved");
//         console.log("result of promise : ",result);
//         return savetoDb("hello world  2");
//     })
//     .then ( (result) => {
//         console.log("data 3 saved");
//         console.log("result of promise : ",result);
//     })
//     .catch((error) => {
//         console.log("promise rejected");
//         console.log("result of promise : ",error);
//     })


// refracting old codes 21 dec 2023 :::::::::::;: 
// let h1 = document.querySelector("h1");

// function changeColor(color,delay) {
//     return new Promise ((resolve,reject) => {
//         setTimeout(()=> {
//             h1.style.color= color;
//             resolve("color changed !");
//         }, delay);
//     });
// };

// changeColor("green",2000)
//   .then ( () => {
//     console.log("color changed to green");
//     return changeColor("grey",2000);
//   })
//   .then( () => {
//     console.log("color changed from green to grey");
//     return changeColor("orange",2000);
//   })
//   .then( () => {
//     console.log("color changed from grey to orange");
//   });

// Asyn function ::::::::::::::::::::::::::::::::::::::::

// async function greet () {
//     return "hellow mother fuckers";
// }
// greet()
// .then ( (result) => {
//     console.log("promise is resolved, result : ", result);
// })
// .catch ( (error) => {
//     console.log("promise does not get rejected", error);
// 

//  let demo = async() => {
//     return 5;
// };

// await keyword: pause the execution of surrounding async function until the promise is resolved 
// function getNum() {
//    return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let num = Math.floor(Math.random() * 10 ) + 1;
//         console.log(num);
//         resolve(); 
//     }, 1000);
//    });
// }
// async function demo() {
//    await  getNum();
//   await getNum();
//   await  getNum();
//   await getNum();
  
// }

// https://www.google.com/search?q=harry+potter

// let h1 = document.querySelector("h1");

// function changeColor(color,delay) {
//     return new Promise ((resolve,reject) => {
//         setTimeout(()=> {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if( num > 3) {
//                 reject("promised rejected");
//             }
//             h1.style.color= color;
//             resolve("color changed !");
//         }, delay);
//     });
// }; 

// async function demo() {
//    try {
//     await changeColor("green",1000);
//     await changeColor("red",1000);
//     await changeColor("yellow",1000);
//    }   
//    catch (err) {
//     console.log("error caught");
//     console.log(err);
//    }
//     let a = 90;
//     console.log(`"the a values is", ${a}`);

// }
// 22 dec Api calls : ::::::::::::::::::::::::::::::::::::::::::::::::::
// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then ( (response) => {
//     console.log(response);
//     return response.json();
// })
// .then ( (data) => {
//     console.log("data 1 :", data.fact);
//     return fetch(url);
// })
// .then ((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data 2 :", data2.fact);
// })
// .catch( (err) => {
//     console.log("Error: ",err);
// });


// using async await function :::::::::::::::::::::;;:::::::::::::::::::::::::::
// let url = "https://catfact.ninja/fact";

// async function getFact() {
//   try {
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data.fact);

//   let res2 = await fetch(url);
//   let data2 = await res2.json();
//   console.log(data2.fact);

//   } catch (e) {
//     console.log("Error: ", e);
//   }
// };
// getFact();
//axios :;;;;:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::::::::::::::::::::::::::::::::::::;
//cat api accesses::::::::::::::::::::::::::::::::::::;

// let Btn = document.querySelector('button');

// let p = document.querySelector('p');

// Btn.addEventListener('click' , async () => {
//     let fact = await getFact();
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";


// async function getFact() {
//   try {
//   let res = await axios.get(url1);
//   return res.data.fact;

//   } catch (e) {
//     console.log("Error: ", e);
//     return "no fact found ";
//   }
// };
//dog api ::::::::::::::::::::::;;;;;;;;;;;;;;;;;;;;;;;::::::::::::::;
// let btn = document.querySelector('button');
// let url1 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener('click', async () => {
//    let link = await getImage();
//    let img = document.querySelector("#dogimg");
//    img.setAttribute("src", link);
   
   
// });


// async function getImage() {
//   try {
//   let res = await axios.get(url1);
//   return res.data.message;
//   } catch (e) {
//     console.log("Error: ", e);
//     return "no Image found ";
//   }
// };
// 

//      header response request using axios :;;;;;;;;;;;;;;;;;;;;;;

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try{
//         config = {headers: { Accept: "application/json" } };
//         let res = await axios.get(url, config);
//         console.log(res);
//     }   catch (err) {
//         console.log(err);
//     }
// }
//query search activity ::::::::::;;;;
 
// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//    let country = document.querySelector("input").value;
//    console.log(country);
//    let colArr = await getColleges(country);
//    show(colArr);
// }); 
// function show(colArr) {
//    let list = document.querySelector("#list");
//    list.innerHTML = "";
//    for ( let col of colArr) {
//       console.log(col.name);

//       let li = document.createElement("li");
//       li.innerText = col.name;
//       list.appendChild(li);
//    }
// }

// async function getColleges(country) {
//    try {
//     let res = await axios.get(url + country);
//    console.log(res.data);
//    return res.data;
    
//    } catch (e) {
//     console.log("error :", e);
//     return [];
//    }
// }




