import "./app.css";
import "./global.css";
import Header from "./components/header/header";
import ShopItem from "./components/shopItem/shopItem";
import {allProducts} from "./hardcode/products";


function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <Header/>

                <div className="content">
                    {allProducts.map(product => <ShopItem key={product.name}
                                                          name={product.name}
                                                          price={product.price}
                                                          src={product.img}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
