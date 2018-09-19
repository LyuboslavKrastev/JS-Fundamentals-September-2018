function GetDate (year, month, day){
    let date = new Date(year, month - 1, day); // JS Months start from 0
   
    date.setDate(date.getDate() + 1);
   
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
   }