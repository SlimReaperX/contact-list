import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const result = await response.json();
  const arr = [result]
  //takes object and puts it in array, the results
        setContact(arr);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  //calling it once with [] when it renders
  console.log(contact)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contact.map((contact) => {
            //going through array with contactrow
            return <ContactRow key={contact.id} contact={contact} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
