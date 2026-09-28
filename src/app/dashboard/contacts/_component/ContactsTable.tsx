import EmptyContacts from "./EmptyContacts";

const ContactsTable = () => {
  const contacts = [];

  if (contacts.length === 0) {
    return <EmptyContacts />;
  }

  return (
    <div className="rounded-xl border bg-white">
      {/* Contacts table will go here */}
    </div>
  );
};

export default ContactsTable;
