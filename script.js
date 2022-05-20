const BASE_URL = "https://ptf-web-dizajn-2022.azurewebsites.net/"

let foods = [];

fetch(`${BASE_URL}/api/Food`)
    .then(res => {
        if (res.ok) {console.log("GET request successful")}
        else { console.log("GET request unsuccessful")}
        return res
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        renderFoods(data);
    })

const renderFoods = (foods) => {
    const foodsRow = documennt.getElementById('foods-row');

    let resultFoodsHtml = '';

    foods.forEach(food => {
        resultFoodsHtml += `     
        <div class="card mx-2 my-2" style="width: 18rem;">
        <img src="${food.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${food.name}</h5>
            <p class="card-text">${food.price}KM</p>
            <button type="button" onclick="fillEditData(${food.id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
        </div>
    </div>
    `;
    });

    foodsRow.innerHTML = resultFoodsHtml;
}

const fillEditData = (foodId) => {
    console.log(foodId);
}