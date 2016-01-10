// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = ko.observable("Hiroaki");
    this.lastName = ko.observable("Imai");
    
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
    
    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
