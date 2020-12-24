import React, { useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactItem from './ContactItem'
import ContactContext from '../../context/contact/contactContext'

const Contacts = () => {
  // Initialize context so we have access to actiosn associated with this context
  const contactContext = useContext(ContactContext)

  const { contacts, filtered } = contactContext;

  if(contacts.length === 0) {
    return <h4>Please add a contact</h4>
  }

  return (
    // Check to see if anything is in filtered.
    // If there is, map through and show contact item
    // If there isn't, show the contacts
    <>
      <TransitionGroup>
        {filtered !== null 
          ? filtered.map(contact => (
            <CSSTransition>
              <ContactItem key={contact.id} contact={contact} />
            </CSSTransition>
          )) 
          : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        }
      </TransitionGroup>
    </>
  )
}

export default Contacts
