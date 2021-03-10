const fs = require("fs").promises;
const path = require("path");
var uniqid = require("uniqid");

const contactsPath = path.normalize("./db/contacts.json");

async function listContacts() {
  try {
    const list = await fs.readFile(contactsPath);
    console.table(JSON.parse(list.toString()));
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const list = await fs.readFile(contactsPath);
    console.table(
      JSON.parse(list.toString()).find((item) => item.id === contactId)
    );
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const result = await fs.readFile(contactsPath);
    const list = JSON.parse(result.toString());
    const corrList = list.filter((item) => item.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(corrList));
    console.table(corrList);
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  const newContact = { name, email, phone, id: uniqid() };
  try {
    const result = await fs.readFile(contactsPath);
    const list = JSON.parse(result.toString());
    list.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(list));
    console.table(list);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
