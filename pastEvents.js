import {renderCards,renderChecks,filter2,filter} from'./modules/functions.js'
let cardsContainer = document.getElementById("cards");
let checksContainer=document.getElementById('checkbox-container');
let search=document.getElementById('search')
let events;


function eventChecked(selector){
  selector.forEach(element=> element.addEventListener('click',()=>  filter(events,cardsContainer)));
}
search.addEventListener('input',()=>filter2(events,cardsContainer));


fetch('https://amazing-events.onrender.com/api/events')
  .then(res=>res.json())
  .then(data=>{
    events=data.events
    let currentDate=data.currentDate;
    events=events.filter(element=>element.date<currentDate);
    renderCards(events,cardsContainer);
    renderChecks(checksContainer,events);
    let checks=document.querySelectorAll('.checkbox');
    eventChecked(checks);
  })
  .catch(error=>console.log(error));