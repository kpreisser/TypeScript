//// [thisInSuperCall2.ts]
class Base { 
    constructor(a: any) {}
}

class Foo extends Base {
    public x: number;
    constructor() {
        super(this); // error: "super" has to be called before "this" accessing
    }
}


class Foo2 extends Base {
    public x: number = 0;
    constructor() {
        super(this); // error
    }
}


//// [thisInSuperCall2.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base(a) {
    }
    return Base;
}());
var Foo = /** @class */ (function (_super) {
    __extends(Foo, _super);
    function Foo() {
        var _this = _super.call(this, _this) || this;
        return _this;
    }
    return Foo;
}(Base));
var Foo2 = /** @class */ (function (_super) {
    __extends(Foo2, _super);
    function Foo2() {
        var _this = _super.call(this, _this) || this;
        _this.x = 0;
        return _this;
    }
    return Foo2;
}(Base));
