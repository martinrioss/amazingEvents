import {renderCards,renderChecks,filter2,filter} from'./modules/functions.js'
let events=data.events;
let currentDate=data.currentDate;
events=events.filter(element=>currentDate<element.date);
let cardsContainer = document.getElementById("cards");
let checksContainer=document.getElementById('checkbox-container');
let search=document.getElementById('search')
renderCards(events,cardsContainer,true);
renderChecks(checksContainer,events);
let checks=document.querySelectorAll('.checkbox');
eventChecked(checks);
function eventChecked(selector){
  selector.forEach(element=> element.addEventListener('click',()=>  filter(events,cardsContainer)));
}
search.addEventListener('input',()=>filter2(events,cardsContainer));