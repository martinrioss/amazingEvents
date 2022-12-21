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
    
    renderTable(pastEvents,table1)
    renderTable2(upcomingEvents,table2);
    renderTable3(pastEvents,table3);
  })
  .catch(error=>console.log(error));


function assistance(dataPast){
  console.table(dataPast)
  let newarray=[]
  dataPast.forEach((e)=>{
    newarray.push({name:e.name,assistance:(100*e.assistance/e.capacity).toFixed(2)})
  })
  return newarray.sort((a,b)=>b.assistance-a.assistance)
  
}
function renderTable(data,container){
  let assistance=assistance(data)

}


// function renderTable1(data,past,container){

// let assistance=[...past]
// assistance.sort((event1,event2)=>event1.assistance-event2.assistance);
// let arr=assistance.map((element)=>[element.name,element.assistance])
// console.log(arr)
// let capacity=[...data]
// capacity.sort((event1,event2)=>event2.capacity-event1.capacity)

// // container.innerHTML=`
// //   <tr>
// //     <td>${assistance[assistance.length-1].name}</td>
// //     <td>${assistance[0].name}</td>
// //     <td>${capacity[0].name}</td>
// //   </tr>
// //   `
// }
// function renderPercentage (listaHome, eventsPast,containerHome) {
//   let assistance= [...eventsPast]
//   let arrayAssistance= [] 
//   console.log(arrayAssistance)
//   assistance.forEach(propiedades => {
//       let percentage= (((propiedades.assistance100) / propiedades.capacity))
//       if(percentage> 95) {
//       return arrayAssistance.push (`${propiedades.name}, ${((percentage).toFixed(2))}%`)
//       }
//   })
//   console.log(arrayAssistance) 


//   let minorAssistance= [...eventsPast]
//   let arrayMinorAssistance= []
//   minorAssistance.forEach(menor => {
//       let percentage= (((menor.assistance100) / menor.capacity))
//       if(percentage < 70) {
//       return arrayMinorAssistance.push (`${propiedades.name}, ${((percentage).toFixed(2))}%`)
//   }})
//   console.log(arrayMinorAssistance) 


//   let capacityTotal= [...listaHome]
//   capacityTotal.sort((event1,event2)=>event2.capacity-event1.capacity)
//   console.table(capacityTotal)

//   containerHome.innerHTML = `
//       <tr>
//           <td class= "style: text-center"> ${arrayAssistance} </td> 
//           <td class= "style: text-center"> ${arrayMinorAssistance} </td>
//           <td class= "style: text-center"> ${capacityTotal[0].name},  ${capacityTotal[0].capacity }</td> 
//       </tr>
  
//   `
// }


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
