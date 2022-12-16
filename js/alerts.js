// mayor de edad
const verificar = () => {
  return Swal.fire({
    html: `<h5 class="titleAlert">Verificación de edad</h5><br/>
            <span class="textAlert">
                <b>Atención:</b> para usar esta tienda en línea, debe tener <b>al menos 18 años.<br/><br/>
                ¿Tienes 18 años o más?</b>
            </span>`,
    showDenyButton: true,
    confirmButtonText: 'SI',
    denyButtonText: 'NO',
    allowOutsideClick: false,
    buttonsStyling:false,
    customClass:{
        confirmButton:'buttons',
        denyButton:'buttons',
    },
  });
};
sessionStorage.getItem("verificacionDeEdad") ?? verificar().then((result) => { //!sessionStorage.getItem("verificacionDeEdad") && verificar();
  if (result.value) {
      sessionStorage.setItem("verificacionDeEdad",true);
    }else{
        location.href='https://www.google.com';
    }
}); 

// producto añadido
const Toast = Swal.mixin({
    title: 'Producto añadido!',
    icon: 'success',
    color:'#111',
    iconColor:'#00ff00',
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 1500,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  }).bindClickHandler('data-swal-toast');

// compra realizada
const toastCompra = Swal.mixin({
    icon: 'success',
    title: '¡Su compra fue realizada con éxito!',
    showConfirmButton: false,
    timer: 3000,
    willClose: () => {
        location.href='';
  }
  }).bindClickHandler('finalizar-compra');