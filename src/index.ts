import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection('xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorter = new Sorter(linkedList);
// sorter.sort();
linkedList.sort();
linkedList.print();
