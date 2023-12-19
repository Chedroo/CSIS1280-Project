fetch("./js/mockData.json")
.then(function(response){
    return response.json();
})
.then(function(datas){

    let placeholder = document.querySelector("#gridContainer");
    let out = "";
    for(let data of datas){
        out += `
            <a href="">
                <div class="gridCards" style="background-image: url('${data.images[0]}');">
                    
                    <div class="gridCardsFooter">
                        <h1>${data.name}</h1>
                        <h2>${data.price}</h2>
                    </div>
                </div>
            </a>
        `;
    }

    placeholder.innerHTML = out;
})