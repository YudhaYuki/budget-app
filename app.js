// BUDGET CONTROLLER
var budgetController = (function() {
    
    // Some code

})();





// UI Controller
var UIController = (function() {

    return {
        getinput: function() {
            // Method for returning all of the three inputs that we had in the user interface
            return {
                type : document.querySelector('.add__type').value, // Will be either inc or exp
                description : document.querySelector('.add__description').value,
                value : document.querySelector('.add__value').value
            };
        }
    };
})();






// GLOBAL APP CONTROLLER
// Module can also receive argument
// Remember they are just function expressions

var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        // 1. Get the field input data
        var input = UICtrl.getinput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // Key press when we hit enter/return key
    document.addEventListener('keypress',  function(event) {

        if (event.keyCode === 13 || event.which === 13) {

            ctrlAddItem();

        }
    });

})(budgetController, UIController);