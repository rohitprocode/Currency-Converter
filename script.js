console.log("Welcome to my Currency Converter");

//API URL
const populate = async (value, currency) => {
    let mystr = "";
    url = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_jkSlYVAKYJnT2NTwkFvqXbK8mVlWGBnRc9lWLAyb&base_currency=';
    let response = await fetch(url);
    let rJson = await response.json();

    //Display Output
    document.querySelector('.output').style.display = "block";

    //Iterate API data with 'for of loop'
    for (let key of Object.keys(rJson["data"])) {
        mystr += `
        <tr>
        <td>${key}</td>
        <td>${rJson["data"][key]["code"]}</td>
        <td>${(rJson["data"][key]["value"])*value}</td>
        </tr>
        `
    }
    //Display Output in TableBody
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = mystr;
}
// Submit Button Event Listener
let button = document.querySelector('.btn');
button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Button is Clicked");

    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.getElementById('selectCurrency').value;
    //Callback function
    populate(value, currency);
})

