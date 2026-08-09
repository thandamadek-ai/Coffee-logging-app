#json database - javascript
{
"prep_method"; "Aeropress","Drip coffee","V60"
"bean_weight(g)"; "15","10","20",
"water_amount(g)"; "200","120","180"
}
// JSON text
const text = '{
"prep_method"; "Aeropress","Drip coffee","V60"
"bean_weight(g)"; 15,10,20,
"water_amount(g)"; 200,120,180'}

const person = JSON.parse(text);

#convert javascript to JSON
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

# javascript
const person = {
prep_method: "Aeropress","Drip coffee","V60"
bean_weight(g): "15","10","20",
water_amount(g): "200","120","180"
};

const text = JSON.stringify(person);

document.getElementById("demo").textContent = text;
</script>

document.getElementById("demo").innerHTML = text;

</body>
</html>

# fetch from json json api
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript JSON</h1>
<h2>The response.json() Method</h2>
<p>The response.json() method parses the JSON text and returns a JavaScript value.</p>

<p id="demo"></p>

<script>
async function loadJSON() {
  const response = await fetch("Brews.json");
  const Brews = await response.json();
  myDisplayer(Brews.prep_method);
  myDisplayer(Brews.bean_weight(g));
  myDisplayer(Brews.water_amount(g));
\}

loadJSON();

// Function to display any text
function myDisplayer(text) {
  document.getElementById("demo").innerHTML += text + "<br>";
\}

# error checking request - json api
async function loadJSON(file) {
  const response = await fetch(file);
  myDisplayer(response.ok);
  myDisplayer(response.status);

  const customer = await response.json();
  myDisplayer(Brews.name);
\}

loadJSON("Brews.json");

# send new data to the database - json api
const person = {
  prep_method: "Aeropress","Drip coffee","V60",
  bean_weight(g): 15,10,20
\};

const response = await fetch("/api/person", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  \},
  body: JSON.stringify(person)
\});

# add css to filter elments
# add javascript to button

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  \}
\}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    \}
  \}
\}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    \}
  \}
  element.className = arr1.join(" ");
\}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  \});
\}


