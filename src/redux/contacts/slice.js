import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";
import toast from "react-hot-toast";

const pendingReduces = (state) => {
  state.loading = true;
};

const rejectedReduces = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

export const contactInitialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactInitialState,
  reducers: {
    cleanUpContacts: () => contactInitialState,
  },
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
        toast.success("Contact added successfully!");
      })
      .addCase(deleteContact.pending, pendingReduces)
      .addCase(deleteContact.rejected, rejectedReduces)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
        toast.success("Contact deleted successfully!");
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export const contactsReduser = contactsSlice.reducer;
export const { cleanUpContacts } = contactsSlice.actions;