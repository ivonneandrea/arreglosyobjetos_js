let cardMainS = document.querySelector(".ventaMain")
let cardMainR = document.querySelector (".alquilerMain")
let propertyCardR = document.querySelector(".articuloA")
let propertyCardS = document.querySelector(".articuloB")
 

const numberOfRenders = 3
let renderedItemCountS = 0
let renderedItemCountR = 0 


const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: ' Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    costo: 5.000,
    smoke: false,
    pets: false,
    },
    
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    costo: 1.200,
    smoke: true,
    pets: true,
    }, 

    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: ' Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    costo: 4.500,
    smoke: false,
    pets: true,
    }, 
    
    {
    nombre:'Casa cercana a la ciudad',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOKbcfNpqcMa0gQbdbumXq75FR8XhCSt7Vg&usqp=CAU',
    descripcion: 'Esta casa familiar cuenta con 4 habitaciones está ubicado en un gran condominio',
    ubicacion: '354 Mary Street,Canadá, CA 04567' ,
    habitaciones: 4,
    costo: 3.000,
    smoke: false,
    pets: true,
    }, 
    
    {
    nombre:'Casa ubicada dentro de lindo condominio',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWlHWMO4f8CUNFAH0JvDdazE-vPRr-ZWrXA&usqp=CAU',
    descripcion: ' Esta hermosa casa ofrece una vista impresionante al mar',
    ubicacion: '456 White Avenue, Lazy Town, CA 7876' ,
    habitaciones: 4,
    costo: 1.500,
    smoke: true,
    pets: true,
    }, 
    
    {
    nombre:'Departamento espacioso ubicado en zona residencial',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAc5mrx9_hymtFMLLXyK3rt5Lm2CBQIvDNQ&usqp=CAU',
    descripcion: ' Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '34 Black Street, Anytown, CA 984' ,
    habitaciones: 1,
    costo: 2.400,
    smoke: false,
    pets: false,
    },
    
   
    ]

const propiedades_alquiler = [
{
nombre: 'Apartamento en el centro de la ciudad',
src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
ubicacion: '123 Main Street,Anytown, CA 91234',
habitaciones: 2,
costo: 2.000,
smoke: false,
pets: true,
},

{
nombre: 'Apartamento luminoso con vista al mar',
src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
habitaciones: 3,
costo: 2.500 ,
smoke: true,
pets: true,
},
 
{
nombre: 'Condominio moderno en zona residencial',
src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
ubicacion: '123 Main Street,Anytown, CA 91234',
habitaciones: 3,
costo: 2.200,
smoke: false,
pets: false,
},

{
nombre: 'Departamento cercano a la ciudad',
src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEy_ufHsOVGZQScfSm60DK48gFR-vN8RG2w&usqp=CAU',
descripcion: ' Este departamento cuenta con 3 habitaciones ubicado en el corazón de la ciudad.',
ubicacion: '354 Mary Street,Canadá, CA 04567',
habitaciones: 3,
costo: 3.000,
smoke: false,
pets: true,
},

{
nombre: 'Casa ubicada dentro de lindo condominio',
src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWlHWMO4f8CUNFAH0JvDdazE-vPRr-ZWrXA&usqp=CAU',
descripcion: ' Esta hermosa casa  ofrece gran espacio',
ubicacion: '890 Candy Avenue,Town, CA 2145',
habitaciones: 4,
costo: 5.500,
smoke: true,
pets: true, 
    }, 

{
nombre: 'Casa moderna y espaciosa en zona residencial',
src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZYLUtSpRTkaEnhIaq2C1PyvsONEM1pORng&usqp=CAU',
descripcion: 'Esta elegante casa moderno se encuentra ubicado en una tranquila zona residencial',
ubicacion: '234 Apple Street,Anytown, CA 9876',
habitaciones: 3,
costo: 3.200,
smoke: false,
pets: false, 
}, 


]  



function renderMain(){
    for (let propiedadMainS of propiedades_venta ) {
        if (renderedItemCountS >=numberOfRenders) {
        break 
    }
    if (propiedadMainS.smoke == true && propiedadMainS.pets == true){
      const templateMainS  = `
    <div class="col-md-4 mb-4">
      <div class="card">
          <img src="${propiedadMainS.src}" alt="Foto producto">
          <div class="card-body">
              <h5 class="card-title"> ${propiedadMainS.nombre}</h5>
              <p class="card-text"> ${propiedadMainS.descripcion}</p>
              <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainS.ubicacion}</p>
              <p><i class="fas fa-bed"></i> ${propiedadMainS.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainS.banos} Baños</p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedadMainS.costo}</p>
              <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
              <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
          </div>
      </div> `
        cardMainS.innerHTML += templateMainS
        renderedItemCountS++ 
    
    } else if (propiedadMainS.smoke == false && propiedadMainS.pets == false){
        const templateMainS =  `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadMainS.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadMainS.nombre}</h5>
                <p class="card-text"> ${propiedadMainS.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainS.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadMainS.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainS.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadMainS.costo}</p>
                <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
            </div>
        </div>
        `
        cardMainS.innerHTML += templateMainS
        renderedItemCountS++ 

    } else if (propiedadMainS.smoke == true && propiedadMainS.pets== false ) {
          const templateMainS = `
            <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedadMainS.src}" alt="Foto producto">
                <div class="card-body">
                    <h5 class="card-title"> ${propiedadMainS.nombre}</h5>
                    <p class="card-text"> ${propiedadMainS.descripcion}</p>
                    <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainS.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedadMainS.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainS.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedadMainS.costo}</p>
                    <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                    <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
                </div>
            </div> 
            `
            cardMainS.innerHTML += templateMainS
            renderedItemCountS++
           
        } else if (propiedadMainS.smoke == false && propiedadMainS.pets== true ) {
            const templateMainS = `
            <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedadMainS.src}" alt="Foto producto">
                <div class="card-body">
                    <h5 class="card-title"> ${propiedadMainS.nombre}</h5>
                    <p class="card-text"> ${propiedadMainS.descripcion}</p>
                    <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainS.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedadMainS.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainS.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedadMainS.costo}</p>
                    <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                    <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
                </div>
            </div>
            `
            cardMainS.innerHTML += templateMainS
            renderedItemCountS++

        }

    }

    // Templates Alquiler rent//
for (let propiedadMainR of propiedades_alquiler) {
    if (renderedItemCountR >= numberOfRenders){
        break
    }
 if (propiedadMainR.smoke == true && propiedadMainR.pets == true ){
    const templateMainR = `
    <div class="col-md-4 mb-4">
    <div class="card">
        <img src="${propiedadMainR.src}" alt="Foto producto">
        <div class="card-body">
            <h5 class="card-title"> ${propiedadMainR.nombre}</h5>
            <p class="card-text"> ${propiedadMainR.descripcion}</p>
            <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainR.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedadMainR.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainR.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedadMainR.costo}</p>
            <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
            <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
        </div>
    </div>
    `
    cardMainR.innerHTML += templateMainR
    renderedItemCountR++

 } else if (propiedadMainR.smoke == false && propiedadMainR.pets == false){
    const templateMainR =`
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadMainR.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadMainR.nombre}</h5>
                <p class="card-text"> ${propiedadMainR.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainR.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadMainR.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainR.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadMainR.costo}</p>
                <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
            </div>
        </div>
        `
        cardMainR.innerHTML += templateMainR
        renderedItemCountR++
 } else if (propiedadMainR.smoke== true && propiedadMainR.pets == false ) {
    const templateMainR = `
    <div class="col-md-4 mb-4">
    <div class="card">
        <img src="${propiedadMainR.src}" alt="Foto producto">
        <div class="card-body">
            <h5 class="card-title"> ${propiedadMainR.nombre}</h5>
            <p class="card-text"> ${propiedadMainR.descripcion}</p>
            <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainR.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedadMainR.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainR.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedadMainR.costo}</p>
            <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
            <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
        </div>
    </div>
    `
    cardMainR.innerHTML += templateMainR
    renderedItemCountR++

 } else if (propiedadMainR.smoke == false && propiedadMainR.pets == true) {
    const templateMainR = `
    <div class="col-md-4 mb-4">
    <div class="card">
        <img src="${propiedadMainR.src}" alt="Foto producto">
        <div class="card-body">
            <h5 class="card-title"> ${propiedadMainR.nombre}</h5>
            <p class="card-text"> ${propiedadMainR.descripcion}</p>
            <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainR.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedadMainR.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainR.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedadMainR.costo}</p>
            <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
            <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
        </div>
    </div>
    `
    cardMainR.innerHTML += templateMainR
    renderedItemCountR++
}
}
}

function renderVenta () {
for (let propiedadS of propiedades_venta) {
    if (propiedadS.smoke == true && propiedadS.pets == true){
    const templateS =`
    <div class="col-md-4 mb-4">
    <div class="card">
        <img src="${propiedadS.src}" alt="Foto producto">
        <div class="card-body">
            <h5 class="card-title"> ${propiedadS.nombre}</h5>
            <p class="card-text"> ${propiedadS.descripcion}</p>
            <p> <i class="fas fa-map-marker-alt"></i> ${propiedadS.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedadS.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadS.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedadS.costo}</p>
            <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
            <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
        </div>
    </div>
    `
    propertyCardS.innerHTML += templateS

 } else if (propiedadS.smoke == false && propiedadS.pets ==false) {
 const templateS = `
 <div class="col-md-4 mb-4">
 <div class="card">
     <img src="${propiedadS.src}" alt="Foto producto">
     <div class="card-body">
         <h5 class="card-title"> ${propiedadS.nombre}</h5>
         <p class="card-text"> ${propiedadS.descripcion}</p>
         <p> <i class="fas fa-map-marker-alt"></i> ${propiedadS.ubicacion}</p>
         <p><i class="fas fa-bed"></i> ${propiedadS.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadS.banos} Baños</p>
         <p><i class="fas fa-dollar-sign"></i> ${propiedadS.costo}</p>
         <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
         <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
     </div>
 </div>
 `
 propertyCardS.innerHTML += templateS

 } else if (propiedadS.smoke == true && propiedadS.pets == false){
    const templateS =`
    <div class="col-md-4 mb-4">
    <div class="card">
        <img src="${propiedadS.src}" alt="Foto producto">
        <div class="card-body">
            <h5 class="card-title"> ${propiedadS.nombre}</h5>
            <p class="card-text"> ${propiedadS.descripcion}</p>
            <p> <i class="fas fa-map-marker-alt"></i> ${propiedadS.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedadS.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadS.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedadS.costo}</p>
            <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
            <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
        </div>
    </div>`
    propertyCardS.innerHTML += templateS

 } else if (propiedadS.smoke == false && propiedadS.pets == true) {
    const templateS =  `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadS.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadS.nombre}</h5>
                <p class="card-text"> ${propiedadS.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadS.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadS.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadS.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadS.costo}</p>
                <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
            </div>
        </div>
        `
        propertyCardS.innerHTML += templateS
 }
}
}

function renderAlquiler(){
 for (let propiedadR of propiedades_alquiler){
    if (propiedadR.smoke == true && propiedadR.pets == true ){
        const templateR = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadR.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadR.nombre}</h5>
                <p class="card-text"> ${propiedadR.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadR.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadR.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadR.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadR.costo}</p>
                <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
            </div>
        </div>
        `
        propertyCardR.innerHTML += templateR

} else if (propiedadR.smoke == false && propiedadR.pets == false ){
    const templateR = `
    <div class="col-md-4 mb-4">
    <div class="card">
        <img src="${propiedadR.src}" alt="Foto producto">
        <div class="card-body">
            <h5 class="card-title"> ${propiedadR.nombre}</h5>
            <p class="card-text"> ${propiedadR.descripcion}</p>
            <p> <i class="fas fa-map-marker-alt"></i> ${propiedadR.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedadR.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadR.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedadR.costo}</p>
            <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
            <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
        </div>
    </div>
    `
    propertyCardR.innerHTML += templateR

} else if (propiedadR.smoke == true && propiedadR.pets == false ) {
    const templateR = `
    <div class="col-md-4 mb-4">
    <div class="card">
        <img src="${propiedadR.src}" alt="Foto producto">
        <div class="card-body">
            <h5 class="card-title"> ${propiedadR.nombre}</h5>
            <p class="card-text"> ${propiedadR.descripcion}</p>
            <p> <i class="fas fa-map-marker-alt"></i> ${propiedadR.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedadR.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainR.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedadR.costo}</p>
            <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
            <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
        </div>
    </div>
    `
    propertyCardR.innerHTML += templateR

} else if (propiedadR.smoke == false && propiedadR.pets == true ){
    const templateR = `
    <div class="col-md-4 mb-4">
    <div class="card">
        <img src="${propiedadR.src}" alt="Foto producto">
        <div class="card-body">
            <h5 class="card-title"> ${propiedadR.nombre}</h5>
            <p class="card-text"> ${propiedadR.descripcion}</p>
            <p> <i class="fas fa-map-marker-alt"></i> ${propiedadR.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedadR.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadR.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedadR.costo}</p>
            <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
            <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
        </div>
    </div>
    `
    propertyCardR.innerHTML += templateR
}

 }

}

if (document.title === "Inmobiliaria"){
    window.addEventListener("load", renderMain)
} else if (document.title === "Sale") {
    window.addEventListener("load", renderVenta )
} else if ( document.title === "Rent") {
    window.addEventListener ("load", renderAlquiler)
}
