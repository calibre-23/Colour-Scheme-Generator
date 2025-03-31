


function getColors() {
    fetch("https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic&count=6")      
     .then(response => response.json())
        .then(data => {
            const colors = data.colors.map(color => color.hex.value);
            const colorDivs = colors.map(color => `<div class="color" style="background-color: ${color}">${color}</div>`).join('');
            document.getElementById('colors').innerHTML = colorDivs;

}
