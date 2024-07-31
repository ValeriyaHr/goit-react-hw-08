import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectFilter } from "./filtersSlice";

const pendingReduces = (state) => {
  state.loading = true;
};

const rejectedReduces = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

const contactInitialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, pendingReduces)
      .addCase(fetchContacts.rejected, rejectedReduces)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addContact.pending, pendingReduces)
      .addCase(addContact.rejected, rejectedReduces)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(deleteContact.pending, pendingReduces)
      .addCase(deleteContact.rejected, rejectedReduces)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      });
  },
});

export const contactsReduser = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const searchableLine = filter?.toLowerCase();
    if (searchableLine) {
      return contacts.filter((contact) => {
        return contact?.name.toLowerCase().includes(searchableLine);
      });
    } else {
      return contacts;
    }
  }
);