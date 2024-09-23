let log = document.getElementById("log");
let reg = document.getElementById("reg");
function habilitarLog(){
    log.classList.add('active')
    reg.classList.remove('active')
}
function habilitarReg(){
    reg.classList.add('active')
    log.classList.remove('active')
}