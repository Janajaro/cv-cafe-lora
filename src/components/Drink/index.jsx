import { Layer } from '../Layer';
import './style.css';
export const Drink = ({ name, image, layers, id, ordered }) => {
  console.log("vrstvy",layers)
  const piti = layers.map((vrstva) => {
return <Layer color={vrstva.color} label={vrstva.label} />
  })
  return (
   
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {piti}
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button className="order-btn">Objednat</button>
      </form>
    </div>
  );
};
