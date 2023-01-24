import { useState } from "react";
import Contacts from "./components/Contacts"

const App = (props) =>
{

	const [contacts, setContacts] = useState(props.contacts)

	const [newContact, setNewContact] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [search, setSearch] = useState('')

	const newContactObj = {
		id: contacts.length + 1,
		name: newContact,
		phone: newNumber,
	}


	const addContact = (e) => {
		e.preventDefault();
		if (contacts.findIndex((person) => person.name === newContact) !== -1) 
		{ 
			alert(`${newContact} is already in the phonebook `);
			return;
		}	

		setContacts(contacts.concat(newContactObj))
		setNewContact('')
	};

 	const handleContactChange = (e) =>
	{
		setNewContact(e.target.value);
	};

	const handleNumberChange = (e) =>
	{
		setNewNumber(e.target.value);
	};

	const handleSearch = (e) =>
	{
		setSearch(e.target.value);
	};

	const filtered = !search ? contacts  
			: contacts.filter( contact => 
				contact.name.toLowerCase().includes(search.toLocaleLowerCase())
			);

  return (

    <div>

		<h2>Phonebook</h2>
		Filter persons:{" "}
			<input placeholder="search" type = "search" value={ search }
					onChange = { handleSearch }
			></input>

		<h2>Add Contact</h2>
			<form onSubmit = { addContact }>
				<input placeholder="name" type = "text" value = { newContact }
					onChange = { handleContactChange }
				></input>
				<br />
				<input placeholder="phone number" type = "number" value = { newNumber }
						onChange = { handleNumberChange}
				></input>
				<br />
				<button type="submit">add a contact</button>
			</form>

		<h2>Numbers</h2>
			<ul style={ {listStyle: "none"} }>
        		{filtered.map(contact =>
					<Contacts key={contact.name} contact={contact} />
				)}
      		</ul>

			
    </div>

  );
}

export default App;
