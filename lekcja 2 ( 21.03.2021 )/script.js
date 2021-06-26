var Buttons = /** @class */ (function () {
    function Buttons() {
    }
    Buttons.prototype.buttonCreator = function () {
        var root = document.getElementById("root");
        var button = document.createElement("button");
        root.appendChild(button);
    };
    return Buttons;
}());
var button = new Buttons();
