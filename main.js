//~~~~~~~~~~~~~~Practice for Synchoronus and Asynchoronus~~~~~~~~~~~~~~~~~
//~~~~~~~~~~Synchoronus~~~~~~~~~~~~
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log("Hello Everyone");
console.log("welcome to my Github Account!");
var object = {
    name: "Niba farooq",
    age: 18,
    cource: "Artifical Intelligence web 3.0"
};
console.log(object);
console.log("Good Byee");
//~~~~~~~~~~~~~~~~~~~~~~~~Asynchoronus~~~~~~~~~~~~~~~~~~~~
var a = 10;
var b = 8;
console.log(a * b);
//Loop
for (var n = 1; n <= 1; n++) {
    console.log("Hello Niba khan");
}
;
//~~~~~~~~~~~~~~~~~~~~~~~~~~SettimeOut~~~~~~~~~~~~~~~~~~~~~~~~~
setTimeout(function () {
    console.log("Hope you are Doing Well!");
}, 2000);
//~~~~~~~~~~~~~~~~~~~~~~~CallBack Function~~~~~~~~~~~~~~~~~~~~~~~~
function teacher(teacherName1, teacherName2) {
    console.log("My teacher name is sir ".concat(teacherName1, " and Miss ").concat(teacherName2));
}
;
var GIAIC = function (callback, thursdaySlot, Name) {
    callback(thursdaySlot, Name);
};
GIAIC(teacher, "Hamza Alvi", "Manaheel jamil");
//~~~~~~~~~~~~~~~~~~~~~~~~Promises~~~~~~~~~~~~~~~~~~~~~
var myPromise = new Promise(function (resolve, reject) {
    var myMarks = 90;
    if (myMarks >= 80) {
        resolve("A");
    }
    else {
        reject("fail");
    }
});
myPromise.then(function (result) {
    console.log(result);
});
var myPromise1 = new Promise(function (resolve, reject) {
    console.log("promise pending");
    setTimeout(function () {
        console.log("Problem resolve");
        var obj = {
            name: "niba khan",
            age: 18
        };
        console.log(obj.name);
        var data = ["niba", "Maha", "kinza"];
        if (data) {
            console.log("promises resolve");
            return resolve(data);
        }
        else {
            console.log("promise reject");
            return reject(new Error("data fetch"));
        }
    }, 3000);
});
myPromise1
    .then(function (res) { console.log(res); })
    .catch(function (rej) { console.log(rej); });
//~~~~~~~~~~~~~~~~~~~~~~~~~~Async Fnction/Await~~~~~~~~~~~~~~~~~~~~~~~~~~
var myData = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var rollNum = 45465;
        resolve(rollNum);
    }, 2000);
});
var bioData = function () {
    return new Promise(function (resolve, reject) {
        var obj = {
            name: "niba khan",
            age: 18,
            gender: "female"
        };
        resolve("My name is ".concat(obj.name, " and my age is ").concat(obj.age));
    });
};
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var rollNumber, bioDatas, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, myData];
                case 1:
                    rollNumber = _a.sent();
                    console.log(rollNumber);
                    return [4 /*yield*/, bioData()];
                case 2:
                    bioDatas = _a.sent();
                    console.log(bioDatas);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("Error Occured", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getData();
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~CallBack Hell~~~~~~~~~~~~~~~~~~~~~~~
function Task() {
    setTimeout(function () {
        console.log("Task 1 Completed");
        setTimeout(function () {
            for (var n = 1; n <= 1; n++) {
                console.log("Task 2 completed");
            }
            setTimeout(function () {
                var a = "Task 3";
                if (a == "Task 3") {
                    console.log("Task 3 completed");
                }
                else {
                    console.log("Task 3 Failed");
                }
                setTimeout(function () {
                    console.log("Finally Task Completed");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}
;
Task();
