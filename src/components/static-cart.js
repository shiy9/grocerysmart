import "./css/static-cart.css";
import img_banana from "../data/images/banana.PNG";
import img_apple from "../data/images/apple.PNG";
import img_milk from "../data/images/milk-rand.PNG";
import img_oatmeal from "../data/images/oatmeal.PNG";
import img_beef from "../data/images/beef.PNG";
import img_chicken from "../data/images/chicken.PNG";
import img_rubishbox from "../data/images/rubishbox.png";
import img_heart from "../data/images/heart.png";

function StaticCart() {
  return (
    <>
      <div className="App">
        <span className="left_layout">
          <span className="generic_specific_text">
            Generic Items in Your Cart:
          </span>
          <span className="generic">
            <img src={img_banana} alt="" className="img_setting" />
            <span className="text_position">
              <span className="item_text">Bananas(Dozen)</span>
              <span className="select_number">
                <select className="select_text">
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                  <option>Qty: 4</option>
                  <option>Qty: 5</option>
                </select>
              </span>
              <img src={img_rubishbox} alt="" className="rubishbox" />
              <img src={img_heart} alt="" className="heart" />
            </span>
          </span>
          <span className="generic">
            <img src={img_apple} alt="" className="img_setting" />
            <span className="text_position">
              <span className="item_text">Red Apples</span>
              <span className="select_number">
                <select className="select_text">
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                  <option>Qty: 4</option>
                  <option>Qty: 5</option>
                </select>
              </span>
              <img src={img_rubishbox} alt="" className="rubishbox" />
              <img src={img_heart} alt="" className="heart" />
            </span>
          </span>
          <span className="generic">
            <img src={img_milk} alt="" className="img_setting" />
            <span className="text_position">
              <span className="item_text">Whole Milk</span>
              <span className="select_number">
                <select className="select_text">
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                  <option>Qty: 4</option>
                  <option>Qty: 5</option>
                </select>
              </span>
              <img src={img_rubishbox} alt="" className="rubishbox" />
              <img src={img_heart} alt="" className="heart" />
            </span>
          </span>
          <span className="generic">
            <img src={img_oatmeal} alt="" className="img_setting" />
            <span className="text_position">
              <span className="item_text">Oatmeal</span>
              <span className="select_number">
                <select className="select_text">
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                  <option>Qty: 4</option>
                  <option>Qty: 5</option>
                </select>
              </span>
              <img src={img_rubishbox} alt="" className="rubishbox" />
              <img src={img_heart} alt="" className="heart" />
            </span>
          </span>
        </span>

        <span className="right_layout">
          <span className="generic_specific_text">
            Specific Items in Your Cart:
          </span>
          <span className="specific_grocery_store">Trader Joe's</span>
          <span className="specific">
            <img src={img_beef} alt="" className="img_setting" />
            <span className="text_position">
              <span className="item_text">Japanese A5 Wagyu</span>
              <span className="select_number">
                <select className="select_text">
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                  <option>Qty: 4</option>
                  <option>Qty: 5</option>
                </select>
              </span>
              <img src={img_rubishbox} alt="" className="rubishbox" />
              <img src={img_heart} alt="" className="heart" />
              <span className="price_text">$29.88</span>
            </span>
          </span>
          <span className="specific">
            <img src={img_chicken} alt="" className="img_setting" />
            <span className="text_position">
              <span className="item_text">Organic A5 Chicken Grill</span>
              <span className="select_number">
                <select className="select_text">
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                  <option>Qty: 4</option>
                  <option>Qty: 5</option>
                </select>
              </span>
              <img src={img_rubishbox} alt="" className="rubishbox" />
              <img src={img_heart} alt="" className="heart" />
              <span className="price_text">$29.88</span>
            </span>
          </span>
          <span className="specific_grocery_store">Westside Market</span>
          <span className="specific">
            <img src={img_beef} alt="" className="img_setting" />
            <span className="text_position">
              <span className="item_text">Japanese A5 Wagyu Beef</span>
              <span className="select_number">
                <select className="select_text">
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                  <option>Qty: 4</option>
                  <option>Qty: 5</option>
                </select>
              </span>
              <img src={img_rubishbox} alt="" className="rubishbox" />
              <img src={img_heart} alt="" className="heart" />
              <span className="price_text">$29.88</span>
            </span>
          </span>
          <button className="button_add_item">
            Add more Item to the cart!
          </button>
          <br></br>
          <button className="button_compare_price">
            Compare Price across Different Stores
          </button>
        </span>
      </div>
    </>
  );
}

export default StaticCart;
