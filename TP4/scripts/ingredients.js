document.addEventListener("DOMContentLoaded",LoadIngredients)

const ingredients = [
    "1 morrón rojo",
    "1 morrón verde",
    "2 cebollas",
    "Arroz doble carolina 200 gr",
    "1 cda. pimentón dulce",
    "2 ajos",
    "Azafrán o condimento para arroz.",
    "500 grs. de calamar",
    "200 grs. de mejillones",
    "400 grs. de langostinos",
    "200 grs. de almejas",
    "200 grs. de berberechos",
    "700 ml. de caldo de verduras",
]

function LoadIngredients(){
    ingredients.forEach(ingredient=>AddIngredient(ingredient))
}

function AddIngredient(ingredient){
    const ingredientsElement = document.getElementById("ingredients-root")
    const ingredientListElement = document.createElement("li")

    ingredientListElement.innerHTML = ingredient

    ingredientsElement.appendChild(ingredientListElement)
}

