function addPlayer() {
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value

  const confirmation = confirm(`Escalar ${name} como ${position}?`)

  if (confirmation) {
    const teamList = document.getElementById('team-list')
    const playerItem = document.createElement('li')
    playerItem.id = 'player-' + number
    playerItem.innerText = `${position}: ${name} (${number})`
    teamList.appendChild(playerItem)

    // zerando os valores das caixas de input:
    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''

  } else {
    alert(`Operação cancelada`)
  }
}


function removePlayer(){
  const number = document.getElementById(`numberToRemove`).value
  const playerToRemove = document.getElementById(`player-${number}`)

  const confirmation = confirm(`Deseja remover o jogador ${playerToRemove.innerText}?`)

  if (confirmation){
    document.getElementById(`team-list`).removeChild(playerToRemove)
    // zerando os valores das caixas de input:
    document.getElementById(`numberToRemove`).value = ''
    //
  }
}