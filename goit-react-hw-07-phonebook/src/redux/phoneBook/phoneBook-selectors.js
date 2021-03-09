import { createSelector } from '@reduxjs/toolkit';

// const getContacts = (state) => state.phoneBook.contacts;

const getFilter = (state) => state.phoneBook.filter;

const getAllContacts = (state) => state.phoneBook.contacts;

const getFilteredContactsList = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getFilter,
  getAllContacts,
  getFilteredContactsList,
};

// const getFilteredContactsList = (state) => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
