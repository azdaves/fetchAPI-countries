document.getElementById("getCountry").addEventListener("click", getCountry);

function getCountry() {
  fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
      let output = "<h2>Countries</h2>";
    data.forEach(function(all) {
        output += `
        <ul>
        <li>NAME: ${all.name} </li>
        </ul>
        `;
        
    });
    document.getElementById("output").innerHTML = output;
    });
}
