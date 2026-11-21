import Solucion from './soluciones/Solucion.tsx';
import Banner from './headers/Banner_sol.tsx';
import Nav from '../Nav.tsx';
import Heads from './head_imports.tsx';

function Soluciones() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <head>
                <meta charSet="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                <title>Soluciones | Ingeniería IoT</title>
                <Heads/>
            </head>
            <header>
                <Nav/>
                <Banner/>
            </header>
            <Solucion />
        </>);

}
export default Soluciones;
