console.log("Welcome to my Currency Converter");

//API URL
url = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_jkSlYVAKYJnT2NTwkFvqXbK8mVlWGBnRc9lWLAyb';

// Submit Button Event Listener
let button =  document.querySelector('.btn');
button.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("Button is Clicked");
})

//Display Output in TableBody
const tableBody = document.querySelector('tbody');
tableBody.innerHTML = `
<tr>
<td>Data1</td>
<td>Data2</td>
<td>Data2</td>
</tr>
`