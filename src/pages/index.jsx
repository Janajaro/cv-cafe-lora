import { render } from '@czechitas/render';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
import { Gallery } from '../components/Gallery';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import '../global.css';
import './index.css';

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

const btn = document.querySelector('.nav-btn');
const btnFun = () => {
  const btnMenu = document.querySelector('.rollout-nav');
  btnMenu.classList.toggle('nav-closed');
};
btn.addEventListener('click', btnFun);

const rolloutBtn = document.querySelector('.rollout-nav');
const rolloutFun = () => {
  rolloutBtn.classList.add('nav-closed');
};
rolloutBtn.addEventListener('click', rolloutFun);
