import { createContext } from 'react';

const UserContact = createContext({
    user:{
        name:"Hari",
        email:"hari9923@gmail.com"
    }
})

UserContact.displayName = "UserContact";

export default UserContact;