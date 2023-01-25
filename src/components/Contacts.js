import "../style.css"

const Contacts = ( {contact} ) => {

	return (
		<div>
			<li className="list"> {contact.name} {contact.phone} </li>
		</div>
	)
}

export default Contacts