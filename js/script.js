function jogar(){
    age = prompt("Quantos anos você tem?")
    
    if (age >= 18) {
        playerchoice = prompt('Digite 1-Pedra, 2-Papel ou 3-Tesoura: ')
        computerchoice =  Math.floor(Math.random() * 3) + 1
        if(playerchoice == computerchoice) {
            alert('Empate!!')
        }
        if (playerchoice == 1) {
            if(computerchoice == 2) {
                alert('Computador venceu, pois jogou: papel ')
            }
            if (computerchoice == 3) {
                alert('Parabéns!! você venceu, pois o computador jogou: tesoura' )
            }
        }
    
        if (playerchoice == 2) {
            if(computerchoice == 1) {
                alert('Parabéns!! você venceu, pois o pc jogou: pedra')
            }
            if(computerchoice == 3) {
                alert('O computador ganhou, pois jogou: tesoura')
            }
        }

        if(playerchoice == 3) {
            if(computerchoice == 1){
                alert('O computador ganhou, pois jogou: pedra')
            }
            if(computerchoice == 2){
                alert('Parabéns!! Você ganhou, pois o pc jogou: papel')
            }
        }
    } else{
        alert('Desculpe, mas sua idade não o permite jogar! Volte daqui um/uns ano/anos.')
    }
}