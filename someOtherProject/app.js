define("CalculatorMethods", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CalculatorMethods = /** @class */ (function () {
        function CalculatorMethods() {
        }
        CalculatorMethods.prototype.add = function () {
            var param = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                param[_i] = arguments[_i];
            }
            var sum = 0;
            for (var _a = 0, param_1 = param; _a < param_1.length; _a++) {
                var item = param_1[_a];
                sum += item;
            }
            return sum;
        };
        return CalculatorMethods;
    }());
    exports.CalculatorMethods = CalculatorMethods;
});
define("index", ["require", "exports", "CalculatorMethods"], function (require, exports, CalculatorMethods_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.calculator = new CalculatorMethods_1.CalculatorMethods();
        }
        return Calculator;
    }());
    exports.Calculator = Calculator;
});
