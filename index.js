const miNombre = "Diego"
const miApellido = "Quesada"
const miObjeto = {
    nombre: miNombre,
    apellido: miApellido
}
//sessionStorage.setItem("nombre-sesion", JSON.stringify(miObjeto))
//localStorage.setItem("nombre-sesion", JSON.stringify(miObjeto))

//document.cookie = "nombreCoookie="+JSON.stringify(miObjeto) + ";expires="+ new Date(new Date().getTime() + 2 * 60 * 1000)

console.log(miObjeto.apellido)