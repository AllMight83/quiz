
// const selection = document.querySelector('.ciclismo');


// const border = function() {
//     if (selection.classList.contains('aggiungere')) {

//         selection.classList.remove('aggiungere')
// } else {
//     selection.classList.add('aggiungere')
// }
// }

// selection.addEventListener('click', border)



// document.querySelector('form[name="prueba"]').addEventListener('submit', (event) => {
//     event.preventDefault()
// })



const botones = document.querySelectorAll('.ciclismo');

const boton = document.querySelectorAll('.btn2');

const borde = boton.forEach((item) => item.addEventListener('click', function() {
    item.classList.toggle('nuevoColor')
}))









// Forma Más Moderna //

// const borde = botones.forEach((item) => item.addEventListener('click', function(){

//     item.classList.toggle('aggiungere')
// }));


// const borde = function() {

//     botones.classList.toggle('aggiungere')

// }

// botones.addEventListener('click', borde)





// const border = function (i) {

//     botones[i].classList.toggle('aggiungere')
// }

// for (let i = 0; i < botones.length; i++) {

//     botones[i].addEventListener('click', () => border(i))
// }


// const border = function(i) {

//     botones[i].classList.toggle('aggiungere')
// }

// for (let i = 0; i < botones.length; i++) {

//     botones[i].addEventListener('click', () => border(i))

// }

 


document.querySelector('form[name="prueba"]').addEventListener('submit', (event) => {
    event.preventDefault()


    const respuestas = {   
        tour: 'carapaz'
    };

    const error = {
        tour1: 'roglic',
        tour2: 'pogacar' 
    }

    const question1 = document.prueba.tour.value;

    // if (question1 == respuestas.tour) {
    //     alert("Bien")
    //     document.querySelector('label[for="tour"]').style.backgroundColor = 'green';
        
    // } else if (question1 == error.tour2) {
    //     alert('Mal')
    //     document.querySelector('label[for="tour2"]').style.backgroundColor = 'red';
    // } else if (question1 == error.tour1) {
    //     alert('Mal')
    //     document.querySelector('label[for="tour3"]').style.backgroundColor = 'red';

    // } else {
    //     alert("Selecciona una respuesta")
    // }

    if (question1 === "") {
        alert("Selecciona una respuesta");
    } else {

    }   if( question1 == respuestas.tour) {
        alert('Bien');
        document.querySelector('label[for="tour"]').style.backgroundColor = 'green';
    } else if (question1 == error.tour2) {
        alert('Mal')
        document.querySelector('label[for="tour2"]').style.backgroundColor = 'red';
    } else {
        alert('Mal')
        document.querySelector('label[for="tour3"]').style.backgroundColor = 'red';
        document.querySelector('label[for="tour3"]').style.border = "8px solid purple"
    }

})


const question = {
    name: 'elminster',
    label: '¿Cual es el nombre mas comun del mundo?',
    answers: [
      {label: 'Un bardo', value: 'bardo'},
      {label: 'Un mercader', value: 'mercader'},
      {label: 'Un mago', value: 'mago'},
      {label: 'Un marinero', value: 'marinero'},
    ],
    correct: 'mago'
  }

// let items = question.answers;

// let labels = items.map((it) => console.log(it.label, it.value))

let q1 = question.answers;

let q2 = q1.map((items) => console.log(items.label))
  