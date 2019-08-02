import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const ContactState = props => {
  const initState = {
    contacts: [
      {
        id: 1,
        name: 'abdo hassan',
        email: 'abdo@abdo.com',
        phone: '111-111-111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'ali ahmed',
        email: 'ali@ali.com',
        phone: '222-222-222',
        type: 'professional'
      },
      {
        id: 3,
        name: 'karem nader',
        email: 'karem@karem.com',
        phone: '333-333-333',
        type: 'personal'
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initState);

  // add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // delete contact
  // set current contact
  // clear current contact
  // update
  // filter contacts
  // clear filter
  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
