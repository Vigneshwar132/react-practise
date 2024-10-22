import UserCard from "./components/UserCard"
import "./index.css"
import react from "./assets/react.svg"
import Nilesh from "./assets/Nilesh.jpg"
import Rakesh from "./assets/Rakesh.jpg"
import Srikanth from "./assets/Srikanth.jpg"
import Vignesh from "./assets/Vignesh.jpg"
function App() {
  return (
    <div className="container">
      <UserCard link="https://www.instagram.com/_nileshpatel__/" name="Nilesh" desc="𝐁𝐀𝐁𝐋𝐔 Mahadev❤️ DayTrader📈" image={Nilesh} />
      <UserCard link="https://www.instagram.com/_rakeshnani_/" name="Rakesh" desc="𝘙𝘈𝘒𝘌𝘚𝘏 𝘉𝘖𝘕𝘈𝘎𝘐𝘙𝘐" image={Rakesh} />
      <UserCard link="https://www.instagram.com/srikthh/" name="Srikanth" desc="§ o u l n e e d s p e a c e 🤞🏻." image={Srikanth} />
      <UserCard link="https://www.instagram.com/vigneshwar_rao.s/" name="Vignesh" desc="Vigneshwar_Rao.S" image={Vignesh} />
    </div>
  )
}
export default App