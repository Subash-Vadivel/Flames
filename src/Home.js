import './resources/css/Home.css';
import Header from './Header';
import Footer from './Footer';
import Love from './Love';
function Home()
{
    return(<>
    <header>
    <Header/>
    </header>
    <main>
        <Love/>
    </main>
    <footer>
        <Footer/>
    </footer>
    </>);

}
export default Home;