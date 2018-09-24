function GetMoviePrice([title, dayOfWeek]){
    title = String(title).toLowerCase();
    dayOfWeek = String(dayOfWeek).toLowerCase();
    if(title === "the godfather"){
        switch(dayOfWeek){
            case "monday": return 12;
            case "tuesday": return 10;
            case "wednesday": return 15;
            case "thursday": return 12.50;
            case "friday": return 15;
            case "saturday": return 25;
            case "sunday": return 30;
            default : return "error";
        }
    }
    else if(title === "schindler's list"){
        switch(dayOfWeek){
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
            return 8.50;
            case "saturday":
            case "sunday":
            return 15;
            default : return "error";
        }
    }
    else if(title === "casablanca"){
        switch(dayOfWeek){
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
            return 8;
            case "saturday":
            case "sunday":
            return 10;
            default : return "error";
        }
    }
    else if(title === "the wizard of oz"){
        switch(dayOfWeek){
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
            return 10;
            case "saturday":
            case "sunday":
            return 15;
            default : return "error";
        }
    }
    else{
        return "error";
    }
}

console.log(GetMoviePrice(['The Godfather', 'Friday']));
console.log(GetMoviePrice(['casablanca', 'sunday']));
console.log(GetMoviePrice(["Schindler's LIST", "monday"]));
console.log(GetMoviePrice([['SoftUni', 'Nineday']]));


