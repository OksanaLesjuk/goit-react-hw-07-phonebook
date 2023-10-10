// import { useState, useMemo } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React from 'react';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // const createContacts = dataForm => {
  //   const existingContact = contacts.find(
  //     contact => contact.name === dataForm.name
  //   );
  //   if (existingContact) {
  //     return alert(`${dataForm.name} is already in contacts`);
  //   }
  //   const newContact = {
  //     ...dataForm,
  //     id: nanoid(),
  //   };

  //   setContacts(prev => [newContact, ...prev]);
  // };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleFilter = ({ target: { value } }) => {
  //   setFilter(value);
  // };

  // const deleteContacts = id => {
  //   setContacts(prev => prev.filter(contact => contact.id !== id));
  // };

  //використовуємо useMemo лише у складних і великих сортуваннях,щоб не рендерити зайвий раз, тут для практики
  // const filteredContacts = useMemo(() => {
  //   if (!filter) return;
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }, [filter, contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
