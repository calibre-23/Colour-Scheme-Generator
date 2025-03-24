fetch("https://www.thecolorapi.com/id?hex=0047AB")
    .then(res=> res.json())
    .then(data=> console.log(data))