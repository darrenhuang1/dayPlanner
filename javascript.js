$(".saveBtn").on("click",function(){
    var time = $(this).attr("id")
    var save = $(this).siblings(".description").val()
    
    localStorage.setItem(time,save);
    console.log(save)
    console.log(time)
})

var nineAM = localStorage.getItem("9am")
$("#9 .description").val(nineAM);
var tenAM = localStorage.getItem("10am")
$("#10 .description").val(tenAM);
var elevenAM = localStorage.getItem("11am")
$("#11 .description").val(elevenAM);
var twelvePM = localStorage.getItem("12pm")
$("#12 .description").val(twelvePM);
var onePM = localStorage.getItem("1pm")
$("#13 .description").val(onePM);
var twoPM = localStorage.getItem("2pm")
$("#14 .description").val(twoPM);
var threePM = localStorage.getItem("3pm")
$("#15 .description").val(threePM);
var fourPM = localStorage.getItem("4pm")
$("#16 .description").val(fourPM);
var fivePM = localStorage.getItem("5pm")
$("#17 .description").val(fivePM);


$("#currentDay").text(moment().format('MMMM Do, YYYY'));

function hourUpdater(){
    var currentHour = moment().hour();
    console.log(currentHour);
    $(".time-block").each(function(){
        var id = parseInt($(this).attr("id"));
        if(id < currentHour){
            $(this).addClass("past");
        }
        else if (id === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
            
    });
}

var hourCheck = setInterval(hourUpdater, 5000);