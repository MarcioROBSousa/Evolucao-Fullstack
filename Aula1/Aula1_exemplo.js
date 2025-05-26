const data = new Date();
const horaDoDia = data.getHours();
if(horaDoDia >= 6 && horaDoDia < 12){
    console.log("Bom dia!!");
}
if(horaDoDia >= 12 && horaDoDia < 18){
    console.log("Boa tarde!!");
}
if(horaDoDia >= 18 && horaDoDia < 24){
    console.log("Boa Noite!!");
}
if(horaDoDia >= 0 && horaDoDia < 6){
    console.log("É madrugada. Vá dormir!!");
}