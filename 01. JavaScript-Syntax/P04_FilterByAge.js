function filterByAge(minAge, nameOfFirst, ageOfFirst, nameOfSecond, ageOfSecond) {
  let firstPerson = {name:nameOfFirst, age:ageOfFirst};
  let secondPerson = {name:nameOfSecond, age:ageOfSecond};
  if (firstPerson.age >= minAge) 
  {
     console.log(firstPerson);
  }  
  if (secondPerson.age >= minAge) 
  {   
    console.log(secondPerson);
  }
}