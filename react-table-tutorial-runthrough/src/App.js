import logo from './logo.svg';
import './App.css';
import React , {useState}from "react";
import data from "./mock-data.json";

function App() {

  const [contacts, setContacts] = useState(data);

  return (
    <div className="app-container">
      table
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* as we use map, we access each object at json, called 
          'contact' object */}
          {contacts.map((contact)=> (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}

          
        </tbody>


      </table>
    </div>
  );
}

export default App;
