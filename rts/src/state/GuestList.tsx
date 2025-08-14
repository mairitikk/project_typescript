import { useState } from "react";


const GuestList: React.FC = () => {
const [name, setName] = useState('');
const [guests, setGuests] = useState([]);

    return <div>
       <h3>Guest List</h3> 
       <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
       <button> Add Guest</button>

        </div>
}
export default GuestList;