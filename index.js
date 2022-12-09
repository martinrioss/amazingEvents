let events=data.events;
let div = document.getElementById("cards");
div.innerHTML='';
function cardsEvents(data){
  for(let element of data){
    div.innerHTML += `
    <div class="card m-2" style="width: 18rem;">
    <img src="${element.image}" class="card-img-top"  alt="image ${element.id}">
    <div class="card-body">
        <h5 class="card-title text-center">${element.name}</h5>
        <p class="card-text">${element.description}</p>
        <a href="./pages/details.html" class="btn btn-primary">More Info</a>
    </div>
    </div>
    `
  };
};
cardsEvents(events);