document.addEventListener("DOMContentLoaded",LoadRecipe)

const steps = [
    "Lavar muy bien todos los frutos de mar y reservarlos. De ser necesario <strong>cepillar las almejas</strong>. Quitarle la piel a los calamares y cortarlo en rebanadas.",
    "En aceite de oliva sofreír los langostinos por <i>5 minutos</i> y reservar.",
    "Luego sofreír los calamares por <i>5 minutos</i> más. Ahora agregamos la cebolla, el ajo, pimiento y tomate picados en cuadritos pequeños, agregar sal y cocinar por <i>8 minutos</i> a fuego bajo",
    "Tras el sofrito, añadir el arroz y distribuir homogéneamente por la paellera. <b>En este momento echamos el azafrán o condimento para arroz junto con el caldo.</b>",
    "Dejamos que se cocine <b>sin remover</b> durante <i>25 o 30 minutos</i>. ",
    "Pasados <i>10 minutos</i> agregamos una cucharada de pimentón dulce, si le falta agregamos más agua.",
    "Agregar las almejas y cocinar por <i>5 minutos</i> para que se abran. Las que queden cerradas hay que desecharlas! Por último agregar los mejillones y los berberechos. Dejar cocinar <i>10 minutos</i> más a fuego mínimo.",
    "Agregar los langostinos y cocinar <i>5 minutos</i> más.",
    "Dejaremos reposar la paella unos minutos tapada con un gran paño antes de servirla. ",
    "Preparen la mesa y disfruten esta paella de mariscos que <q>es una delicia</q>.",
]

function LoadRecipe(){
    steps.forEach((step,number)=>AddStep(number+1,step))
}

function AddStep(stepNumber,ingredient){
    const recipeElement = document.getElementById("recipe-root")
    const stepElement = document.createElement("li")

    stepElement.classList.add("recipe__step")
    stepElement.id = `step_${stepNumber}`
    stepElement.innerHTML = ingredient

    recipeElement.appendChild(stepElement)
}

