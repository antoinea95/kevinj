import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faTiktok, faYoutube} from '@fortawesome/free-brands-svg-icons';

const instagram = <FontAwesomeIcon icon={faInstagram} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const tiktok = <FontAwesomeIcon icon={faTiktok} />



export default function Social() {
    return (
        <div className='social'>
                <a aria-label="Lien vers instagram de Kevin" href='https://www.instagram.com/jikiboy_/?hl=fr' target="blank"> {instagram}</a>
                <a aria-label=" Lien vers Youtube de Kevin" href='https://www.youtube.com/@diogene8239' target="blank"> {youtube} </a>
                <a aria-label=" Lien vers Tiktok de Kevin" href='https://www.tiktok.com/@jikiboy25' target="blank"> {tiktok} </a>
        </div>
    )
}