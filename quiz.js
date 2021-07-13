const respuestas = document.querySelectorAll(".contenedor");
const color = document.querySelectorAll(".prueba2");
const color2 = document.querySelector(".prueba3");

const prueba = document.querySelector('input[name="born"]');

const borde = function (i) {
  /* if (color.classList.contains("prueba")) {
    color.classList.remove("prueba");
  } else {
    color.classList.add("prueba");
  } */
  color[i].classList.toggle('prueba');

};
for(let i=0; i < color.length; i++ ){
  //color es un NodeList
  color[i].addEventListener('click', ()=> borde(i))
}

const noBorde = function () {
  color.classList.remove("prueba");
};

//color.addEventListener("click", borde);

// const noBorde = function() {
//   prueba.classList.remove(`prueba`)
// }

// for (let i = 0; i < respuestas.length; i++) {
//   color.addEventListener('click', borde);
//   color2.addEventListener('click', borde)
// }

// color.addEventListener('click', noBorde);

// color2.addEventListener('click', function() {
//   color2.classList.add('prueba')
// })

// color.addEventListener('click', function() {
// color.classList !== "prueba" ? color.classList.add('prueba') : color.classList.remove('prueba')
// })

document
  .querySelector('form[name="esdla"]')
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const correctAnswers = {
      born: "1854",
      first: "escarlata",
      address: "bakerb",
      wife: "mary",
      waterfalls: "reichenbach",
    };

    let q1 = document.forms.esdla.elements.born.value;
    let q2 = document.forms.esdla.elements.first.value;
    let q3 = document.forms.esdla.elements.address.value;
    let q4 = document.forms.esdla.elements.wife.value;
    let q5 = document.forms.esdla.elements.waterfalls.value;
    console.log(document.forms.esdla.elements)

    let legend1 = document.querySelector(".legend1");
    let legend2 = document.querySelector("#legend2");
    let legend3 = document.querySelector("#legend3");
    let legend4 = document.querySelector("#legend4");
    let legend5 = document.querySelector("#legend5");

    if (q1 === "" || q2 === "" || q3 === "" || q4 === "" || q5 === "") {
      console.log("Por favor, responde a todas las preguntas");
    } else {
      if (q1 === correctAnswers.born) {
        legend1.style.backgroundColor = "green";
      } else {
        legend1.style.backgroundColor = "red";
      }
      if (q2 === correctAnswers.first) {
        legend2.style.backgroundColor = "green";
      } else {
        legend2.style.backgroundColor = "red";
      }
      if (q3 === correctAnswers.address) {
        legend3.style.backgroundColor = "green";
      } else {
        legend3.style.backgroundColor = "red";
      }
      if (q4 === correctAnswers.wife) {
        legend4.style.backgroundColor = "green";
      } else {
        legend4.style.backgroundColor = "red";
      }
      if (q5 === correctAnswers.waterfalls) {
        legend5.style.backgroundColor = "green";
      } else {
        legend5.style.backgroundColor = "red";
      }
    }
  });

// document.querySelector('form[name="esdla"]').addEventListener('submit', (event) => {
//     event.preventDefault()

//    //*********************************************+++++++++++++++//

// let q1 = document.forms.esdla.elements.elminster.value;
//     let q2 = document.forms.esdla.elements.gandalf.value;
//     const preguntas = [q1, q2];
//     const respuestas = ['mago', 'maiar'];
//     let puntuacion = 0;

//     // If con si es string vacío puntar con todas las variables //

//     for (let i = 0; i < preguntas.length; i++) {

//         if (preguntas[i] === respuestas[i]) {
//             document.querySelector(`.btn${i + 1}`).style.backgroundColor = 'green'
//         } else {
//             document.querySelector(`.btn${i + 1}`).style.backgroundColor = 'red'
//         }
//     }

//         // if (q1 === respuestas[0]) {
//         //     document.querySelector('.btn1').style.backgroundColor = 'green';
//         //     } else {
//         //        document.querySelector('.btn1').style.backgroundColor = 'red';
//         //     }
//         // if (q2 === respuestas[1]){
//         //     document.querySelector('.btn2').style.backgroundColor = 'green';
//         //     } else {
//         //        document.querySelector('.btn2').style.backgroundColor = 'red';
//         //     }

//         // console.log(respuestas[i]);
//         // console.log(`q${i + 1}`)

//     // if (elminster === "" || gandalf === "") {
//     //     alert('Tienes campos rellenar');
//     // } else {
//     //         if (elminster == 'mago') {
//     //             document.querySelector('.btn1').style.backgroundColor = 'green';
//     //             puntuacion++
//     //         } else {
//     //                 document.querySelector('.btn1').style.backgroundColor = 'red';
//     //         }
//     //     if (gandalf == 'maiar') {
//     //         document.querySelector('.btn2').style.backgroundColor = 'green';
//     //         puntuacion++
//     //     } else {
//     //         document.querySelector('.btn2').style.backgroundColor = 'red';
//     //     }
//     // }
// //*********************************************+++++++++++++++//

//     // if (elminster === "") {
//     //     document.querySelector('.btn1').style.backgroundColor = 'red';
//     //     alert('Rellena el campo, por favor')
//     // } else if (elminster == 'mago'){
//     //     document.querySelector('.btn1').style.backgroundColor = 'green';
//     //     puntuacion++
//     // } else {
//     //     document.querySelector('.btn1').style.backgroundColor = 'red';
//     // }

//     // if (gandalf === "") {
//     //     document.querySelector('.btn2').style.backgroundColor = 'red';
//     // } else if (gandalf == 'maiar'){
//     //     document.querySelector('.btn2').style.backgroundColor = 'green';
//     //     puntuacion++
//     // } else {
//     //     document.querySelector('.btn2').style.backgroundColor = 'red';
//     // }

//     // if (gandalf === "" || elminster === "") {
//     //     alert("Respuesta vacía");

//     // }

//     // if (elminster === "" || gandalf === "") {
//     //     document.querySelector('.puntuacion').textContent = ''
//     // }
//     // document.querySelector('.puntuacion').innerHTML = `${puntuacion}`

//     console.log('Gandalf', document.forms.esdla.elements.gandalf.value)
//     console.log('Gandalf', document.forms['esdla'].elements['gandalf'].value)
// })

//*************INTENTOS************************/

// let nombre = 'pepe';

// const nombreArray = [nombre];
// console.log(nombreArray);

// const persona = {
//     name1: 'pepe'
// }

// if (nombre = persona.name1) {
//     console.log(nombre)
// } else {
//     console.log('error')
// }

// let dni = ['pepe'];

// const person = {
//     fname: "pepe"
// }

// let match = Object.values(person);
// console.log(...match)

// for (let i = 0; i < dni.length; i++) {
//     if (dni[i] === person.fname) {
//         console.log('Correcto')
//     } else {
//         console.log('Incorrecto')
//     }
// }

//*************MÁS INTENTOS************************//

// document.querySelector('form[name="esdla"]').addEventListener('submit', (event) => {
//     event.preventDefault()

//     let respuesta = document.forms.esdla.elements.gandalf.value;
//     const answer = {
//         bien: 'maiar'
//     }

//     if (respuesta === answer.bien) {
//         console.log('Bien');
//     } else {
//         console.log('No tan bien')
//     }

//     console.log('Gandalf', document.forms.esdla.elements.gandalf.value)
//     console.log('Gandalf', document.forms['esdla'].elements['gandalf'].value)
// })
