import React ,{ useState } from "react"
import {cell} from './game123.module.css'
import Seo from "../components/seo"

const Cell = ({value}) => {
    
    return(<>
        <div className={cell}>{value}</div>
    </>)
}


const GamePage = () => {
    let [cellList, setCellList] = useState(Array(9).fill(null));
    let [cellListHistory, setCellListHistory] = useState([]);
    let cells = cellList.map((_, index) => <Cell value="X" key={index} />);
    return(<>
        <h1>GamePage</h1>
        {cells}
    </>)
}

export default GamePage;



export const Head = () => (<>
    <Seo title="Game page"></Seo>
    <link rel="icon" href="/images/icon.png" type="image/ico" />
</>)