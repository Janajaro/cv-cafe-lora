import { render } from '@czechitas/render';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
import { Gallery } from '../components/Gallery';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);
