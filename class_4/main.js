"use strict";
// logical operators
Object.defineProperty(exports, "__esModule", { value: true });
let stdName = "Ali";
let isSlot = "Tuesday";
let isAllowed = stdName === 'Asif' && isSlot === "Tuesday";
//                    true              true
console.log(isAllowed);
// and operators
let email = 'nazeer2743@gmail.com';
let pass = 'Asif88';
let aA = email === 'nazeer2743@gmail.com' && pass === 'nazeer2743@gmail.com';
//              true                              false                    
console.log(aA);
// or operator
let fvalue = "A";
let svalue = "B";
let iA = fvalue === "A" || svalue === "B";
console.log(iA);
//note operator sahi ko galat karna
console.log(!(5 < 4));
