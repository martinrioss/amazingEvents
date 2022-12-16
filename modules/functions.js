export function renderCards(data,container){
    container.innerHTML='';
    if(data.length<=0){
      container.innerHTML+=`
      <h1 class='text-center'>NO SE ENCONTRO NINGUN EVENTO<h1>
      `
    }else{
      data.forEach((element)=>{
        container.innerHTML += `
        <div class="card m-2" style="width: 18rem;">
          <img src="${element.image}" class="card-img-top"  alt="image ${element.id}">
          <div class="card-body">
              <h5 class="card-title text-center">${element.name}</h5>
              <p class="card-text">${element.description}</p>
              <a href="./details.html?id=${element._id}" class="btn btn-primary">More Info</a>
          </div>
        </div>
        `
      });
    }
};

export function renderChecks(container,array){
    let filterCategorys=(array.map((element)=>element.category));
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

export function filter2(array,container){
    let checked=[...document.querySelectorAll('.checkbox:checked')];
    checked=checked.map(element=>element.value);
    let filterSearch=array.filter((element)=>element.name.toLowerCase().includes(search.value.toLowerCase()));
    let filterChecks=filterSearch.filter(element=>checked.includes(element.category)|| checked.length===0);
    renderCards(filterChecks,container)
}
export function filter(array,container){
    let checked=[...document.querySelectorAll('.checkbox:checked')];
    checked=checked.map(element=>element.value);
    let filterChecks=array.filter(element=>checked.includes(element.category)|| checked.length===0);
    let filterSearch=filterChecks.filter((element)=>element.name.toLowerCase().includes(search.value.toLowerCase()));
    renderCards(filterSearch,container)
}
