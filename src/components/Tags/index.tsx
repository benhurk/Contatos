import { ReactNode } from "react";
import Tag from "./styled";

type Props = {
    children: ReactNode;
    iconClass: string;
}

export default function Tags(props: Props) {
    return(
        <Tag>
            <i className={props.iconClass}></i> {props.children}
        </Tag>
    )
}