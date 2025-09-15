    // Bai 2: Doi Mau Nen //
import { useState } from "react"
import '../App.css'

function DoiMauNen() {
    const [color, setColor] = useState("")
    return (
        <div className='button'>
            <button onClick={() => setColor("red")}>Đỏ</button>
            <button onClick={() => setColor("green")}>Xanh</button>
            <button onClick={() => setColor("yellow")}>Vàng</button>
            <HinhVuong color={color} />
        </div>
    )
}

function HinhVuong(props) {
    return (
        <div style={{ width: '150px', height: '150px', backgroundColor: props.color, border: '1px solid black', marginTop: '20px', marginLeft: '20px' }}>
        </div>
    )
}
export default DoiMauNen;