let table1=document.getElementById('table1');
let table2=document.getElementById('upcomingTable');
let table3=document.getElementById('tablePast')

fetch('https://amazing-events.onrender.com/api/events')
  .then(res=>res.json())
  .then(data=>{
    let events=data.events;
    let currentDate=data.currentDate;
    let upcomingEvents=events.filter(element=>currentDate<element.date);
    let pastEvents=events.filter(element=>element.date<currentDate);
    renderTable1(pastEvents,events,table1)
    renderTable2(upcomingEvents,table2);
    renderTable3(pastEvents,table3);
  })
  .catch(error=>console.log(error));

function assistance(pastEvents){
  let array=[];
  pastEvents.forEach((e)=>{
    array.push({name:e.name,assistance:(100*e.assistance/e.capacity).toFixed(2)});
  }) 
  array.sort((a,b)=>b.assistance-a.assistance)
  return array;
}

function capacity(events){
  return events.sort((a,b)=>b.capacity-a.capacity)

}

function renderTable1(pastEvents,events,container){
  let arrayAssistance=  assistance (pastEvents) 
  let arrayCapacity=capacity(events)
  container.innerHTML+=`
    <tr>
      <td>${arrayAssistance[0].name}</td>
      <td>${arrayAssistance[arrayAssistance.length-1].name}</td>
      <td>${arrayCapacity[0].name}</td>
    </tr>
    `

}

function renderTable2(data,container){
  
  data.forEach((element)=>{
    container.innerHTML+=`
    <tr>
      <td>${element.category}</td>
      <td>$${element.price*element.estimate}</td>
      <td>${(100*element.estimate/element.capacity).toFixed(2) }%</td>
    </tr>
    `
  });
}

function renderTable3(data,container){
  data.forEach((element)=>{
    container.innerHTML+=`
    <tr>
      <td>${element.category}</td>
      <td>$${element.price*element.assistance}</td>
      <td>${(100*element.assistance/element.capacity).toFixed(2) }%</td>
    </tr>
    `
  });
};
