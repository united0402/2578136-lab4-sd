async function fetchData() {
    let country = document.getElementById("country").value
   
    let countryInfo = document.getElementById("country-info")
    let borders = document.getElementById("bordering-countries")
let hh = document.getElementById("btnn")
    try {
       
        const response = await fetch("https://restcountries.com/v3.1/name/"+country+"?fullText=tru")
       
        const data = await response.json()
        const element = data[0]
        const isEmpty1 = element.lenth===0
        const isEmpty = element.borders.lenth===0

            if(!isEmpty){
                console.log("https://restcountries.com/v3.1/alpha?codes="+element.borders.join(","))
                const response1 = await fetch("https://restcountries.com/v3.1/alpha?codes="+element.borders.join(","))
                const data1 = await response1.json()
                hh.innerHTML = `<h4>Bordering countries information </h4>`
               data1.forEach(element=> {

                    borders.innerHTML += `
                    
                    <h3>${element.altSpellings[1]}</h3>
                    <img src="${element.flags.png}" />
                    `
               });
            }
            else{
                borders.innerHTML = `<p id="error">No bordering countries</p>`
            }
            if (!isEmpty1) {
                countryInfo.innerHTML = `
                <h2>Country information </h2>
                <p><strong>Capital</strong>:${element.capital[0]}</p>
                <p><strong>Population</strong>:${element.population}</p>
                <p><strong>Region</strong>:${element.region}<p>
                <img src="${element.flags.png}" />
                `
            } else {
                countryInfo.innerHTML = `<p id="error">No countries</p>`
            }
           
           
        
    } catch (error) {
        
        if(error.message==="element is undefined"){
      countryInfo.innerHTML= `<p id="error">No countries found, enter a valid country name</p>`}
      else{
        countryInfo.innerHTML= `<p id="error">Invalid input</p>`
      }
    }
    
}