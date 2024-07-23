import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/reducers/contacts";

import Button from "../../styles/Button";
import Input from "../../styles/Input";
import { Camp, Label } from "../InputCamp";
import { Container, Title } from "./styled";
import Contact from "../../models/contacts";
import { RootReducer } from "../../store";
import ErrorText from "../../styles/ErrorText";

export default function AddForm() {
    const { contacts } = useSelector((state: RootReducer) => state.persistedReducer);
    const dispatch = useDispatch();

    const [error, setError] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();

        const title = (document.getElementById('Name') as HTMLInputElement).value;
        const description = (document.getElementById('Info') as HTMLInputElement).value;
        const number = (document.getElementById('Phone') as HTMLInputElement).value;
        const email = (document.getElementById('Email') as HTMLInputElement).value;
        const twitter = (document.getElementById('X') as HTMLInputElement).value;
        const instagram = (document.getElementById('Instagram') as HTMLInputElement).value;
        const facebook = (document.getElementById('Facebook') as HTMLInputElement).value;
        const linkedin = (document.getElementById('Linkedin') as HTMLInputElement).value;
        const discord = (document.getElementById('Discord') as HTMLInputElement).value;
        const other = (document.getElementById('Other') as HTMLInputElement).value;

        const newItem: Contact = {
            name: title,
            description: description,
            tags: {
                number: number,
                email: email,
                twitter: twitter,
                instagram: instagram,
                facebook: facebook,
                linkedin: linkedin,
                discord: discord,
                other: other
            },
            id: contacts.items.length
        }
        
        const nameExists = contacts.items.find((item) => item.name.toLowerCase() === newItem.name);

        if (!nameExists) {
            dispatch(add(newItem));
            e.target.reset();

            if (error) {
                setError('');
            }
        } else {
            setError(`${newItem.name} já está na sua lista!`);
        }
    }

    const handleNumberInput = (e: any) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }

    return (
        <Container onSubmit={onSubmit}>
            <Title>Adicionar</Title>
            <Camp>
                <Label htmlFor="Name"><i className="bi bi-person-circle"></i></Label>
                <Input className="add_new-input" id="Name" placeholder="Nome" required />
            </Camp>
            <Camp>
                <Label htmlFor="Info"><i className="bi bi-info-circle"></i></Label>
                <Input className="add_new-input" id="Info" placeholder="Descrição" />
            </Camp>
            <hr></hr>
            <Camp>
                <Label htmlFor="Phone"><i className="bi bi-whatsapp"></i></Label>
                <Input className="add_new-input" id="Phone" placeholder="Número" type="tel" onChange={handleNumberInput} />
            </Camp>
            <Camp>
                <Label htmlFor="Email"><i className="bi bi-envelope"></i></Label>
                <Input className="add_new-input" id="Email" placeholder="Email" type="email" />
            </Camp>
            <Camp>
                <Label htmlFor="X"><i className="bi bi-twitter-x"></i></Label>
                <Input className="add_new-input" id="X" placeholder="Twitter" />
            </Camp>
            <Camp>
                <Label htmlFor="Instagram"><i className="bi bi-instagram"></i></Label>
                <Input className="add_new-input" id="Instagram" placeholder="Instagram" />
            </Camp>
            <Camp>
                <Label htmlFor="Facebook"><i className="bi bi-facebook"></i></Label>
                <Input className="add_new-input" id="Facebook" placeholder="Facebook" />
            </Camp>
            <Camp>
                <Label htmlFor="Linkedin"><i className="bi bi-linkedin"></i></Label>
                <Input className="add_new-input" id="Linkedin" placeholder="Linkedin" />
            </Camp>
            <Camp>
                <Label htmlFor="Discord"><i className="bi bi-discord"></i></Label>
                <Input className="add_new-input" id="Discord" placeholder="Discord" />
            </Camp>
            <Camp>
                <Label htmlFor="Other"><i className="bi bi-link-45deg"></i></Label>
                <Input className="add_new-input" id="Other" placeholder="Outro" />
            </Camp>
            <Button>Adicionar</Button>
            {error && <ErrorText>{error}</ErrorText>}
        </Container>
    )
}