// BUDGET CONTROLLER, this will keep tracks all incomes and expenses and also the budget itslef and later prcentages
var budgetController = (function() {

    // functions constructor, we choose to create object here through the expense function constructor, because there will be a lot of expenses, therefore this is the best way to do that
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    // Private, we use it for either income or expenses
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            // sum = sum + cur.value;
            // Anotherway
            sum +=  cur.value;
        });

        data.totals[type] = sum;

    };
    
    // Storing the income or expenses
    /*
    var allExpenses = [];
    var allIcomes = [];
    var totalExpenses = 0;
    .... do the same thing for income and the budgets and so on, then this will not be the best solution
    Each time somehow that we can aggregate a lot of information into one nice data structure, we should definitely do that.
    it's better to have one data structures where all of our data goes instead of having a lot of data variables flowing around
    SO, BETTER solution is the bellowing down here !!!!

    like this 
    var data = {
        allExpenses: [],
        allIncomes: [],
    }

    But we can still even do it better, because both of these are arrays which store all instances
    of either expenses or incomes.
    So anohter better solution is down here !!!!

    Allitems is also an object

    */

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }



    // Creating new items
    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // We want ID = last ID + 1;
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;                
            } else {
                ID = 0;
            }

            // Create ne item based on 'inc' or 'exp' type
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },

        calculateBudget: function() {

            // Calculate total incomes and expenses
            calculateTotal('exp');
            calculateTotal('inc');


            // Calculate the budget: income - expenses

            // Calculate the percentage of income that we spent
        },

        // create new method to test what we have done so far in the console
        testing: function() {
            console.log(data);
        }
    };

})();




// UI Controller
var UIController = (function() {

    // Object to store all of the strings, useful when we change the names later on
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };


    return {
        getinput: function() {
            // Method for returning all of the three inputs that we had in the user interface
            // ParseFloat function, takes the string, that is returned and covert it to a number
            return {
                type : document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMstrings.inputValue).value)

                
            };
        },

        // 
        addListItem: function(obj, type) {

            var html, newHtml, element;

            // Create HTML string with placeholder text

            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'; 
            } else if (type === 'exp') { 
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM 
            // the "beforeend keyword" makes it so that all of our HTML will be inserted as a child of these container (income__list OR expenses__list) but the last childin the list
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        clearFields: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            // This will trick the slice method into thinking that we give it an array, so it will return an array
            // This means now we can loop over this array, and clear all the fields that were selected, which is only two in this case
            fieldsArr = Array.prototype.slice.call(fields);

            // We want simply clear all these fields
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });

            // It will select the first element, we simply need to use the focus method
            fieldsArr[0].focus();
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

    var setupEventListener = function() {

        var DOM = UICtrl.getDOMstrings(); // Define new varibale to get DOMstrings,  So by doing this, inside this DOM variable, we also have the DOMstrings that we have up there (DOMstrings), because we expose them to the public by using getDOMstrings method        

        // Passing one controller/module to the other
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); // because now it calls DOM no longer DOMstrings
        
        // Key press when we hit enter/return key
        document.addEventListener('keypress',  function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    

    var updateBudget = function() {

        // 1. Calculate the budget


        // 2. Return the budget


        // 2. Display the budget on the UI

    }



    var ctrlAddItem = function() {

        var input, newItem;

        // 1. Get the field input data
        var input = UICtrl.getinput();

        // We want data only when something input (Problem was when we enter or click the button, empty list are added into UI)
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. Add the item to the budget controller
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    
            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);
    
            // 4. Clear the fields
            UICtrl.clearFields();
    
            // 5. Calculate and update budget
            updateBudget();
        }


    };

    // public initializing function
    // This means our eventListeners are only going to be setup as soon as we call the init function
    // It is placed down there and outside the controller 
    // We create init function because we want to have a place, where we can put all the code that we want to be executed, at the beginning when our application starts
    return {
        init: function() {
            // console.log('Application has started.');
            setupEventListener();
        }
    };

})(budgetController, UIController);

// WIthout this, nothing is ever going to happen, because there will be no event listeners
controller.init();

