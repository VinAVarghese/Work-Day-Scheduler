// Grabbing HTML //
var currentDay = $("#currentDay")

// Setting Variables //
var today = moment().format("dddd") 

$(currentDay).text(moment().format("dddd, MMMM Do"))


