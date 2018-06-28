/* JavaScript code here */
//Task 1
console.log("External JS")

//Task 2

function sumArray(arr){
    var sum = 0;
    arr.forEach(function(value, index){
        sum +=value;
    });
    return sum ;
}
console.log(sumArray([1,2,3,4,5]));

//task 3
function checkEmail(emailString){
    var emailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = emailFormat.test(emailString);
    return match;
}
console.log(checkEmail("john@smith.com"));
console.log(checkEmail("johnsmith.com"));

//Task 4
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];


function getReadingStatus(index){
    return library[index].readingStatus;
}
console.log("status at index 1 : " + getReadingStatus(1));

//Task 5

var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
   
   //5 a
   console.log('5 a');
   function addItem(newItem){
       cart.push(newItem);
       return cart;
   }
   var newItem = {name: 'Watch', price: 64, quantity: 1};
   console.log(addItem(newItem));
   
   //5 b
   console.log('5 b');
   function sortByProperty(){
       cart.sort(function(obj1,obj2){
           return obj1.price - obj2.price;
       });
       return cart;
   }
   console.log(sortByProperty());
   
   //5 c
   console.log('5 c');
   function findByName(name){
       var result = cart.map(function(obj){
           if(obj.name == name){
                return obj;
           }
       }).filter(item => item);
       return result;
   }
   console.log(findByName('Socks'));
   
   //5 d
   
   console.log("5 d");
   function totalCost(){
       var result = 0;
       cart.forEach(function(obj){
          result = result + obj.price;
         
       });
       return result;
   }
   
   console.log("Total cost of items : " + totalCost());
