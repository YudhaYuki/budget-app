// BUDGET CONTROLLER
var budgetController = (function() {
    
    // Some code

})();





// UI Controller
var UIController = (function() {

    // Object to store all of the strings, useful when we change the names later on
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };


    return {
        getinput: function() {
            // Method for returning all of the three inputs that we had in the user interface
            return {
                type : document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            };
        },

        // Basically, we are now exposing the DOMstrings object into the public
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();






// GLOBAL APP CONTROLLER
// Module can also receive argument
// Remember they are just function expressions

var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings(); // Define new varibale to get DOMstrings,  So by doing this, inside this DOM variable, we also have the DOMstrings that we have up there (DOMstrings), because we expose them to the public by using getDOMstrings method

    var ctrlAddItem = function() {

        // 1. Get the field input data
        var input = UICtrl.getinput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); // because now it calls DOM no longer DOMstrings
 
    // Key press when we hit enter/return key
    document.addEventListener('keypress',  function(event) {

        if (event.keyCode === 13 || event.which === 13) {

            ctrlAddItem();

        }
    });

})(budgetController, UIController);

// Passing one controller/module to the other