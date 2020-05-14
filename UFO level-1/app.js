// Get references to the tbody element, input fields and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// create Event listener to the Buttons
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);

// To create Data Copy
var tableData = data;

// Build table with non-filtered data, rendertable is for static data
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // Get current location object and fields
    var location = tableData[i];
    console.log(location)
    var fields = Object.keys(location);
    // Create new row in tbody, set index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = location[field];
    } 
  }
}

// Build search table for filtered data
function handleSearchButtonClick() {
  var filterDate = $dateInput.value;
  
  // date filter
  if (filterDate != "") {
    tableData = data.filter(function (location) {
      var locationDate = location.datetime;
      return locationDate === filterDate;
    });
  }
  else { tableData };

  renderTable();
}

// reset data
function handleResetButtonClick(){
  renderTable();
}

// Render the table for the first time on page load
renderTable();