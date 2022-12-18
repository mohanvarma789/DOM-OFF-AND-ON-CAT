function SwitchOff() {
  document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
  document.getElementById("switched").textContent = "SwitchedOff";
  document.getElementById("switchof").style.background="grey";
  document.getElementById("switchon").style.background="green";
}
function SwitchOn(){
  document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
  document.getElementById("switched").textContent = "SwitchedOn";
  document.getElementById("switchof").style.background="red";
  document.getElementById("switchon").style.background="grey";
}
