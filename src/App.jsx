import "./App.css";
import { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
//import ContactRow from "./components/ContactRow";
//import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [contacts, setContacts] = useState([])
  const [selectedContactId, setSelectedContactId] = useState(null)
  const  featuredContact = contacts.find((contact) => contact.id === selectedContactId)

useEffect(() => {
    async function fetchContacts(){
        try {
            const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
            const result = await response.json();
            setContacts(result)
        } catch (error) {
            console.log(error);
        }
    }
    fetchContacts()
}, []);
  
  return (
    <>
    <div className="table-container">
      <ContactList contacts={contacts} setSelectedContactId={setSelectedContactId}/>
    </div>
    {selectedContactId && (
      <div className='selected-info'>
        <h2>Contact Details</h2>
        <ul>
          <li>Name: {featuredContact.name}</li>
          <li>Email: {featuredContact.email}</li>
          <li>Phone: {featuredContact.phone}</li>
          {/* <li>Address: {featuredContact.address}</li> */}
          <li>Website: {featuredContact.website}</li>
          {/* <li>Company: {featuredContact.company}</li> */}
        </ul>
        
      </div>
    )}
 
    </>
  );
}