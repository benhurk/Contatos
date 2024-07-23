import { useDispatch, useSelector } from "react-redux";
import AddForm from "../../components/AddForm";
import { Camp, Label } from "../../components/InputCamp";
import Input from "../../styles/Input";
import {Container} from "./styled";
import { RootReducer } from "../../store";
import { searchFor } from "../../store/reducers/search";

export default function Sidebar() {
    const dispatch = useDispatch();
    const { search } = useSelector((state: RootReducer) => state);

    return (
        <Container>
            <Camp>
                <Label htmlFor="search"><i className="bi bi-search"></i></Label>
                <Input id="search" placeholder="Buscar" value={search.term} onChange={e => dispatch(searchFor(e.target.value))} />
            </Camp>
            <AddForm />
        </Container>
    )
}