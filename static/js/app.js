//from data.js
var tableData = data;

var table = d3.select("#ufo-table")
var tbody = d3.select("tbody");

var tbodyh = document.querySelector("tbody")

// grab references to the date input element
var text = d3.select("#datetime");

// Select the submit button
var submitButton = d3.select("#filter-btn");


// YOUR CODE HERE!


//adding event listener to the filter
submitButton.on("click", filterOnTableButton);

function renderTable(x){
  
    tbodyh.innerHTML = "";
    
    console.log("render is happening")  
    var tbody = d3.select("tbody");  
    x.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

}



renderTable(tableData)
//

function filterOnTableButton() {

  console.log("render filter is happening")
    
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

   //Get the value property of the input element
  var filterDate = inputElement.property("value");
if (text=""){
    renderTable(tableData)
}
else
{

var filteredData = tableData.filter(x => x.datetime == filterDate);
console.log(filterDate);
console.log(filteredData);
renderTable(filteredData)
}};

