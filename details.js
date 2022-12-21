
let container=document.getElementById('cards');



fetch('https://amazing-events.onrender.com/api/events')
  .then(res=>res.json())
  .then(data=>{
    let events=data.events;
    let id= new URLSearchParams(location.search).get('id');
    console.log(id)
    let card= events.find(element=>element._id===id);
    cardDetail(card)
  })
  .catch(error=>console.log(error))


function cardDetail(card){
   container.innerHTML=`
<div class="card  mb-3 details" style="max-width: 540px;">
<div class="row g-0 ">
  <div class="col-md-4">
    <img src="${card.image}" class="img-fluid rounded-start" style="height: 100%;" alt="${card.category}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text">${card.description}</p>
      <p class="card-text">Place: ${card.place}</p>
      <p class="card-text">Price: $${card.price}</p>
    </div>
  </div>
</div>
</div>
`
}
