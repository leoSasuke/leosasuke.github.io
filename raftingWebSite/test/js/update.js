window.onload = (() => {
    const myDate = document.querySelector('#currentDate');

    let dt = new Date();
    let weekDay = dt.getDay();
    let myDay = dt.getDate();
    let myMonth = dt.getMonth();
    let myYear = dt.getFullYear();

    const daysOfWeek = [
        "Sunday",
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];

    const monthsOfYear = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    myDate.innerHTML = `${daysOfWeek[weekDay]}, ${myDay} ${monthsOfYear[myMonth]} ${myYear}`;});

   