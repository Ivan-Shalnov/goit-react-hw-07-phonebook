import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.list;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectMessage = state => state.contacts.message;
export const selectFilter = state => state.filter;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export const selectTotalContactsCount = createSelector(
  [selectContacts],
  contacts => contacts.length
);
