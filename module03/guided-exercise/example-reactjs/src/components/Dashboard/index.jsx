import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import getNewTimestamp from "../../utils/util"

export function Dashboard() {
    const [clickArray, setClickArray] = useState([]);

    useEffect(() => {
        document.title = clickArray.length;
    });

    const handleClick = () => {
        const updatedArray = [...clickArray, getNewTimestamp()];
        setClickArray(updatedArray);
    }

    return (
        <Container>
            <button onClick={handleClick}>time_stamp</button>
            <hr />
            <Content>
                {clickArray.map(item => <li key={Math.random()}>{item}</li>)}
            </Content>
        </Container >
    )
}