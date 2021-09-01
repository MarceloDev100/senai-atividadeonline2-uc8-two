let  newTheme, newEventDate, newSpeaker, newParticipant, birthdate, age
let  currentDate = new Date(2021, 07, 30)


//Lista de eventos já cadastrados inicialmente no sistema
let events = [
    { 
       theme: 'Palestra sobre HTML',
       date: new Date(2021, 08, 10).toLocaleDateString(),
       speaker: 'Izes Souza',
       participants: ['Aline Silva', 'Joana Prado']
    },  
    { 
        theme: 'Palestra sobre Angular',
        date: new Date(2021, 10, 25).toLocaleDateString(),
        speaker: 'Daniel Dantas',
        participants: ['Jose Alfredo']
    }
]


console.log("CADASTRO DE EVENTOS");

console.log('Entrada da data do evento: ')
newEventDate = new Date(2022, 03, 17)
console.log(newEventDate.toLocaleDateString());

//Verificação da data do evento
if(newEventDate > currentDate){
     
    console.log('Entrada do tema do evento: ', newTheme = 'Palestra sobre Javascript')

    console.log('Entrada do nome do palestrante: ', newSpeaker = 'Igor Menezes')

    //Cadastro do evento
    events.push(
        {
           theme: newTheme,
           date:  newEventDate.toLocaleDateString(),
           speaker: newSpeaker,
           participants: []
        }
    )

   
    console.log('Evento cadastrado com sucesso!')
    console.log('Evento: ');
    console.log(events[events.length-1])

    //Tentativa de cadastro de participante no evento sobre Javascript
    //Verificação do número de participantes
    console.log("CADASTRO DE PARTICIPANTES");

    if(events[events.length-1].participants.length < 100) {
  
            console.log('Quantidade de participantes permitida');
  
            console.log('Data de nascimento do participante: ')
            birthdate  = new Date(1986, 09, 15)
            console.log(birthdate.toLocaleDateString());
            
            //Calcula a idade do participante
            age = calculateAge(birthdate, currentDate)
           

            //Entrada da idade do participante
            if(age >= 18) {

                console.log('Entrada do nome do participante: ', newParticipant = 'Augusto Nunes')
                
                console.log(newParticipant + ', sua idade de ' + age + ' anos,' + ' é permitida');

                //Cadastro do participante
                events[events.length-1].participants.push(newParticipant)
                console.log('Participante cadastrado com sucesso no evento: ' , '\"'+ events[events.length-1].theme +'\"')

                console.log('Listagem de participantes e palestrantes: ')
                
                events.forEach((ev) => {
                    console.log(ev)
                })

            }
            else{
                console.log("Cadastro não permitido pela idade ");
            }

        }
        else{
            console.log("Cadastro não permitido por ter excedido o limite de participantes!");
        }

} 
else{
    console.log('Data inválida para o evento!');
    newTheme = ''
    newEventDate = ''
    newSpeaker = ''
}



function calculateAge(birthdate, currentDate){
    return Math.floor(Math.ceil(Math.abs(birthdate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)) / 365.25);
}

