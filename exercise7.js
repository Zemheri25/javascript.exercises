function gettingDay () {
    switch (new Date().getDay()) {
        case 0: 
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Thursday"
        case 4:
            return "Friday"
        case 5:
            return "Saturday"
    }
}

console.log(gettingDay());