import React from "react";

type Props = {
    text: string;
};

function Header1(props: Props) {
    return <h1>{props.text}</h1>;
}

export default Header1;
