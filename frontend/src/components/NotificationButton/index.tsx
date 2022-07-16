import axios from 'axios';
import icon from'../../assets/img/Vector.svg';
import { BASE_URL } from '../../utills/request';
import '../style.css';

type props = {
    saleId: number;
}
function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
          console.log("SUCESSO")
    })
}
function NotificationButton({saleId} : props) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notificar" />    
         </div>
    )
    }
    
    export default NotificationButton;