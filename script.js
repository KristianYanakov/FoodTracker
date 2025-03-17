class Entry{
    constructor(foodName, quantity, calories, protein, carbs, fat){
        this.foodName = foodName
        this.quantity = quantity
        this.calories = calories
        this.protein = protein
        this.carbs = carbs
        this.fat = fat
    }
    displayInfo(){
        console.log("%c-------------", "color:yellow")
        console.log(`Food: ${this.foodName}, Quantity: ${this.quantity} gramms, Calories ${this.calories} cal\nProtein: ${this.protein} gramms, Carbs: ${this.carbs} gramms, Fat: ${this.fat} gramms.`)
        console.log("%c-------------", "color:yellow\n")
    }
}

let entries = []
let dailyMacros = {calories: 3000, protein: 180, carbs: 400, fat: 100}
let macros = {calories: 0, protein: 0, carbs: 0, fat: 0}
let currProcent = 0

var addFood = function(){
    let foodName = $("#foodname").val()
    let quantity = $("#quantity").val()
    let calories = $("#calories").val()
    let protein = $("#protein").val()
    let carbs = $("#carbs").val()
    let fat = $("#fat").val()
    
    /*if(foodName === "" && foodName == null && quantity === "" && quantity == null && calories === "" && calories == null && protein === "" && protein == null && carbs === "" && carbs == null && fat === "" && fat != null){
        console.log("NULL OR EMPTY")
        return "Null or empty value!"
    }*/

    console.log("FoodName: " + foodName + " quantity: " + quantity)
    console.log("Calories: " + calories + " protein: " + protein + " carbs: " + carbs + " fat: " + fat)
    console.log("\n")


    
    entries.push(new Entry(foodName, quantity, calories, protein, carbs, fat))

    //check if marked as breakfast lunch or dinner and add a class to the <tr> with background color corresponding - lighgreen etc
    
    $(".foodLog tbody").append("<tr><th scope = 'row'>"+entries.length+"</th> <td>"+ foodName +"</td> <td>"+ quantity +"</td> <td>"+ calories +"</td> <td>"+ protein +"</td> <td>"+ carbs +"</td> <td>"+ fat +"</td> </tr>")
    
    //UPDATE THE CALORIE CHART
    macros.calories += Number(calories)
    macros.protein += Number(protein)
    macros.carbs += Number(carbs)
    macros.fat += Number(fat)

    $("#calorieText p").html(macros.calories + "/" + dailyMacros.calories + " kcal");  //macros.calories + "/"+ dailyMacros.calories + "kcal")

    
    currProcent = (macros.calories / dailyMacros.calories) * 100;

    if (macros.calories <= dailyMacros.calories / 4) {
        $(".circle").css("background", "conic-gradient(orange " + currProcent + "%, #e0e0e0 0%)");
    } else if (macros.calories <= dailyMacros.calories / 2) {
        $(".circle").css("background", "conic-gradient(yellow " + currProcent + "%, #e0e0e0 0%)");
    } else if (macros.calories <= dailyMacros.calories * (3 / 4)) {
        $(".circle").css("background", "conic-gradient(blue " + currProcent + "%, #e0e0e0 0%)");
    } else {
        $(".circle").css("background", "conic-gradient(green " + currProcent + "%, #e0e0e0 0%)");
    }
    
}

$("#addFood").click(function(){
    //
    addFood()
    
})

function logEntries(){
    for(let i = 0; i < entries.length; i ++){
        console.log("Entries: ", entries[i])
    }
}
//console.log("TEST LOG FOR GITHUB")

//SAVE INTO TXT FILES WITH THE CURR DATE AND RESULTS

