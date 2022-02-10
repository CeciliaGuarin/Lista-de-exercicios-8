function Exer_7(){
    let vetor = []
    let positivos = 0
    let negativos = 0
    for(let i=0; i<10; i++){
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }

    for(let i=0; i<10; i++){

        if(vetor[i] > 0){
            positivos = positivos + vetor[i]

        }
        else{
            negativos = negativos + 1
        }
    }

    alert(`A soma total de positivos é ${positivos}`)
    alert(`A quantidade total de negativos é ${negativos}`)
}

function Exer_8(){
    let alunos = []
    let media = []
    let maiormedia = []
    for (let i=0; i>7; i++){
        alunos[i] = prompt(`Informe o aluno ${i+1}`)
        media[i] = Number(prompt(`Informe a média do aluno ${i+1}`))
    }
    for(let i=0; i<7; i++){
        if(media[i] > maiormedia){
            maiormedia = alunos[i]
        }

        if(media[i] < 7){
            recuperacao = 10 - media[i]
        }
        if(recuperação < 5){
            recuperacao == 5
        }

        alert(`${alunos[i]} necessita de nota ${recuperacao} na recuperação`)
    }

    alert(`O aluno com maior media é ${maiormedia}`)
}

function Exer_9(){
    
}