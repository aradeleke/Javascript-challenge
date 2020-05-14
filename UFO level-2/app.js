 // References for the tbody element, input fields and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// create Event listener to the Buttons
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);

// To create data copy
var tableData = data;

// Build table with non-filtered data, rendertable is for static data
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // Get current data location object and fields
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
  var filterDate = $dateInput.value.trim();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();
  
  // date filter
  if (filterDate != "") {
    tableData = data.filter(function (date) {
      var locationDate = date.datetime;
      return locationDate === filterDate;
    });
  }
  else { tableData };

  //City filter 
  if (filterCity != "") {
    tableData = data.filter(function (city) {
      var locationCity = city.city;
      return locationCity === filterCity;
    });
  }
  else { tableData };


  //State filter
  if (filterState != "") {
    tableData = data.filter(function (state) {
      var locationState = state.state;
      return locationState === filterState;
    });
  }
  else { tableData };
  

  //Country filter
  if (filterCountry != "") {
    tableData = data.filter(function (country) {
      var locationCountry = country.country;
      return locationCountry === filterCountry;
    });
  }
  else { tableData };

  //Shape filter

  if (filterShape != "") {
    tableData = data.filter(function (shape) {
      var locationShape = shape.shape;
      return locationShape === filterShape;
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