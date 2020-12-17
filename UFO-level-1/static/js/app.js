// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select("form");

var tbody = d3.select("#table-area").select("tbody");

addTable(tableData);


function addTable(sightings) {
    sightings.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
