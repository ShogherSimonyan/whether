function getData(city) {

    return fetch(`https://api.weatherapi.com/v1/current.json?key=8273c6b2e3ab4546a3d101522231407&q=${city}&aqi=no`)
    .then(e => e.json())
    // .then(e => {
    //     console.log(e);
    // })
}
let nav = document.querySelector("nav")
let input=document.querySelector("input")
let button=document.querySelector("button")

button.addEventListener("click",async function () {
   let obj = await getData(input.value)
    tpel(obj)
})

function tpel(obj) {
    nav.innerHTML=""
    let divChild = document.createElement("nav")
        divChild.setAttribute("class", "child")

    let temp_c=document.createElement("h1")
    temp_c.innerHTML = obj.current.temp_c

    let icon=document.createElement("img")
    icon.src= obj.current.condition.icon
    
    
    let name=document.createElement("h2")
    name.innerHTML = obj.location.name

    let region=document.createElement("h3")
    region.innerHTML = obj.location.region

    let localtime=document.createElement("p")
    localtime.innerHTML = obj.location.localtime
    
    let text=document.createElement("span")
    text.innerHTML = obj.current.condition.text
    
    
    
    divChild.append(name, temp_c,icon,  region, localtime,text )
    nav.append(divChild)
    
}
