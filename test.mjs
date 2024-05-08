import { sum } from './index.js'
 
try {
    console.log('Case 1 : From native - sum(40,2) = ', sum(40, 2));
} catch(e){
    console.log('caught');
    console.error(e);
}

try {
    console.log('Case 2: From native - sum(2,40) = ', sum(2, 40));
} catch(e){
    console.log('caught');
    console.error(e);
}