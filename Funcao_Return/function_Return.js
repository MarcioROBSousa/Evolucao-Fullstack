   
    const horarioAtual = 9
    const horarioSolicitado = 12.01;
    const horarioInicio = 9;
    const horarioTermino = 18;
    const horarioInicioAlmoco = 12;
    const horarioFimAlmoco = 13;

function verificarDisponibilidade (horarioAtual, horarioSolicitado) {
        // verifica se horario solicitado está dentro do horário comercial e no futuro

    if (horarioSolicitado >= horarioAtual && horarioSolicitado >= horarioInicio && horarioSolicitado <= horarioTermino) {
        return `Partida agendada para as ${horarioSolicitado} horas`;
    }
    else if (horarioSolicitado >= horarioInicioAlmoco && horarioSolicitado && horarioSolicitado < horarioFimAlmoco) {
        return "Horario de almoço";
    }
        else {
        return "Não é possível agendar para este horário. Tente entre 9 e 18."
    }
}



//Chamando a função e exibindo o resultado

const resultado = verificarDisponibilidade (horarioAtual, horarioSolicitado)

console.log (resultado);



//segundo código

// Definição dos horários
const horarioAtual = 14;
const horarioSolicitado = 12.01;
const inicioExpediente = 9;
const fimExpediente = 18;
const inicioAlmoco = 12;
const fimAlmoco = 13;

function verificarDisponibilidade(horarioAtual, horarioSolicitado) { 
    // Verifica se o horário solicitado está dentro do horário comercial, no futuro e fora do horário de almoço
    
    if (horarioSolicitado >= horarioAtual && horarioSolicitado >= inicioExpediente && horarioSolicitado <= fimExpediente)  {
    
        if (horarioSolicitado >= inicioAlmoco && horarioSolicitado < fimAlmoco) {
            return `Não é possível agendar durante o horário de almoço (${inicioAlmoco}h às ${fimAlmoco}h)`;
        }
        return `Partida agendada para as ${horarioSolicitado} horas`; 
    }       else { 
                return `Não é possível agendar para este horário. Tente entre ${inicioExpediente}h e ${fimExpediente}h`; 
    } 
}
// Chamando a função e exibindo o resultado
const resultado = verificarDisponibilidade(horarioAtual, horarioSolicitado);
console.log(resultado);