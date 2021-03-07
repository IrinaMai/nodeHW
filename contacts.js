const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.normalize("./db/contacts.json");

const readFile = async (contactsPath) => {
  try {
    const data = await fs.readFile(contactsPath);
    return data.toString();
  } catch (err) {
    console.log(err.message);
  }
};

const writeFile = async (contactsPath, data) => {
  try {
    await fs.writeFile(contactsPath, data);
  } catch (err) {
    console.log(err.message);
  }
};

const listContacts = async () => {
  const data = await readFile(contactsPath);
  console.table(data);
};

function getContactById(contactId) {
  console.log("getContactById");
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  console.log("addContact");
  // ...твой код
}

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
