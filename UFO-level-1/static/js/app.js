// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select("form");

var tbody = d3.select("#table-area").select("tbody");

addTable(tableData);

button.on("click", filterSightings);
form.on("submit", filterSightings);


function filterSightings() {
    d3.event.preventDefault();
    tbody.selectAll("tr").remove();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    addTable(filteredData);
}

function addTable(sightings) {
    sightings.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
