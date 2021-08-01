const tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario');
      formulario = document.querySelector('#formulario-tarjeta'),
      numeroTarjeta = document.querySelector('#tarjeta .numero'),
      nombreTarjeta = document.querySelector('#tarjeta .nombre'),
      logoMarca = document.querySelector('#logo-marca'),
      firma = document.querySelector('#tarjeta .firma p' ),
      mesExpiracion = document.querySelector('#tarjeta .mes'),
      yearExpiracion = document.querySelector('#tarjeta .year'),
      ccv = document.querySelector('#tarjeta .ccv');
       
      //* volteamos la tarjeta para mostrar el frente

      const mostrarFrente = () => {
          if(tarjeta.classList.contains('active')){
              tarjeta.classList.remove('active');
          }

      }



tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});
 
btnAbrirFormulario.addEventListener('click', () => {
     btnAbrirFormulario.classList.toggle('active');
     formulario.classList.toggle('active');
 });

 for( let i = 1; i <= 12; i++ ){
     let opcion= document.createElement('option');
     opcion.value = i;
     opcion.innerText = i;
     formulario.selectMes.appendChild(opcion);

 }
 const yearActual = new Date().getFullYear();
 for ( let i = yearActual; i <= yearActual + 8; i++){
    let opcion= document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
 }
 //* input numero de tarjeta //

 formulario.inputnumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputnumero.value = valorInput
    //*  eliminamos espacios en blanco
    .replace(/\s/g, '')
    //* eliminar las letras
    .replace(/\D/g, '')
    //* ponemos espacios cada cuatro numeros
    .replace(/([0-9]{4})/g, '$1 ')
    .trim();

    numeroTarjeta.textContent = valorInput;
    
    if(valorInput == ''){
        numeroTarjeta.textContent ='#### #### #### ####';
        logoMarca.innerHTML = '';
    }
    if (valorInput[0] == 4){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        logoMarca.appendChild(imagen);

    } else if(valorInput[0] == 5){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }
    //* volteamos la tarjeta para que el usuario vea el frente
    mostrarFrente();
 });
  //*input nombre de tarjeta

  formulario.inputnombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputnombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = 'Miguel Perez';
    }
     mostrarFrente();

  })

  //*select mes

  formulario.selectMes.addEventListener('change', (e) => {
      mesExpiracion.textContent = e.target.value;
      mostrarFrente();
  });

  //*select year

  formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});
//*ccv

formulario.inputCCV.addEventListener('keyup', () => {
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');

    }
    formulario.inputCCV.value = formulario.inputCCV.value
    //*eliminar los espacios
    .replace(/\s/g, '')
    //* eliminar las letras
    .replace(/\D/g, '') 

    ccv.textContent = formulario.inputCCV.value;


})
