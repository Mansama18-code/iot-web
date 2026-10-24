import './Home.css';

import './tailwind-configs.js';
import '../Nav.css';
import Nav from '../Nav.tsx';
import Banners from './Banners.tsx';
import Monitor from './Monitor.tsx';
import Valor from './Valor.tsx';
import Servicios from './Servicios.tsx';
import Footer from '../Footer.tsx';



function Home() {
    // const [count, setCount] = useState(0)
  
    return (
        <>
            <head>    
                <title>Ingeniería IOT</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/png" href="/ingenieria_logo.png" />
                
                <link href="https://fonts.googleapis.com" rel="preconnect"/>
                <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
                
                <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
             

            </head>
            
            <header className="w-full bg-white border-b border-gray-100 top-0 z-50 ">
                <div >
                
                    <Nav/>
                    <Banners/>
                    
                 </div>
                 
            </header>
            <div>
                <Monitor />
                <Valor />
                <Servicios />
            </div>
            <Footer />
        
            
                

            



        </>
    )
};
export default Home;