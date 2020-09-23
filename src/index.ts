import { NumberCollection } from './NumbersCollection';
// import { NumberCollection } from './NumbersCollection'
import { Sorter } from './Sorter';

const numberCollection = new NumberCollection([10, 3, -5, 0]);

const sorter = new Sorter(numberCollection);

console.log('Unsorted collection', numberCollection.data);
sorter.sort();
console.log('Sorted collection', numberCollection.data);
