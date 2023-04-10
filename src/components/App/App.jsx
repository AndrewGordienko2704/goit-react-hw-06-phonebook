
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../Contacts/Contacts';

import { Filter } from '../Filter/Filter';
import { Container, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};
