function addContact(){
  const contactSection = document.getElementById('contacts-list')
  
  const h3 = document.createElement('h3')
  h3.innerText = 'Contato'

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = 'Nome: '
  const nameImput = document.createElement('input')
  nameImput.type = 'text'
  nameImput.name = 'fullname'
  nameLi.appendChild(nameImput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  const emailLi = document.createElement('li')
  emailLi.innerText = 'Email: '
  const emailImput = document.createElement('input')
  emailImput.type = 'email'
  emailImput.name = 'email'
  emailLi.appendChild(emailImput)
  ul.appendChild(emailLi)
  ul.appendChild(document.createElement('br'))

  const phoneLi = document.createElement('li')
  // innerhtml é uma propriedade que permite que você coloque tags html dentro de um elemento
  phoneLi.innerHTML = '<label for="phone">Telefone: </label>'
  const phoneImput = document.createElement('input')
  phoneImput.type = 'tel'
  phoneImput.name = 'phone'
  phoneImput.id = 'phone'
  phoneLi.appendChild(phoneImput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  contactSection.append(h3, ul)
}

function removeContact(){
  const contactSection = document.getElementById('contacts-list')

  // pega todos os elementos h3 e ul
  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  // remove o último elemento de cada lista
  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}