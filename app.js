var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var personCategory;
(function (personCategory) {
    personCategory[personCategory["Infant"] = 0] = "Infant";
    personCategory[personCategory["Child"] = 1] = "Child";
    personCategory[personCategory["Adult"] = 2] = "Adult";
})(personCategory || (personCategory = {}));
var Person = /** @class */ (function () {
    function Person(dateofbirth) {
        this.DateOfBirth = dateofbirth;
    }
    Person.prototype.printDetails = function () {
        document.write(("Person:") + "<br>");
        document.write(("Date Of Birth: " + this.DateOfBirth.toDateString() + "\n        ") + "<br>");
        document.write(("category: " + personCategory[this.category] + "\n        ") + "<br>");
        document.write(("can sign:  " + this.canSignContract() + "\n        ") + "<br>");
    };
    return Person;
}());
var Infant = /** @class */ (function (_super) {
    __extends(Infant, _super);
    function Infant(dateofbirth) {
        var _this = _super.call(this, dateofbirth) || this;
        _this.category = personCategory.Infant;
        return _this;
    }
    Infant.prototype.canSignContract = function () {
        return false;
    };
    return Infant;
}(Person));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(dateofbirth) {
        var _this = _super.call(this, dateofbirth) || this;
        _this.category = personCategory.Child;
        return _this;
    }
    Child.prototype.canSignContract = function () {
        return false;
    };
    return Child;
}(Person));
var Adult = /** @class */ (function (_super) {
    __extends(Adult, _super);
    function Adult(dateofbirth) {
        var _this = _super.call(this, dateofbirth) || this;
        _this.category = personCategory.Adult;
        return _this;
    }
    Adult.prototype.canSignContract = function () {
        return true;
    };
    return Adult;
}(Person));
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.getPerson = function (dateofbirth) {
        var dateNow = new Date();
        var CurrentMonth = dateNow.getMonth() + 1;
        var CurrentDate = dateNow.getDate();
        var dattwoyears = new Date(dateNow.getFullYear() - 2, CurrentMonth, CurrentDate);
        var date_18year = new Date(dateNow.getFullYear() - 18, CurrentMonth, CurrentDate);
        if (dateofbirth >= dattwoyears)
            return new Infant(dateofbirth);
        if (dateofbirth >= date_18year)
            return new Child(dateofbirth);
        return new Adult(dateofbirth);
    };
    return PersonFactory;
}());
var factory = new PersonFactory();
var first = factory.getPerson(new Date(2016, 0, 1));
first.printDetails();
var second = factory.getPerson(new Date(2001, 0, 1));
second.printDetails();
var third = factory.getPerson(new Date(1984, 12, 1));
third.printDetails();
