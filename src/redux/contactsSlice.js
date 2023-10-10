import { createSlice, nanoid } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [] },
    reducers:
    {
        addContact: {
            reducer(state, action) {

                state.contacts.push(action.payload)
            },
            prepare(dataForm) {

                return {
                    payload: {
                        ...dataForm,
                        id: nanoid(),

                    },
                }
            }
        },
        deleteContact: {
            reducer(state, action) {

                return { contacts: state.contacts.filter(contact => contact.id !== action.payload) }
            },


        }
    },



})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;