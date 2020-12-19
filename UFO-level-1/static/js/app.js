// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select("form");

var tbody = d3.select("#table-area").select("tbody");

button.on("click", filterSightings);
form.on("submit", filterSightings);


function filterSightings() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    if (inputValue != "") {
        tbody.selectAll("tr").remove();
        var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
        
        addTable(filteredData);

    } else {
        tbody.selectAll("tr").remove();
        addTable(tableData);
    }
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

addTable(tableData);