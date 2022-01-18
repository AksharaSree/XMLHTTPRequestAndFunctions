/* ********************************************************** */

/* 
1.  How to compare two JSON have the same properties without order?
    var obj1 = { name: "Person 1", age:5 };
    var obj2 = { age:5, name: "Person 1" };

*/

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };


(function CompareObjects(obj1,obj2){

    let sameObject = true;
    if(Object.keys(obj1).length == Object.keys(obj2).length){

        let keys = Object.keys(obj1);
        keys.forEach(key=> {
            
                if(obj2[key] !== obj1[key] && sameObject)
                    sameObject = false;
        });

    }
    else
        sameObject = false;

    sameObject ? console.log("Objects are same") : console.log("Objects are different");
})(obj1,obj2);

//CompareObjects(obj1,obj2);
/* ********************************************************** */

/*
 2.   Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
 3.   Use the same rest countries and print all countries name, region, sub region and population   
 
 Note: Currently the given API is not working, so commented loadCountries() method.

*/

var countries = [];


function loadCountries() {
    const xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
    
    xhttp.onreadystatechange = function (oEvent) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
              console.log(xhttp.responseText)
            } else {
               console.log("An error occurred while processing request", xhttp.statusText);
            }
        }
    };
    
    
    xhttp.send();
    xhttp.onload = function() {
        countries = JSON.parse(this.responseText);

        countries.forEach(country => { 

           // Print all countries name, region, sub region and population
            console.log({ "name": country.name, "region": country.region, "subregion" :  country.subregion, "population":country.population }); 
            
             //display all the country flags   
            console.log(country.flag);       
        });       
      
      }
}
//loadCountries();  
  
/* ********************************************************** */

/* 
    4. https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373   
    Task 3:  Simple Programs todo for Condition , Looping and Arrays
*/

/*      
     1. Write a loop that makes seven calls to console.log to output the following triangle:
*/

console.log("1. Write a loop that makes seven calls to console.log to output the following triangle\n")
function printTriangle(){

    let rowCount = 7;
      for(let i=1;i<=rowCount;i++){
        var printString = "";
        for(let j=1;j<=i;j++){               
            printString = printString + '#' ; 
        }
        console.log(printString);
      }
}
printTriangle();

/* ********************************************************** */
/*      
     2. Iterate through the string array and print it contents
*/

console.log("2. Iterate through the string array and print it contents\n")

var strArray= ["<option>Jazz</option>",
,"<option>Blues</option>",
,"<option>New Age</option>",
,"<option>Classical</option>",
,"<option>Opera</option>"];

var contents = strArray.filter(str=> str != "");
for(let i=0; i < contents.length; i++){
    console.log(contents[i]);
}

/* ********************************************************** */

/*      
     3. Write a code to count the elements in the array . Don’t use length property
*/

console.log("3. Write a code to count the elements in the array . Don’t use length property\n")

var myarray=[11,22,33,44,55];
var arrayLength = 0;
myarray.forEach((x,i)=>{
    arrayLength = i+1;
});

console.log("Given array length is "+ arrayLength);

/* ********************************************************** */

/*      
     4. Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
     How can you find your fifth favorite food?     
*/

let foods=["Sweet Pongal","Dosa", "Mushroom Gravy", "Panner Tikka", "Idly","Ice Cream","Pancakes","Sandwich","Potato Fries", "Sweet Corn","Mango","Dry Fruits & Nuts", "Fried Rice", "Orange"];
console.log(`5th Favorite Food is ${foods[4]}`);

console.log(`Length of Array is ${foods.length}`);

/* ********************************************************** */

/*      
     5. Starting from the existing friends variable below, change the element that is currently "Mari" to "Munnabai".

     */

     let friends = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
        ];
        function swapFriends(input){
            
            let temp ;
            for (var i = 0; i < input.length; i++) {               
                
                if(input[i]==="Mari"){                  
                    temp = input[i];
                }
                
                 if(input[i]==="Munnabai")   {                 
                 
                    input[input.indexOf(temp)] = input[i];
                    input[i] = temp;

                 }
                
            }
        }
        swapFriends(friends);
        console.log(friends);

/* ********************************************************** */

/*      
     6. Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

     */
        

     
        function dataHandling(input){
        for (var i = 0; i < input.length; i++) {

            console.log(input[i]);
            if(input[i]==="CaptianAmerica")
                break;
            
            }
        }
        dataHandling(friends);
/* ********************************************************** */

        /* Find the person is ur friend or not. */

        function FindFriend(input, name){
                for (var i = 0; i < input.length; i++) {
                    if(input[i]===name){
                      return true;                      

                    }
                
                }
                return false;
            }
            
          let friend1 = "Jeff";
          let friend2 = "John";
            console.log(FindFriend(friends,friend1));
            console.log(FindFriend(friends,friend2));

/* ********************************************************** */

        /* We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list. */

        var friends1 = [
            "Mari",
            "MaryJane",
            "CaptianAmerica",
            "Munnabai",
            "Jeff",
            "AAK chandran"
            ];
            var friends2 = [
            "Gabbar",
            "Rajinikanth",
            "Mass",
            "Spiderman",
            "Jeff",
            "ET"
            ];

            function CombineArray(input){
                friends1 = friends1.concat(friends2);
                friends1 = friends1.sort();
                console.log(friends1);
                }
                CombineArray(friends1);
/* ********************************************************** */

  /*  Get the first item, the middle item and the last item of the array */


         console.log(`First Item is ${friends[0]}`);
         console.log(`Middle Item is ${friends[Math.ceil(friends.length/2)]}`);
         console.log(`Last Item is ${friends[friends.length-1]}`)       


/* ********************************************************** */

  /*  Add your name to the end of the friends array, and add another name to beginning*/

  friends.push("Akshara");
  friends.splice(0,0,"Karthik");
  console.log(friends);

/* ********************************************************** */

/* Concat all the names the friends array and return as comma "," seperated string. */

console.log(friends.join(","));



/* ********************************************************** */
  /*  Find the friends names who has letter ‘a’ and return the list. */


  let filteredFriends = friends.filter(x=>x.includes('a'));
  console.log(filteredFriends);

  let filteredFriends1 = friends.filter(x=>x.startsWith('M'));
  console.log(filteredFriends1);


  let strLengths = friends.map(x=>x.length);

  const totalLength = strLengths.reduce((a, b) => a + b, 0);
  const avg = (totalLength / strLengths.length) || 0;  
  console.log(`Avg length of all the friends names: ${avg}`);

 let minLength = Math.min(...strLengths); 
 let maxLength = Math.max(...strLengths); 

 console.log("Min Length Names", friends.filter(x=>x.length ==  minLength));
 console.log("Max Length Names", friends.filter(x=>x.length ==  maxLength));


 /* ********************************************************** */
  /*  Find the average in the array below.
 Make sure you add only the numbers and do avg. */


 
 const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
 let filterNumbers = friendsInfo.filter(x=> { return !isNaN(x.toString()) }).map(x=>parseInt(x));

 let total = filterNumbers.reduce((a, b) => a + b, 0);
 let numbersAvg = (total / filterNumbers.length) || 0;  
 console.log(`Avg of given Array: ${numbersAvg}`);


//console.log(filterNumbers);
 /* ********************************************************** */

/*   Print the contents of the input variable */


 var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
 ];
 function printValues(input){
    for (var i = 0; i < input.length; i++) {
    //Your code goes here
    console.log("Array Detail", input[i]);    
    let arrayContents = input[i];
    console.log("Below are the array contents");

        for (var j = 0; j < arrayContents.length; j++) {

            console.log(arrayContents[j])
        }


    }
 }
 printValues(input);


/* ********************************************************** */
/* Objects: */

/* What is the output of below code */

//let myobject = {1:one,"11":1,"name":"arun"}; -- Uncaught ReferenceError: one is not defined

 let myobject = {1:"one",11:1,"name":"arun"};

 //console.log(myobject.11); -- Uncaught SyntaxError: Unexpected number

 console.log(myobject.name); // Output: arun


/* Add a new key value pair to myobject
key : ten
value : ten */

 myobject.ten = "ten";
 console.log(myobject);

/* ********************************************************** */
/*

Write out an object literal to represent the data below.
Guvi, Geek, 6, IIT-M RP,Chennai.  */


let outputObjArray = [];
let companyList = 
    ["Guvi, Geek, 6, IIT-M RP,Chennai.", "Amazon, Inc, 31, SP Infocity, Chennai." , "Google, Alphabet, 34, Amphitheater Parkway, MountainView.","Tesla, Inc , 32, 333 Santana Row,San Jose."];


    companyList.forEach(company => {
        let details = company.split(",");
        outputObjArray.push({CompanyName:details[0].trim(), Type: details[1].trim(), AddressLine1: details[2].trim(),  AddressLine2: details[3].trim(),  AddressLine3: details[4].trim() });
});

console.log(outputObjArray);


/* ********************************************************** */

  /*  Write a code to print the numbers in the array
      Output: 1234567891011 */
               

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);
