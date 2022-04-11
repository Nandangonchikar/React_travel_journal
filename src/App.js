import './style.css';
import Navbar from './components/navbar.js'
import Card from './components/card.js'
import data from './data.js'

function App() {
  const cardElements=data.map((item,key) => 
                   <>  <Card
                          key={key}
                          item={item} 
                      />
                     <hr/>
                    </>
                   )


    return (
            <div>
              <Navbar />
              {cardElements}
              </div>
            );
}

export default App;
