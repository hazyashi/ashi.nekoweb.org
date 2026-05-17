
 `use strict`
var datetime = new Date().toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles" });
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; // represent on html page
