import Solucion from './soluciones/Solucion.tsx';
import Banner from './headers/Banner_sol.tsx';
import Nav from '../Nav.tsx';

function Soluciones() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <header>
                <Nav/>
                <Banner/>
            </header>
            <Solucion />
        </>);

}
export default Soluciones;
