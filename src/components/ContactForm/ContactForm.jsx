import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';
import toast from 'react-hot-toast';
import { contactsOperations } from '../../redux/contacts';
import { useDispatch } from 'react-redux';

function ContactForm({ contacts }) {
  const dispatch = useDispatch();
  // const [createContact, { isLoading }] = useCreateContactMutation();
  const createContact = (name, phone) => dispatch(contactsOperations.addContact(name, phone)) 
  
  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const phone = e.currentTarget.elements.number.value;

    const contactsName = contacts.map(contact => contact.name);

    if (contactsName.includes(name)) {
      return toast.error('Already here');
    }

    createContact(name, phone);
    toast.success('Contact added successfully');

    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">{/* {isLoading ? 'Saving...' : 'Save contact'} */}Save contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.array,
};

export default ContactForm;

