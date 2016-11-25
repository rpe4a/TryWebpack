import welcome from './welcome';
/*import {find} from 'lodash/collection';

let users = [
    {id: 1, name: 'Misha' },
    {id: 2, name: 'Vanya' },
    {id: 3, name: 'Serega' },
]

console.log(find(users, ['id', 2]));*/

welcome('about').then(() => {
    console.log("promise");
})