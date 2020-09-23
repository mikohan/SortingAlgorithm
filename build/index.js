"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
// import { NumberCollection } from './NumbersCollection'
var Sorter_1 = require("./Sorter");
var numberCollection = new NumbersCollection_1.NumberCollection([10, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(numberCollection);
console.log('Unsorted collection', numberCollection.data);
sorter.sort();
console.log('Sorted collection', numberCollection.data);
