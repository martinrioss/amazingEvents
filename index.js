let events=data.events;
let cardsContainer = document.getElementById("cards");
let checksContainer=document.getElementById('checkbox-container');

cardsEvents(events,cardsContainer);
renderChecks(checksContainer);
let checks=document.querySelectorAll('.checkbox');
eventChecked(checks);

function eventChecked(selector){
  selector.forEach(element=> element.addEventListener('click',(e)=> filterChecks(e,events,cardsContainer)))
}


function filterChecks(event,data,container){
  let checked=document.querySelectorAll('.checkbox:checked');

  checked.forEach((element)=>{
    let filter=[]
    if(event.target.checked){
      filter= data.filter((element)=> element.category===event.target.value)
      return cardsEvents(filter,container)
    }else{
      return cardsEvents(data,container)
    }
  })

  
  if(event.target.checked){
    filter= data.filter((element)=> element.category===event.target.value)
    cardsEvents(filter,container)
  }else{
    cardsEvents(data,container)
  }
}

function cardsEvents(data,container){
  cardsContainer.innerHTML='';
  data.forEach((element)=>{
    container.innerHTML += `
    <div class="card m-2" style="width: 18rem;">
      <img src="${element.image}" class="card-img-top"  alt="image ${element.id}">
      <div class="card-body">
          <h5 class="card-title text-center">${element.name}</h5>
          <p class="card-text">${element.description}</p>
          <a href="./pages/details.html" class="btn btn-primary">More Info</a>
      </div>
    </div>
    `
  });
};

function renderChecks(container){
  let filterCategorys=(events.map((element)=>element.category));
  let categorys=[... new Set(filterCategorys)];
  container.innerHTML='';
  categorys.forEach((element)=>{
    container.innerHTML+=`
      <label>
        <input type="checkbox" name="Category" value="${element}" id="categori1" class="me-2 checkbox" />${element}
      </label>
    `
  });
};








