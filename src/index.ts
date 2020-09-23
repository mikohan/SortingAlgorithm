// import { NumberCollection } from './NumbersCollection';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';

// const numbersCollection = new NumberCollection([10, 3, -5, 0]);

// const sorter = new Sorter(numberCollection);

// console.log('Unsorted collection', numberCollection.data);
// sorter.sort();
// console.log('Sorted collection', numberCollection.data);

const charactersCollection = new CharactersCollection('some cool string');

const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
