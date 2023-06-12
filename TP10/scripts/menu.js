document.addEventListener("DOMContentLoaded",CargarMenu)

const menu = [
    {
        "seccion": "carnes",
        "platos": [
            {
                "nombre": "Parrillada Mixta",
            "descripcion": "Selección de carnes a la parrilla que incluye entraña, chorizo, morcilla y costillas de cerdo",
            "precio": 2800
            },
          {
            "nombre": "Bife de Chorizo",
            "descripcion": "Bife de chorizo a la parrilla con chimichurri, acompañado de papas fritas",
            "precio": 2500
          },
          {
            "nombre": "Milanesa Napolitana",
            "descripcion": "Milanesa de ternera cubierta con salsa de tomate, jamón, queso y orégano, con papas fritas",
            "precio": 2200
          },
          {
            "nombre": "Lomo al Champignon",
            "descripcion": "Lomo de ternera con salsa de champiñones, acompañado de puré de papas",
            "precio": 2800
          },
          {
            "nombre": "Costillas BBQ",
            "descripcion": "Costillas de cerdo glaseadas con salsa barbacoa, servidas con ensalada mixta",
            "precio": 2400
          },
          {
            "nombre": "Pollo a la Parrilla",
            "descripcion": "Pechuga de pollo a la parrilla con especias, acompañada de arroz y vegetales salteados",
            "precio": 2100
          },
          {
            "nombre": "Lomo a la Pimienta",
            "descripcion": "Lomo de ternera con salsa de pimienta, servido con papas gratinadas",
            "precio": 2600
          },
          {
            "nombre": "Churrasco",
            "descripcion": "Churrasco de res con chimichurri, papas fritas y ensalada",
            "precio": 2300
          },
        ]
    },
    {
        "seccion": "pastas",
        "platos": [
          {
            "nombre": "Spaghetti Bolognese",
            "descripcion": "Spaghetti servido con salsa bolognesa, carne molida, tomate y especias",
            "precio": 1500
          },
          {
            "nombre": "Fettuccine Alfredo",
            "descripcion": "Fettuccine con salsa Alfredo, queso parmesano y mantequilla",
            "precio": 1600
          },
          {
            "nombre": "Lasagna de Carne",
            "descripcion": "Capas de pasta intercaladas con carne molida, salsa de tomate y queso",
            "precio": 1800
          },
          {
            "nombre": "Raviolis de Espinaca y Ricota",
            "descripcion": "Raviolis rellenos de espinaca y ricota, servidos con salsa de tomate",
            "precio": 1700
          },
          {
            "nombre": "Penne con Salmón",
            "descripcion": "Penne con salsa cremosa de salmón, eneldo y parmesano",
            "precio": 1900
          },
          {
            "nombre": "Gnocchi de Papa",
            "descripcion": "Gnocchi casero de papa servido con salsa a elección",
            "precio": 1600
          },
          {
            "nombre": "Tortellini con Pesto",
            "descripcion": "Tortellini rellenos de queso con salsa de pesto y nueces",
            "precio": 1800
          },
          {
            "nombre": "Tagliatelle con Salsa de Champiñones",
            "descripcion": "Tagliatelle con salsa cremosa de champiñones y hierbas",
            "precio": 1700
          }
        ]
    },
    {
        "seccion": "pizzas",
        "platos": [
          {
            "nombre": "Muzzarella",
            "descripcion": "Salsa de tomate, mozzarella y aceitunas",
            "precio": 2500
          },
          {
            "nombre": "Albhaca",
            "descripcion": "Salsa de tomate, mozzarella, albahaca fresca y aceite de oliva",
            "precio": 2000
          },
          {
            "nombre": "Calabresa",
            "descripcion": "Salsa de tomate, mozzarella y rodajas de longaniza",
            "precio": 2200
          },
          {
            "nombre": "Ananá",
            "descripcion": "Salsa de tomate, mozzarella, jamón y ananá",
            "precio": 2300
          },
          {
            "nombre": "Cuatro Quesos",
            "descripcion": "Salsa de tomate, mozzarella, queso azul, queso de cabra y queso parmesano",
            "precio": 2400
          },
          {
            "nombre": "Vegetariana",
            "descripcion": "Salsa de tomate, mozzarella, champiñones, pimientos, cebolla y aceitunas",
            "precio": 2200
          },
          {
            "nombre": "Barbacoa",
            "descripcion": "Salsa barbacoa, mozzarella, pollo, cebolla y cilantro",
            "precio": 2400
          },
          {
            "nombre": "Mediterránea",
            "descripcion": "Salsa de tomate, mozzarella, aceitunas, tomate seco, espinacas y queso dambo",
            "precio": 2300
          },
        ]
      },
      {
        "seccion": "hamburguesas",
        "platos": [
          {
            "nombre": "Hamburguesa Clásica",
            "descripcion": "Carne de res, lechuga, tomate, cebolla, queso cheddar y salsa especial",
            "precio": 2000
          },
          {
            "nombre": "Cheeseburger",
            "descripcion": "Carne de res, queso cheddar, lechuga, tomate y cebolla",
            "precio": 2200
          },
          {
            "nombre": "Hamburguesa BBQ",
            "descripcion": "Carne de res, salsa barbacoa, queso cheddar, cebolla y lechuga",
            "precio": 2300
          },
          {
            "nombre": "Hamburguesa Ranchera",
            "descripcion": "Carne de res, salsa ranchera, jalapeños, queso pepper jack y aguacate",
            "precio": 2400
          },
          {
            "nombre": "Hamburguesa Mexicana",
            "descripcion": "Carne de res, guacamole, pico de gallo, jalapeños y queso cheddar",
            "precio": 2200
          },
          {
            "nombre": "Hamburguesa BBQ Bacon",
            "descripcion": "Carne de res, bacon, salsa barbacoa, queso cheddar y cebolla caramelizada",
            "precio": 2400
          },
          {
            "nombre": "Hamburguesa Vegetariana",
            "descripcion": "Falafel, lechuga, tomate, cebolla, pepino y salsa de yogur",
            "precio": 2100
          },
          {
            "nombre": "Hamburguesa de Pollo",
            "descripcion": "Pechuga de pollo a la parrilla, lechuga, tomate, cebolla y mayonesa",
            "precio": 2200
          }
        ]
      }
]

function CargarMenu(){
    menu.forEach( seccion  => CrearSeccion(seccion))
}

function CrearSeccion(seccion){
    const elementoMenu = document.getElementById('menu')

    const elementoSeccion = document.createElement("section")
    elementoSeccion.classList.add("menu__seccion")
    elementoSeccion.setAttribute("id", seccion.seccion)
        
    const elementoTitulo = document.createElement("h3")
    elementoTitulo.innerHTML = seccion.seccion
    elementoTitulo.classList.add("seccion__titulo")
    elementoSeccion.appendChild(elementoTitulo)

    const elementoPlatos = document.createElement("div")
    elementoPlatos.classList.add("seccion__platos")
    elementoSeccion.appendChild(elementoPlatos)
    
    CargarPlatos(seccion.platos,elementoPlatos)


    elementoMenu.appendChild(elementoSeccion)
}

function CargarPlatos(platos,contenedor){
    platos.forEach(plato => {
        const elementoPlato =  CrearPlato(plato)
        contenedor.appendChild(elementoPlato)
    })
}

function CrearPlato(plato){
    const elementoPlato = document.createElement("div")
    elementoPlato.classList.add("plato")

    const elementoPrecio = document.createElement("span")
    elementoPrecio.classList.add("plato__precio")
    elementoPrecio.innerHTML = `$${plato.precio}`

    const elementoNombre = document.createElement("h4")
    elementoNombre.classList.add("plato__nombre")
    elementoNombre.innerHTML = plato.nombre

    const elementoDescripcion = document.createElement("p")
    elementoDescripcion.classList.add("plato__descripcion")
    elementoDescripcion.innerHTML = plato.descripcion

    elementoPlato.appendChild(elementoNombre)
    elementoPlato.appendChild(elementoPrecio)
    elementoPlato.appendChild(elementoDescripcion)

    return elementoPlato
}


function CargarRecomendados(){

}