import { useDispatch } from "react-redux";
import { remove } from "../../store/reducers/contacts";

import { ButtonRed, LinkButton } from "../../styles/Button";
import Tags from "../Tags";
import { ButtonsArea, Container, Description, TagsArea, Title, TitleArea } from "./styled";
import { Fragment } from "react/jsx-runtime";
import tagIcons from "../../models/tagicons";

type Props = {
    name: string;
    description: string;
    tags: {
        number?: string,
        email?: string,
        twitter?: string,
        instagram?: string,
        facebook?: string,
        linkedin?: string,
        discord?: string,
        other?: string
    }
}

export default function Contact(props: Props) {
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(remove(props.name));
    }

    return (
        <Container>
            <TitleArea>
                <Title>{props.name}</Title>
                <Description key={props.description}>{props.description}</Description>
            </TitleArea>
            <TagsArea>
                {
                    Object.values(props.tags).map((item, index) => (
                        item ?
                        <Tags key={index} iconClass={tagIcons[index]}>{item}</Tags>
                        :
                        <Fragment key={index}></Fragment>
                    ))
                }
            </TagsArea>
            <ButtonsArea>
                <LinkButton to={`/edit/${props.name}`}>Editar</LinkButton>
                <ButtonRed onClick={deleteItem}>Excluir</ButtonRed>
            </ButtonsArea>
        </Container>
    )
}