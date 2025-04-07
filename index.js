function getColors(e){
    e.preventDefault();
    let color=document.getElementById("color").value.substring(1);
    let mode=document.getElementById("mode").value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    .then((response) => response.json())
    .then((data) => {
        let colorDivs = document.querySelectorAll(".color-disp");
        let colorHexes = document.querySelectorAll(".color-hex");
        data.colors.forEach((color,index ) => {
            if (colorDivs[index]) {
                colorDivs[index].style.backgroundColor = color.hex.value;
                colorHexes[index].innerText = color.hex.value;
            }})
})}

document.getElementById("btn").addEventListener("click", getColors);


function copyToClipboard(event) {
    let colorHex=event.target;
    let colorValue=colorHex.innerText;
    navigator.clipboard.writeText(colorValue)
    .then(() => {
        alert(`Copied ${colorValue} to clipboard`);
    })
    .catch(err => {
        console.error('Error copying text: ', err);
    }); 
}
  