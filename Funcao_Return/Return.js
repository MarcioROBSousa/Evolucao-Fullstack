function verificarDisponibilidade (horarioAtual, horarioSolicitado) {
    // verifica se horario solicitado está dentro do horário comercial e no futuro
    if (horarioSolicitado >= horarioAtual && horarioSolicitado >= 12 && horarioSolicitado <= 13) {
        return "Horario de almoço";
    }
    if (horarioSolicitado >= horarioAtual && horarioSolicitado >= 9 && horarioSolicitado <= 18) {
        return `Partida agendada para as ${horarioSolicitado} horas`;
    }
        else {
        return "Não é possível agendar para este horário. Tente entre 9 e 18."
    }
  }

  //Testando a função
  console.log (verificarDisponibilidade (8, 15));
  //Partida agendado para as 15h
  console.log (verificarDisponibilidade (14, 17.50)); //Vai dar mensagem: não é possivel agendar para este horario
  console.log (verificarDisponibilidade (10, 15.50));//Vai dar mensagem:PARTIDA AGENDADA PARA AS 18H
  console.log (verificarDisponibilidade (9, 12.20)); //Vai dar mensagem:PARTIDA AGENDADA PARA AS 18H
  
