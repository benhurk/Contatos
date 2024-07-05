import Button from "../../styles/Button";
import Input from "../../styles/Input";
import { Camp, Label } from "../InputCamp";
import { Container, Title } from "./styled";

export default function AddForm() {
    return (
        <Container>
            <Title>Adicionar</Title>
            <Camp>
                <Label htmlFor="Name"><i className="bi bi-person-circle"></i></Label>
                <Input id="Name" placeholder="Name" />
            </Camp>
            <Camp>
                <Label htmlFor="Phone"><i className="bi bi-whatsapp"></i></Label>
                <Input id="Phone" placeholder="Número" />
            </Camp>
            <Camp>
                <Label htmlFor="X"><i className="bi bi-twitter-x"></i></Label>
                <Input id="X" placeholder="Twitter" />
            </Camp>
            <Camp>
                <Label htmlFor="Instagram"><i className="bi bi-instagram"></i></Label>
                <Input id="Instagram" placeholder="Instagram" />
            </Camp>
            <Camp>
                <Label htmlFor="Email"><i className="bi bi-envelope-fill"></i></Label>
                <Input id="Email" placeholder="Email" />
            </Camp>
            <Camp>
                <Label htmlFor="Other"><i className="bi bi-link-45deg"></i></Label>
                <Input id="Other" placeholder="Outro" />
            </Camp>
            <Button>Adicionar</Button>
        </Container>
    )
}