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
//entries.push(new Entry('Burger', 125, 400, 24, 45, 32))
//entries[0].displayInfo()

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

    //check if marked as breakfast lunch or dinner and add a class to the <tr> with background color corresponding - lighgreen etc
    $(".foodLog").append("<tr><td>" + foodName + "</td> <td>" + quantity + "</td> <td>" + calories + "</td> <td>" + protein + "</td> <td>" + carbs + "</td> <td>" + fat + "</td></tr>")
    
    entries.push(new Entry(foodName, quantity, calories, protein, carbs, fat))
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
