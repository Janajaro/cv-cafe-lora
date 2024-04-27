import { Drink } from '../Drink';

export const Menu = ({drinks}) => {
  const beverages = drinks.map((beverage) => {
    return <Drink
    id= {beverage.id}
    name= {beverage.name}
    ordered={false}
    image= {"http://localhost:4000" + beverage.image}
    layers= {beverage.layers}
  />
  }
  )

  
  return (
    <section id="menu-id" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
        {beverages}
        </div>
        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  )
}
