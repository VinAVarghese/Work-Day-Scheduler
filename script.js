// Grabbing HTML //
var currentDay = $("#currentDay")
var nine = $(".nineAm")
var ten = $(".tenAm")
var eleven = $(".elevenAm")
var twelve = $(".twelveAm")
var one = $(".onePm")
var two = $(".twoPm")
var three = $(".threePm")
var four = $(".fourPm")
var five = $(".fivePm")
var nineBtn = $(".nineBtn")
var tenBtn = $(".tenBtn")
var elevenBtn = $(".elevenBtn")
var twelveBtn = $(".twelveBtn")
var oneBtn = $(".oneBtn")
var twoBtn = $(".twoBtn")
var threeBtn = $(".threeBtn")
var fourBtn = $(".fourBtn")
var fiveBtn = $(".fiveBtn")
var allBtn = $(".saveBtn")


// Global Arrays // 
var hours = [9,10,11,12,13,14,15,16,17]
var hoursElArray = [nine,ten,eleven,twelve,one,two,three,four,five]

// Today's Date //
$(currentDay).text(moment().format("dddd, MMMM Do"))

// Checking Past,Present,Future Hours For Class Additions //
var currentHour = moment().hour() 
for (let i = 0; i < 9; i++) {
    if (currentHour === hours[i]){
        $(hoursElArray[i]).addClass("present")
    } else if (currentHour > hours[i]) {
        $(hoursElArray[i]).addClass("past")
    } else {
        $(hoursElArray[i]).addClass("future")
    }
}

// EventListeners For Saving //
$(allBtn).click(function(){
    var saveThis = $(this).siblings(".description").val();
    localStorage.setItem("userData",saveThis);
    localStorage.getItem("userData");
})















