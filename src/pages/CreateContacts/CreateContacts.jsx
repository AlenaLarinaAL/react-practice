import { useCreateContactMutation } from "../../redux/contacts/contactsSlice";
// import { Spinner } from "../../components/Loader/Loader";

export const CreateContacts = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    e.currentTarget.reset();
    try {
      await createContact({ name, number });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Number
          <input type="tel" name="number" />
        </label>

        <button type="submit" disabled={isLoading}>
          Create
        </button>
        {/* <button type="submit" disabled={isLoading}>
          {isLoading && <Spinner size={12} />}Create
        </button> */}

        {/* <button type="submit">{isLoading ? <Spinner /> : "Create"}</button> */}
      </form>
    </>
  );
};
