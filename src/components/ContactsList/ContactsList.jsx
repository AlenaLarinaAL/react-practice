export const ContactsList = ({ contacts, onDelete, deleting }) => {
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>name: {contact.name}</p>
            <p>number: {contact.number}</p>
            <button type="button" onClick={() => onDelete(contact.id)}>
              {deleting ? "Deleting....." : "Delete"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
