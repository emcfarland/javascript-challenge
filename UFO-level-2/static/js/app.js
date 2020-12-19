// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select(".form-group");

var tbody = d3.select("#table-area").select("tbody");

button.on("click", filterSightings);
form.on("submit", filterSightings);


function filterSightings() {
    d3.event.preventDefault();

    var dateInputValue = d3.select("#datetime").property("value");
    var cityInputValue = d3.select("#city").property("value");
    var stateInputValue = d3.select("#state").property("value");
    var countryInputValue = d3.select("#country").property("value");
    var shapeInputValue = d3.select("#shape").property("value");

    var inputValues = [
        dateInputValue,
        cityInputValue,
        stateInputValue,
        countryInputValue,
        shapeInputValue
    ];

    var filterKeys = [
        "datetime",
        "city",
        "state",
        "country",
        "shape"
    ];



    var filteredData = tableData;
    
    for (i=0; i<inputValues.length; i++) {
        if (inputValues[i] !== "") {
            var partialFilter = filteredData.filter(sighting => inputValues[i] == sighting[filterKeys[i]]);
            console.log(partialFilter);
            filteredData = partialFilter;
        }
    };

    
    console.log(filteredData);
    // var filteredData = tableData;

    // inputValues.forEach(input => {
    //     Object.entries(input).forEach(([key, value]) => {

    //         if (value) {
    //             filteredData = filteredData.function(filter => filter[key] === value);
    //         }
    //     });
    // });

    // tbody.selectAll("tr").remove();
    // addTable(filteredData);

    // if (dateInputValue != "" || cityInputValue != "") {
    //     tbody.selectAll("tr").remove();
    //     var filteredData = tableData.filter(sighting => sighting.datetime === dateInputValue)
    //                                 .filter(sighting => sighting.city === cityInputValue.toLowerCase());
        
    //     addTable(filteredData);

    // } else {
    //     tbody.selectAll("tr").remove();
    //     addTable(tableData);
    // }
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