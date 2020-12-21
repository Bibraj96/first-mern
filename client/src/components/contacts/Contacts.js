import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'

const Contacts = () => {
  // Initialize context so we have access to actiosn associated with this context
  const contactContext = useContext(ContactContext)

  const { contacts } = contactContext;

  return (
    <>
      {contacts.map(contact => <h3>{contact.name}</h3>)}
    </>
  )
}

export default Contacts
