import { render } from '@czechitas/render';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
import { Gallery } from '../components/Gallery';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Menu } from '../components/menu';
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
  </div>,
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
