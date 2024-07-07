import { subtractWithAssertion } from './index.js'
 
try {
    console.log('1-3 = ');
    console.log(subtractWithAssertion(1,3));
} catch(e){
    console.log('caught');
    console.error(e);
}
