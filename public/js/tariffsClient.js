
const tariffsFormAdd = document.querySelector(".formTarAdd");
const mainDiv = document.querySelector(".mainDivTar");
const tarForm = document.querySelector(".formTariffs");
const deleteButton = document.querySelectorAll(".deletebutton");


mainDiv?.addEventListener('click', async (event) =>{

if(event.target.className === 'btn btn-primary'){
    //console.log(event.target.id)
    const inputAdult = document.querySelector(`#adults${event.target.id}`)
    const inputKids = document.querySelector(`#kids${event.target.id}`)
    const inputElders = document.querySelector(`#elders${event.target.id}`)
    
    const formData = {id: event.target.id, adult : inputAdult.value , kid : inputKids.value, elder: inputElders.value}

    try{
    const response = await fetch('/tariffs', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            formData
        })   
    })
    console.log(response.status)
    if(response.status === 200){
    window.location.href = '/tariffs';
    }} catch (error){
      console.log(error)
    }
  }
})

mainDiv?.addEventListener('click', async (event) =>{
    if(event.target.className === "btn btn-danger deletebutton"){
    event.preventDefault();
    console.log('============================', event.target)
    const deleteid = { id : event.target.id}
    console.log(deleteid)

        const response = await fetch('/tariffs', {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                deleteid
            })
        })
        console.log('test')
        if(response.status === 200){
            const deletedElement =  document.getElementById(event.target.id)
            console.log('Parent node=>', deletedElement)
            mainDiv.removeChild(deletedElement)
        }
    }})

tariffsFormAdd?.addEventListener('click', async (event) =>{
    if(event.target.tagName === 'BUTTON'){
   const newTariff = document.querySelector("#tariffnew").value;
   const newAdultsPrice = document.querySelector("#adultsnew").value;
   const newKidsPrice = document.querySelector("#kidsnew").value;
   const newEldersPrice = document.querySelector("#eldersnew").value;

   console.log(newTariff, newAdultsPrice, newKidsPrice, newEldersPrice)
   
   const formData = {price_name: newTariff, option1 : newAdultsPrice , option2 : newKidsPrice, option3: newEldersPrice}

   console.log(formData)
    try{
   const response = await fetch('/tariffs', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        formData
    })
   })
    if(response.status === 200){
    window.location.href = '/tariffs';
    }
    if(response.status === 500){
        alert('Создание нового тарифа невозможно!')
    }
    } catch (error){
        console.log(error)
    }
}})

