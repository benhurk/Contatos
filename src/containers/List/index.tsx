import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import Contact from "../../components/Contact";
import { ListContainer } from "./styled";

export default function List() {
    const { contacts } = useSelector((state: RootReducer) => state.persistedReducer);
    const { search } = useSelector((state: RootReducer) => state);

    const filteredContacts = () => {
        return contacts.items.filter(item => {
            return String(Object.values(item)).toLowerCase().includes(search.term.toLowerCase()) || String(Object.values(item.tags)).toLowerCase().includes(search.term.toLowerCase());
        })
    }

    return (
        <ListContainer>
            {
                filteredContacts().map((item) => (
                    <li key={item.name}>
                        <Contact name={item.name} description={item.description} tags={{
                            number: item.tags?.number,
                            email: item.tags?.email,
                            twitter: item.tags?.twitter,
                            instagram: item.tags?.instagram,
                            facebook: item.tags?.facebook,
                            linkedin: item.tags?.linkedin,
                            discord: item.tags?.discord,
                            other: item.tags?.other
                        }} />
                    </li>
                ))
            }
        </ListContainer>
    )
}