import  { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import useLocalStorage from './LocalStorage/LocalStorage';
import initialContacts from './contacts.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactList } from './ContactList/ContactList';
import { notifyOptions } from './Notify/Notify';
import { Header } from './Header/Header';
import Filter from './Filter/Filter';

export default function App () {

  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

 const  addContact = newContact => {
     const isExist = contacts.find(
      ({ name, number }) =>
        name.toLowerCase().trim() === newContact.name.toLowerCase().trim() ||
        number.trim() === newContact.number.trim()
    );

    if (isExist) {
      return toast.error(
        `${newContact.name}: is already in contacts`,
        notifyOptions
      );
    }

    setContacts(contacts => [{ ...newContact, id: nanoid() }, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.target.value.toLowerCase().trim());
  };

  const getVisibleContacts = () => {
    const normalFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalFilter)
    );

    if (normalFilter && !filterContacts.length) {
      toast.warn(`No contacts matching your request`, notifyOptions);
    }

    return filterContacts;
  };
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onAddContact={addContact} />
          <Header title="Contacts" />
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={getVisibleContacts()}
            onDelete={deleteContact}
          />
        </Section>
        <ToastContainer />
        <GlobalStyle />
      </Layout>
    );
  }