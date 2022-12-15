import React from "react";

type Props = {
    text: string;
};

function Header2(props: Props) {
    return <h2>{props.text}</h2>;
}

export default Header2;
