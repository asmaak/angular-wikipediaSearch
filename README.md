ng new wsearch --routing
ng g c searchBar
ng g c pageList
$ ng g s wikipedia
== api https://www.mediawiki.org/wiki/API:Main_page

==GET request
api.php?action=query&list=search&srsearch=Nelson%20Mandela&utf8=&format=json 
https://en.wikipedia.org/w/api.php?
action=query&
format=json&
list=search&
utf8=1&
srsearch=space
at app.module.ts
import {HttpClientModule} from '@angular/common/http';
-- to know rxjs write it at https://out.stegrider.now.sh/
const {fromEvent} = Rx;
const {map} = RxOperators;
const input= document.createElement('input');
const container =document.querySelector('.container');
container.appendChild(input);
const observable =fromEvent(input,'input')
.pipe(
map(event =>event.target.value),
map(value =>parseInt(value)),
map(value =>{
if (isNaN(value)){
throw new Error ('enter a  number')
}
  return value;
})
  
)
observable.subscribe({
next(value){
  console.log(`your value is ${value}`);
},
error(err){
  console.error('bad thing is happien',err.message)
}
})
//this specific tool
observable;

<!-- go to Rxjs.dev decumentation -->
<!-- second exp -->
const { Observable }=Rx;
const observable=new Observable((subscribe)=>{
 subscribe.next(1);
 subscribe.complete();
 subscribe.error(new Error('there is an error'));


});
 observable.subscribe({
 next(value){
 console.log('the value is ',value);
 },
 complete(){
    console.log('the value is complete ');
 },
 error(err){
   console.log('bad error',err.message)
 }


});
observable;
<!-- build -->
npm install -g angular-cli-ghpages 
 ng build --prod --base-href https://asmaak.github.io/angular-card/ 
 ngh --dir dist/card

