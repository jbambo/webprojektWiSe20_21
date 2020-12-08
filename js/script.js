//toggle mobile navi
function toggleMobileNavigation() {
    document.getElementById("mainNavi").classList.toggle("open");
}

//event listener for mobile navi
document.getElementById("toggle_menu").addEventListener("click", toggleMobileNavigation);

//aside section

//function for showing weekdays
function showWeekdaysOfEmployee(element) {
    let today = new Date(); //date object
    let availableDays = [1, 2, 4, 5]; //array of available days 0-6
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]//array of weekdays as strings
    let todayWeekday = today.getDay(); //pass the day from object date to a variable
    let availableWeekdays = []; //empty array

    //for loop to iterate over available days
    for (let i = 0; i < availableDays.length; i++) {
        let weekdayText = weekdays[availableDays[i]]; //set weekdaytext to a available day

        if (todayWeekday == availableDays[i]) { //if today is the available day make it span element
            weekdayText = "<span>" + weekdayText + "</span>";
        }//if
        availableWeekdays.push(weekdayText); //fill the empty array with available days
    }//end for loop

    let sentenceAvailability = "I am available on the following days: <br>"+ availableWeekdays.join(", ");//print array to string with ", " between the elements

    element.innerHTML= sentenceAvailability; //pass the computed string to element

}// function end

let availabilityContainer= document.getElementById("availability_days"); //pass the element with id to variable
//check if the element is in DOM
if (availabilityContainer){
    showWeekdaysOfEmployee(availabilityContainer); //initialize the function with variable
}

//form options

let radioButtons = document.getElementsByName("format");

radioButtons.forEach(function(element){
    element.addEventListener("click",function (){
        let contactForm = document.getElementById("contact_form");
        contactForm.classList.remove("newsletter","contact");
        contactForm.classList.add(element.value)
    });
});





