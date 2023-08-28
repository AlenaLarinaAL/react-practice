import { Link } from "react-router-dom";
import { ContactsList } from "../../components/ContactsList/ContactsList";
import { Spinner } from "../../components/Loader/Loader";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../redux/contacts/contactsSlice";

export const Contacts = () => {
  const { data: contacts, isFetching, error } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <Link to="/contacts/create">CreateContact</Link>
      {isFetching && <Spinner />}
      {contacts && (
        <ContactsList
          contacts={contacts}
          onDelete={deleteContact}
          deleting={isDeleting}
        />
      )}
      {error && <div>Oh no, there is no available contacts </div>}
    </>
  );
};
