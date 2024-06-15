
//~~~~~~~~~~~~~~Practice for Synchoronus and Asynchoronus~~~~~~~~~~~~~~~~~
 //~~~~~~~~~~Synchoronus~~~~~~~~~~~~

 console.log("Hello Everyone");
 console.log("welcome to my Github Account!");

 //Object
 type obj = {
    name: string,
    age: number,
    cource: string
 }
 let object: obj = {
    name: "Niba farooq",
    age: 18,
    cource: "Artifical Intelligence web 3.0"
 }

 console.log(object);
 
 console.log("Good Byee");

 //~~~~~~~~~~~~~~~~~~~~~~~~Asynchoronus~~~~~~~~~~~~~~~~~~~~

 let a: number = 10;
 let b: number = 8
 console.log(a * b);

 //Loop
 for(let n = 1; n <= 1; n++ ){
   console.log("Hello Niba khan")
 };


 //~~~~~~~~~~~~~~~~~~~~~~~~~~SettimeOut~~~~~~~~~~~~~~~~~~~~~~~~~
 setTimeout(function(){
   console.log("Hope you are Doing Well!");
 },2000);


 //~~~~~~~~~~~~~~~~~~~~~~~CallBack Function~~~~~~~~~~~~~~~~~~~~~~~~
 function teacher(teacherName1: string, teacherName2: string){
   console.log(`My teacher name is sir ${teacherName1} and Miss ${teacherName2}`)
 };

 let GIAIC = (callback: any,thursdaySlot: any, Name: string) => {
    callback(thursdaySlot, Name)
 };

 GIAIC(teacher, "Hamza Alvi", "Manaheel jamil");

 //~~~~~~~~~~~~~~~~~~~~~~~~Promises~~~~~~~~~~~~~~~~~~~~~

  let myPromise = new Promise((resolve, reject)=>{
   let myMarks = 90;
   if(myMarks >= 80){
      resolve("A")
   }
    else{
      reject("fail")
   }
   });

  myPromise.then((result)=>{
    console.log(result);
  })

 let myPromise1 = new Promise((resolve, reject)=>{
   console.log("promise pending");
   setTimeout(()=>{
       console.log("Problem resolve");
       let obj = {
           name: "niba khan",
           age: 18
       }
      console.log(obj.name);

      let data = ["niba", "Maha", "kinza"]
      if(data){
   console.log("promises resolve");
   return resolve(data);
 }else{
   console.log("promise reject");
   return reject(new Error("data fetch"));
 }},3000)
 });

 myPromise1
 .then((res)=>{console.log(res)})
 .catch((rej)=>{console.log(rej)})

 //~~~~~~~~~~~~~~~~~~~~~~~~~~Async Fnction/Await~~~~~~~~~~~~~~~~~~~~~~~~~~
  let myData = new Promise((resolve, reject) => {
     setTimeout(()=>{
      let rollNum:number = 45465;
      resolve(rollNum)
     },2000)   
  });

  let bioData = () =>{
   return new Promise((resolve, reject) => {
      let obj = {
         name: "niba khan",
         age: 18,
         gender: "female"
      }
      resolve(`My name is ${obj.name} and my age is ${obj.age}`);
   
  })
  };

  async function getData(){
   
   try{
   let rollNumber = await myData
   console.log(rollNumber);

   let bioDatas = await bioData();
   console.log(bioDatas)
  }
  catch (error){
    console.log("Error Occured", error);
  }
 }

 getData();

 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~CallBack Hell~~~~~~~~~~~~~~~~~~~~~~~
 
 function Task(){
   setTimeout(()=>{
      console.log("Task 1 Completed");

      setTimeout(()=>{
         for(let n = 1; n <=1; n++){
            console.log("Task 2 completed");
         }

         setTimeout(()=>{
            let a = "Task 3" 
            if(a == "Task 3"){
               console.log("Task 3 completed")
            }else{
               console.log("Task 3 Failed")
            }

            setTimeout(()=>{
               console.log("Finally Task Completed");
            },2000)
         
         },2000)
      },2000)
   },2000)
 };
 Task();

