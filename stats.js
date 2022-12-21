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
    //renderTable1(events,pastEvents,table1);
    renderTable1(pastEvents,events,table1)
    renderTable2(upcomingEvents,table2);
    renderTable3(pastEvents,table3);
  })
  .catch(error=>console.log(error));

function filterAssistance (eventsPast) {
  let assistance= [...eventsPast] 
  let arrayAssistance= [] 
  assistance.forEach(propiedades => {
      let percentage= (((propiedades.assistance*100) / propiedades.capacity))
      if(percentage> 95) {
      return arrayAssistance.push (`${propiedades.name}; ${((percentage).toFixed(2))}%`)
      }
  })
  return (arrayAssistance) 
}

function filterMinerAssistance (eventsPast) {
  let minorAssistance= [...eventsPast]
  let arrayMinorAssistance= []
  minorAssistance.forEach(menor => {
      let percentage= (((menor.assistance*100) / menor.capacity))
      if(percentage < 70) {
      return arrayMinorAssistance.push (`${menor.name}; ${((percentage).toFixed(2))}%`) 
      }
  })
  return (arrayMinorAssistance)
}

function capacity (listaHome) {
  let capacityTotal= [...listaHome]
  capacityTotal.sort((event1,event2)=>event2.capacity-event1.capacity)
  return (capacityTotal) 
}

function renderTable1(data,events,container){
  let finalAssistance=  filterAssistance (data) 
  let finalMinerAssistance =filterMinerAssistance (data)
  let finalCapacity= capacity (events)
  
  container.innerHTML = `
      <tr>
          <td class= "style: text-center"> ${finalAssistance} </td> 
          <td class= "style: text-center"> ${finalMinerAssistance} </td>
          <td class= "style: text-center"> ${finalCapacity[0].name}</td> 
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
