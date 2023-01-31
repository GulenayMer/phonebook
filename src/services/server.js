import axios from "axios";

const baseURL = 'http://localhost:3001/api/contacts'


const getAll = async () => {
	const request = await axios.get(baseURL)
	return request.then(response => response.data)
}

const create = async newObj => {
	const request = await axios.post(baseURL, newObj)
	return request.then(response => response.data)
}

const update = async (id, newObj) => {
	const request = await axios.put(`${baseURL}/${id}`, newObj)
	return request.then(response => response.data)
};


const contactsData =
{ 
	getAll,
	create,
	update 
};

export default contactsData;

