import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../../redux/filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const searchableLine = filter?.toLowerCase();
    if (searchableLine) {
      return contacts.filter((contact) => {
        return (
          contact?.name.toLowerCase().includes(searchableLine) ||
          contact?.number.includes(searchableLine)
        );
      });
    } else {
      return contacts;
    }
  }
);