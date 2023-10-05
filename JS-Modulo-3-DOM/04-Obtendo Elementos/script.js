function show(){
  const contactList = document.getElementById('contact-list')
  console.log(contactList)

  const listElements = document.getElementsByTagName('li')
  console.log(listElements)

  const contactImput = document.getElementsByClassName('contact-input')
  console.log(contactImput)

  // retorna uma node list:
  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)
  
  // retorna uma node list:
  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)

  // retorna o primeiro elemento que encontrar:
  const firstContact = document.querySelector('#contact-list > li > label')
  console.log(firstContact)
}

