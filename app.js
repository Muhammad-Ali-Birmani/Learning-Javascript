

function showMe() {
    document.getElementById("mytext").innerHTML = Date();
}

var on = false;

function changePhoto() {
    on =!on;
    if(on)
        {
            document.getElementById("onoff").innerText = "Off";
            document.getElementById("imagek").src = 'pic_bulbon.gif';

        }
        else{
            document.getElementById("onoff").innerText = "On";
            document.getElementById("imagek").src = 'pic_bulboff.gif';

        }
   
}


function changeText(){
    document.getElementById("demoTxt").innerText = "Muhammad Ali";
}


var bckColor = "rgb(100, 100, 10)";
var redColor = 110;
var blueColor = 60;
var greenColor = 20;

var sizecount = 1;
function changeCss(){
    redColor +=3;
    blueColor +=5;
    greenColor +=8;
    bckColor = `rgb(${redColor},${blueColor},${greenColor})`;
    console.log("Font size:",sizecount);
    var size=10+sizecount;
    size+='px';
    document.getElementById("myfont").style.fontSize = size;
    document.getElementById("myfont").style.color = bckColor;

    bckColor = `rgb(${redColor},${blueColor},${greenColor})`;
    

    sizecount++;
}


function printTable(){
    
        for(let i = 1 ; i <=100 ; i++){
            document.getElementById("myfont").innerHTML += `5  *  ${i}   =   ${i*5}<br>`;
        }
  
}

// $(document).ready(function(){
//    $("#myPhoto").mouseenter(function(){

//     $(this).attr("src", "pic_bulboff.gif");
//     $(this).css("width" , "200px");

//    });

   
//    $("#myPhoto").mouseleave(function(){

//     $(this).attr("src", "pic_bulbon.gif");
//     $(this).css("width" , "200px");


//    });



// });
function hideMe(){
    document.getElementById("myfont").style.display = "block";
}



// var myVar =  document.getElementById("innerPhoto").src;
// console.log(myVar);



function PressKey(){
    var myDAta =  document.getElementById("myPhoto").src;
    alert(myDAta);
    console.log(myDAta);
}

// window.print("I am Muhammad Ali");


function getAndSet() {
    document.getElementById("paraId").innerText = "Ali is here <h1>No No I am Khan </h1>";
    document.getElementById("paraId1").innerHTML = "Ali is here <h1>No No I am Khan </h1>";
}


num1 = 10;
num2 = 10;
res = num1 + num2;

//alert(res);


// let y = "5" + 2 + 3;
// let x = 2 + 3 + "5";

// console.log(y);
// console.log(x);

// let valof = generateUniqueId();

// console.log(valof);


//console.log(myVar); 

// Example 2: Accessing a variable out of scope
function outerFunction() {
    let innerVar = 'Hello';
    console.log(innerVar);
}

// console.log(innerVar); // ReferenceError: innerVar is not defined


// console.log("Ok");

//outerFunction();



// const arr = ["ali" , "asad" , "waleed"];
// console.log(arr);
// arr.push("Hania Aamir");
// arr[2] = "yyyyyyyyyyy";
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);



    // const car = {carName : "Fiat" , price : "5000" , modelNumber : 5000};

    // console.log(car);
    // console.log(car.carName);

    // car.carName = "uuuuuuuu";
    // console.log(car.carName);


    // car.carName = 11111111111;
    // console.log(car.carName);


    // alert (carName);
    // const carName = "Volvo";

    // let idnum = "123";

    // const arr = ["123" , "123"];
    // const arr1 = {name:"Ali" , khan : "aaa"};

    // console.log(typeof(idnum));
    // console.log(typeof(arr1));
    // console.log(typeof(arr));


    // const Student = {firstName : "Muhammad" , lastName : "Ali" , 
    //     fullName : function(){return this.firstName + " " + this.lastName} , age : 23};

    //     console.log(Student.fullName);

    
        // const person = {
        //     firstName: "John",
        //     lastName : "Doe",
        //     id       : 5566,
        //     fullName : function() {
        //       return this.firstName + " " + this.lastName;
        //     }
        //   };

        //     person.age = function(){
        //         alert("Finction is added");
        //     }

        //     person.age();


        //     console.log(person);

         //console.log( person.fullName());

    //         //console.log(person.fullName);


    //         delete person.id;
    //         //console.log(person);

    //         //person["lastName"] = 1234;

    //          let fname = person.fullName;
    //         console.log(fname);


    // const plumber = {
    //     fname : "Waleed",
    //     lanme : "Akhtar",
    //     age : 23
    // };

    // function putData() {
    //     document.getElementById("putData").innerHTML = `<h1> ${plumber.age} , ${plumber.lanme} , ${plumber.id} ,  </h1>`;
    //     document.getElementById("putData1").innerText = `<h1> ${plumber.age} , ${plumber.lanme} , ${plumber.id} ,  </h1>`;
    // }


        // const myObj = {
        //     fname : "Muhammad",
        //     lanme : "Ali",
        //     age : 23,
        //     city : "Dera Ghazi Khan",
        //     marriageStatus  : false
        // };
        // let text = "";
        // function printMyData(){
        //         for(let x in myObj){
        //             console.log(x);
        //             text += myObj[x] + " , ";
        //         }

        //         document.getElementById("putData1").innerHTML = text;

        // }

        // let data = "";

        // function showByObjectValue() {
        //    let myDAtaResult = Object.values(myObj);

        //     for(let x in Object.values(myObj)){
        //         console.log(x);
        //     }
        //     document.getElementById("putData1").innerHTML = data;
        // }



    
//         const myObj = {
//             fname : "Muhammad",
//             lanme : "Ali",
//             age : 23,
//             city : "Dera Ghazi Khan",
//             marriageStatus  : false
//         };

//         let stringyfy = JSON.stringify(myObj);

// function usingLoop() {
         
//          document.getElementById("putData1").innerHTML = stringyfy;

//         }
        

        // function usingLoop() {
        //      let res = "";
        //     for(let[Data , ValueoF] of Object.entries(myObj)){
        //         console.log(Data + " " + ValueoF);
        //         res += Data + " : " + ValueoF + "<br>";
        //     }
        //  document.getElementById("putData1").innerHTML = res;

        // }
        


        //Object Constructor Function

    //    function Person(fname , lanme , age , id){
    //     this.fname = fname;
    //     this.lanme = lanme;
    //     this.age = age;
    //     this.id = id
    //    }

    //      const Brother = new Person("Ahmad" , "Ali" , 21,200);
    //     console.log(Brother.fname);
    //     console.log(Brother["lanme"]);
    //      console.log(typeof Brother);



    function Employee(fname, lanme, age, id ){
        this.fname = fname;
        this.lanme = lanme;
        this.age = age;
        this.id = id;
    }

    // const Ali = new Employee("Muhammad", "Ali", 23, 1000);

    // Ali.salary = 50000;

    // console.log(Ali.salary);

    // let valeData = Object.values(Ali);

    // console.log(valeData);

    // Employee.prototype.Points = 90;

    //     Employee.Points = function(points){
    //         this.points = points;
    //     }

    // const Ahmad = new Employee("Ahmad", "Ali", 21, 90, 1001 ``);

    // console.log(Ahmad);

    //console.log("A newline character is written like \"\\n\".");

    // let bull = {};

    // console.log(bull);

    // bull.Weep = function(weep){
    //     console.log(`I am weeping ${weep}`);
    // }

    // bull.Weep("ok ok");


    // let data1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // console.log(data1.length);

    // let backTickString = `This 
    // is multiline message
    // that is enclosed in backtick string`;

    // console.log(backTickString);




    let data1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

   // console.log(data1[10]);

//    let newStr = data1.slice(3,10);
//    console.log(newStr);


//    let newStr = data1.slice(-10,-2);
//    console.log(newStr);



// let text = "5";
// let padded = text.padStart(4,"x");

// console.log(padded);







// let text = "Hello world!";
// let result = text.repeat(4);
// console.log(result);


    // let a = "10";
    // let b = "apple";

    // console.log(a/b);

    // let x = 100 / "Apple";

    // console.log(isNaN(x));



    // let num = 2;

    // while(num != Infinity){
    //     console.log(num * num + "\n");
    // }


        // let num_1 =  BigInt("123456789012345345345345353");
        // let num_2 = BigInt("123456789012345345345345353");

        // let num_3 = num_1*num_2;

        // console.log(num_3); 


    // let numberK = Number.MAX_VALUE;
    // let numberK2 = Number.MIN_VALUE;

    // console.log(numberK);
    // console.log(numberK2);



    // const myArrayData = [1,"Muhammad","Ali" , 'M',23];
    // let dataText = "<ul>"
    // function displayArrayResult() {
    //     for(let i = 0 ; i < myArrayData.length ; i++){
    //         dataText += "<li>" + myArrayData[i] + "</li>";
    //     }

    //     dataText += "</ul>"; 


    //     document.getElementById("putData1").innerHTML = dataText;
    // }


    //  const myArrayData = ["Apple" , "Banana" , "Carrot" , "Orange", "Potato"];
    //  myArrayData.push("Apricot");
    //  console.log(myArrayData);


    // const tetsArray = ["Aa" , "Bb" , "Cc", "Dd", "Ee", "Ff"];

    // function displayArrayResult(){
    //     let textAdded = "<ul>";

    // tetsArray.forEach(myFunction);

    // textAdded +="</ul>";

    // function myFunction(value){
    //     textAdded += "<li>" + value + "</li>";
    // }
    //      document.getElementById("putData1").innerHTML = textAdded;
    // }

    
    // const helloArray = [];

    // helloArray.push("Muhammad");
    // helloArray.push("Ali");
    // helloArray.push(100);
    // helloArray.push("DGK");
    // helloArray.push("BS-IT");

    // for(let i in helloArray){
    //     console.log(helloArray[i]);
    // }

    // console.log(Array.isArray(helloArray));

    // console.log(helloArray instanceof Array);


    // const myObj = {
    //     name : "Allen Fin",
    //     age : 30,
    //     cars : [
    //         {name : "Ford", models:["Fiesta", "Focus", "Mustang"]},
    //         {name : "BMW", models:["320", "X3", "X5"]},
    //         {name : "Fiat", models : ["500" , "Panda"]}
    //     ]
    // };

    // let myTextData = "";

    // function  collectDataOfNestedArrays(){
    //     for(let i in myObj.cars){
    //         myTextData +="<h1>" + myObj.cars[i].name + "</h1>";
    //         for(let x in myObj.cars[i].models){
    //             myTextData += myObj.cars[i].models[x] + "<br>";
    //         }
    //     }

    //     document.getElementById("putData1").innerHTML = myTextData;
    // }

    //  const myArray = ["Apple", "Ball", "Car", "Dog", "Fan"];

    // function arrayToStringMethod(){
    //     document.getElementById("putData1").innerHTML = myArray.toString();
    // }



    // const myArray = ["Apple", "Ball", "Car", "Dog", "Fan"];

    // console.log(myArray[2]);
    // console.log(myArray.at(3));


        //  const myArray = ["Apple", 100,"Fiat" , 2001];
        //  function clickButton(){

        //    let myArr =  myArray.pop();
        //  document.getElementById("putData1").innerHTML = myArray.join(" * ");
        //  let newLength = myArray.push("Dumb");
        //  console.log(myArr);
        //  console.log(newLength);


        //  }


        //  const myArray = ["Apple", 100,"Fiat" , 2001];
        //  function clickButton(){

        //    //let myArr =  myArray.shift();
        //  document.getElementById("putData1").innerHTML = myArray.join(" * ");
         
        //  //console.log(myArr);
        //  myArray[myArray.length] = "Round";
        //  console.log(myArray);
        //     myArray.unshift("ABC");

        //  }


        // const arrayOne = ["A", "B", "C", "D", "E"];
        // const arrayTwo = ["a", "b", "c", "d", "e"];

        // let arrayThree = arrayOne.concat(arrayTwo);
        // console.log(arrayThree);


        // const arr = ["Abc" , "Def", "Ghi" , "Jkl"];
        // console.log(arr);
        // arr.copyWithin(2,0);
        // console.log(arr);

        // const myArr = [[1,2],[3,4],[5,6]];
        // const newArr = myArr.flat();
        // console.log(myArr);
        // console.log(newArr);

        // const dataArr = ["Abc" , "Def" , "Ghi" , "Jkl" , "Mno"];

        // const derivedArray = dataArr.splice(2,0,"ALI","KHAN");

        // console.log(derivedArray);


        // const fruits = ["Banana", "Orange", "Lemon", "Banana", "Mango"];
        // const citrus = fruits.slice(3);
        // console.log(citrus);

        // console.log(fruits.lastIndexOf("Banana"));

        // console.log(fruits.includes("Lemon"));

        // console.log(fruits.find());


        // const fruits = ["Banana", "Orange", "Apple", "Mango"];
        // console.log(fruits.reverse());