import AddForm from "../../components/AddForm";
import { Camp, Label } from "../../components/InputCamp";
import Input from "../../styles/Input";
import {Container} from "./styled";

export default function Sidebar() {
    return (
        <Container>
            <Camp>
                <Label htmlFor="search"><i className="bi bi-search"></i></Label>
                <Input id="search" placeholder="Buscar" />
            </Camp>
            <AddForm />
        </Container>
    )
}