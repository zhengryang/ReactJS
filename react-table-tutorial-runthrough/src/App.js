import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import data from "./mock-data.json";
import { nanoid } from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';
import { Fragment } from 'react';

function App() {

  const [contacts, setContacts] = useState(data);
  // send form data . follows are name = "fullName" so on.
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  });

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  });

  const handleEditFormChange = (event) => {
    event.preventDefault();
    // this is getting 'name' attribute in <input> 
    const fieldName = event.target.getAttribute('name');
    // console.log(fieldName)
    // get the value of name attribute
    const fieldValue = event.target.value;
    // console.log(fieldValue)
    // get copy of existing form data
    const newFormData = { ...editFormData};

    // use new data from input in new form
    // since newForm is an object
    // so we use given attribute to get given key
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }


  const [editContactId, setEditContactId] = useState(null);


  const handleAddFormData = (event) => {
    event.preventDefault();
    // this is getting 'name' attribute in <input> 
    const fieldName = event.target.getAttribute('name');
    // console.log(fieldName)
    // get the value of name attribute
    const fieldValue = event.target.value;
    // console.log(fieldValue)
    // get copy of existing form data
    const newFormData = { ...addFormData };

    // use new data from input in new form
    // since newForm is an object
    // so we use given attribute to get given key
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id)

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    }

    setEditFormData(formValues);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    }

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  }




  return (
    <div className="app-container">
      table
      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* as we use map, we access each object at json, called 
          'contact' object */}
            {contacts.map((contact) => (

              <Fragment>
                {editContactId === contact.id ?
                  (<EditableRow
                    editFormData = {editFormData}
                    handleEditFormChange={handleEditFormChange}
                  ></EditableRow>) :
                  (<ReadOnlyRow contact={contact}
                    handleEditClick = {handleEditClick}
                  />)}



              </Fragment>

            ))}
          </tbody>
        </table>
      </form>

      <h1>add a contact</h1>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder='Enter a name...'
          onChange={handleAddFormData}
        ></input>
        <input
          type="text"
          name="address"
          required="required"
          placeholder='Enter a address...'
          onChange={handleAddFormData}
        ></input>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder='Enter a phone nubmer...'
          onChange={handleAddFormData}
        ></input>
        <input
          type="text"
          name="email"
          required="required"
          placeholder='Enter a email...'
          onChange={handleAddFormData}
        ></input>
        <button type="submit" >Add New Contact</button>
      </form>
    </div>
  );
}

export default App;
