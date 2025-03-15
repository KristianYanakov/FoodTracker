
var addFood = function(){
    let foodName = $("#foodname").val()
    let quantity = $("#quantity").val()
    let calories = $("#calories").val()
    let protein = $("#protein").val()
    let carbs = $("#carbs").val()
    let fat = $("#fat").val()
    

    console.log("FoodName: " + foodName + " quantity: " + quantity)
    console.log("Calories: " + calories + " protein: " + protein + " carbs: " + carbs + " fat: " + fat)
    console.log("\n")
    //check if marked as breakfast lunch or dinner and add a class to the <tr> with background color corresponding - lighgreen etc
    $(".foodLog").append("<tr><td>" + foodName + "</td> <td>" + quantity + "</td> <td>" + calories + "</td> <td>" + protein + "</td> <td>" + carbs + "</td> <td>" + fat + "</td></tr>")

}

$("#addFood").click(function(){
    //
    addFood()
    
})

console.log("TEST LOG FOR GITHUB")