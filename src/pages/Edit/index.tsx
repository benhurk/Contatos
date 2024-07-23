import { Container as SideBar } from "../../containers/Sidebar/styled";
import { Container as Form, Title as SideBarTitle } from '../../components/AddForm/styled';
import { Container as ContactContainer, Description, TagsArea, TitleArea, Title } from '../../components/Contact/styled';
import { Camp, Label } from "../../components/InputCamp";
import Input from "../../styles/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { useParams } from "react-router-dom";
import { ListContainer } from "../../containers/List/styled";
import { Fragment } from "react/jsx-runtime";
import Tags from "../../components/Tags";
import tagIcons from "../../models/tagicons";
import Contact from "../../models/contacts";
import { edit } from "../../store/reducers/contacts";
import { useState } from "react";
import ErrorText from "../../styles/ErrorText";
import { LinkButton } from "../../styles/Button";

export default function EditPage() {
    const { contacts } = useSelector((state: RootReducer) => state.persistedReducer);
    const { name } = useParams();
    const dispatch = useDispatch();

    const [error, setError] = useState('');

    const editing: Contact = contacts.items.find((item) => item.name === name) || {
        name: '',
        description: '',
        tags: {
            number: '',
            email: '',
            twitter: '',
            instagram: '',
            facebook: '',
            linkedin: '',
            discord: '',
            other: ''
        },
        id: 0
    };

    const handleNumberInput = (e: any) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }

    const onSave = (e: any) => {
        const newTitle = (document.getElementById('Name') as HTMLInputElement).value;
        const newDescription = (document.getElementById('Info') as HTMLInputElement).value;
        const newNumber = (document.getElementById('Phone') as HTMLInputElement).value;
        const newEmail = (document.getElementById('Email') as HTMLInputElement).value;
        const newTwitter = (document.getElementById('X') as HTMLInputElement).value;
        const newInstagram = (document.getElementById('Instagram') as HTMLInputElement).value;
        const newFacebook = (document.getElementById('Facebook') as HTMLInputElement).value;
        const newLinkedin = (document.getElementById('Linkedin') as HTMLInputElement).value;
        const newDiscord = (document.getElementById('Discord') as HTMLInputElement).value;
        const newOther = (document.getElementById('Other') as HTMLInputElement).value;

        const nameExists = contacts.items.find((item) => (item.name.toLowerCase() === newTitle.toLowerCase()) && (item.name.toLowerCase() !== name?.toLowerCase()));

        const newItem: Contact = {
            name: newTitle,
            description: newDescription,
            tags: {
                number: newNumber,
                email: newEmail,
                twitter: newTwitter,
                instagram: newInstagram,
                facebook: newFacebook,
                linkedin: newLinkedin,
                discord: newDiscord,
                other: newOther
            },
            id: contacts.items.findIndex((item) => item === editing)
        }

        if (!nameExists) {
            dispatch(edit(newItem));
        } else {
            e.preventDefault();
            setError('Um item com esse nome já existe na sua lista!')
        }
    }

    return (
        <>
            <SideBar>
                <Form>
                    <SideBarTitle>Editar</SideBarTitle>
                    <Camp>
                        <Label htmlFor="Name"><i className="bi bi-person-circle"></i></Label>
                        <Input id="Name" placeholder="Nome" defaultValue={editing?.name} />
                    </Camp>
                    <Camp>
                        <Label htmlFor="Info"><i className="bi bi-info-circle"></i></Label>
                        <Input id="Info" placeholder="Descrição" defaultValue={editing?.description} />
                    </Camp>
                    <hr></hr>
                    <Camp>
                        <Label htmlFor="Phone"><i className="bi bi-whatsapp"></i></Label>
                        <Input id="Phone" placeholder="Número" type="tel" defaultValue={editing?.tags.number} onChange={handleNumberInput} />
                    </Camp>
                    <Camp>
                        <Label htmlFor="Email"><i className="bi bi-envelope"></i></Label>
                        <Input id="Email" placeholder="Email" type="email" defaultValue={editing?.tags.email} />
                    </Camp>
                    <Camp>
                        <Label htmlFor="X"><i className="bi bi-twitter-x"></i></Label>
                        <Input id="X" placeholder="Twitter" defaultValue={editing?.tags.twitter} />
                    </Camp>
                    <Camp>
                        <Label htmlFor="Instagram"><i className="bi bi-instagram"></i></Label>
                        <Input id="Instagram" placeholder="Instagram" defaultValue={editing?.tags.instagram} />
                    </Camp>
                    <Camp>
                        <Label htmlFor="Facebook"><i className="bi bi-facebook"></i></Label>
                        <Input id="Facebook" placeholder="Facebook" defaultValue={editing?.tags.facebook} />
                    </Camp>
                    <Camp>
                        <Label htmlFor="Linkedin"><i className="bi bi-linkedin"></i></Label>
                        <Input id="Linkedin" placeholder="Linkedin" defaultValue={editing?.tags.linkedin} />
                    </Camp>
                    <Camp>
                        <Label htmlFor="Discord"><i className="bi bi-discord"></i></Label>
                        <Input id="Discord" placeholder="Discord" defaultValue={editing?.tags.discord} />
                    </Camp>
                    <Camp>
                        <Label htmlFor="Other"><i className="bi bi-link-45deg"></i></Label>
                        <Input id="Other" placeholder="Outro" defaultValue={editing?.tags.other} />
                    </Camp>
                    <LinkButton to={'/'} onClick={onSave} className="btn_green" replace>Salvar</LinkButton>
                    <LinkButton to={'/'} className="btn_red">Cancelar</LinkButton>
                    {
                    error && <ErrorText>{error}</ErrorText>
                    }
                </Form>
            </SideBar>
            <main>
                <ListContainer>
                    {
                        editing
                            ?
                            <ContactContainer>
                                <TitleArea>
                                    <Title>{editing.name}</Title>
                                    <Description>{editing.description}</Description>
                                </TitleArea>
                                <TagsArea>
                                    {
                                        Object.values(editing.tags).map((item, index) => (
                                            item && <Tags key={index} iconClass={tagIcons[index]}>{item}</Tags>
                                        ))
                                    }
                                </TagsArea>
                            </ContactContainer>
                            :
                            <Fragment />
                    }
                </ListContainer>
            </main>
        </>
    )
}