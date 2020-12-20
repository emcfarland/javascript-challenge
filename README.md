# javascript-challenge

This project takes a small dataset of UFO sightings and displays it in an HTML table using javascript. The user may then input criteria (date in UFO-level-1 and date, city, state, country, and/or shape in UFO-level-2) which limit the table to only sightings that satisfy those conditions. 

UFO-level-1 uses the filter() method, taking any sightings that match the user input date. UFO-level-2 uses a loop to check each input value. If the input value is not blank, the data is filtered on that input and the UFO data to check is overwritten in case of other filters. Level-1 has event handling for both button clicking and form submission, but Level-2 uses only button clicking.

To extend this project, the startsWith() and toLowerCase() methods were added to make the searchs more robust. Now, a state search of "C" will return all data from both co and ca.
