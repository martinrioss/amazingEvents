let events=data.events;
let cardsContainer = document.getElementById("cards");
let checksContainer=document.getElementById('checkbox-container');
let search=document.getElementById('search')
cardsEvents(events,cardsContainer);
renderChecks(checksContainer);
let checks=document.querySelectorAll('.checkbox');
eventChecked(checks);

function cardsEvents(data,container){
  container.innerHTML='';
  data.forEach((element)=>{
    container.innerHTML += `
    <div class="card m-2" style="width: 18rem;">
      <img src="${element.image}" class="card-img-top"  alt="image ${element.id}">
      <div class="card-body">
          <h5 class="card-title text-center">${element.name}</h5>
          <p class="card-text">${element.description}</p>
          <a href="./pages/details.html?id=${element._id}" class="btn btn-primary">More Info</a>
      </div>
    </div>
    `
  });
};

function renderChecks(container){
  let filterCategorys=(events.map((element)=>element.category));
  let categorys=[... new Set(filterCategorys)];
 // container.innerHTML='';
  categorys.forEach((element)=>{
    container.innerHTML+=`
      <label>
        <input type="checkbox" name="Category" value="${element}" id="categori1" class="me-2 checkbox" />${element}
      </label>
    `
  });
};

function eventChecked(selector){
  selector.forEach(element=> element.addEventListener('click',(e)=>  filter()));
}

function filterChecks(data,container){
  let checked=document.querySelectorAll('.checkbox:checked');
  let filter=[]
  checked.forEach((element)=>{
      let aux=data.filter((index)=> index.category===element.value);
      filter= filter.concat(aux);
  })
  if(filter.length===0){
    return cardsEvents(data,container);
  }else{
    return cardsEvents(filter,container);
  }
};

function filterSearch(array,value){
  let filter= array.filter((element)=>element.name.toLowerCase().includes(value.toLowerCase()));
  return filter;
}

search.addEventListener('input',(e)=>filter())

function filter(){
  let checked=[...document.querySelectorAll('.checkbox:checked')];
  checked=checked.map(element=>element.value);
  let filterChecks=events.filter(element=>checked.includes(element.category));
  let filterSearch=filterChecks.filter((element)=>element.name.toLowerCase().includes(search.value.toLowerCase()));
  cardsEvents(filterSearch,checksContainer)
}







