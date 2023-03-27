
import Img1 from "./icons_assets/restauranfood.jpg"

const Header = () => {

    return (
    <div className="header">
            <div id="banner">
                <div>
                <h1 > Little Lemon</h1>
                <h2> Chicago </h2>
                    <p> We are a family owned mediterrannean restaurant,
                        focused on traditional served with a modern twist.
                    </p>
                    <button> Reserve a table </button>
                </div>
                <div>
                <img src= {Img1}/>
                </div>
            </div>
    </div>
    )
}

export default Header;