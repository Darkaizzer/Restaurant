
import About from './About/About'
import Hero from './Hero/Hero'
import OfterOrder from './OftenOrder/OfterOrder'
import Slide from './Slider/Slide'
const Main = ({db,setDb,onAddData}) => {
    return (
        <main>
   <About/>
    <Slide/>
   <Hero/>
        <OfterOrder db={db} setDb={setDb} onAddData={onAddData} />
  </main>
    )
}
export default Main