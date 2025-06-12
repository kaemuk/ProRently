import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/ProRentlogo.png" alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Хэрэг болох линк</h3>
        <ul>
          <li>Бидний тухай</li>
          <li>Үйлчилгээний нөхцөл</li>
          <li>Буцаах болон буцаан олгох бодлого</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+976 88951944</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>Orgiljyn@gmail.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer