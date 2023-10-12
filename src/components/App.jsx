// import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';

import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React, { useEffect } from 'react';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
        <ContactList />
      </div>
    </>
  );
};
