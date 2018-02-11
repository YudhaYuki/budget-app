// BUDGET CONTROLLER
var budgetController = (function() {
    
    // Some code

})();





// UI Controller
var UIController = (function() {

    // Some code

})();






// GLOBAL APP CONTROLLER
// Module can also receive argument
// Remember they are just function expressions

var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('it works.');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // Key press when we hit enter/return key
    document.addEventListener('keypress',  function(event) {

        if (event.keyCode === 13 || event.which === 13) {

            ctrlAddItem();

        }
    });

})(budgetController, UIController);