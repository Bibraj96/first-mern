import React, { useContext } from 'react'
import ContactItem from './ContactItem'
import ContactContext from '../../context/contact/contactContext'

const Contacts = () => {
  // Initialize context so we have access to actiosn associated with this context
  const contactContext = useContext(ContactContext)

  const { contacts } = contactContext;

  return (
    <>
      {contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)}
    </>
  )
}

export default Contacts
