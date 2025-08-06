import ArgumentsCard from '../../../components/main/agrumentsCard/agrumentsCard'
import { ways } from '../../../components/main/agrumentsCard/argumentsData'
import Zagolovok from '../../../components/main/zagolovok/zagolovok'
import DonarBlock from '../../../components/main/donarBlock/donarBlock'
import Slider from '../../../components/main/slider/slider'
import Facts from '../../../components/main/facts/facts'

function HomePage() {
    return (
        <>
            <Zagolovok />
            <br /><br /><br />
            <div className="container">
                <ArgumentsCard argument={ways[0]} />
                <ArgumentsCard argument={ways[1]} />
                <ArgumentsCard argument={ways[2]} />
            </div>
            <br /><br />
            <Facts />
            <br /><br />
            <Slider/>
            <br /><br />
            <DonarBlock />
        </>
    );
}

export default HomePage;