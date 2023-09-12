import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    
    if (selectedContactId) {
      fetchContact();
    } else {
      setContact(null); // Clear the contact when selectedContactId is null
    }
  }, [selectedContactId]);

  if (!contact) {
    return <div>No contact selected.</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address}</p>
      <p>Website: {contact.website}</p>
      <p>Company: {contact.company}</p>
    </div>
  );
}