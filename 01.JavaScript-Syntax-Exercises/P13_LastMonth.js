function LastMonth([day, month, year]){
    let date = new Date(year, month-1, 0); // 0 days, gets the maximum day number of the month
    let days = date.getDate();
    console.log(days);
}