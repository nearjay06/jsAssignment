const Person = {
     name: "Anna",
     age: 32,
     gender: "rather not say",
     getbirthyear: function (){
         console.log(`you were born in the year: ${2019 - Person.age}`);
     },
     "married": false,
           

   };

  console.log(Person.married);

  Person.getbirthyear();