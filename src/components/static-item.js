import "./css/static-item.css";
import img1 from "../data/images/1.jpg";
import img2 from "../data/images/2.jpg";
import img3 from "../data/images/3.jpg";

function StaticItem() {
  return (
    <>
      <div className="Title">
        <button className="backButton">&lt; Back</button>{" "}
        <span className="productTitle">
          Japanese A5 Wagyu Beef Ribeye Steak 12 oz
        </span>
      </div>
      <div>
        <span className="picturedetail">
          <span className="img">
            <img src={img1} alt="" className="image_setting" />
          </span>
          <span className="small_img">
            <img src={img1} alt="" className="smallimage_setting" />
            <img src={img2} alt="" className="smallimage_setting" />
            <img src={img3} alt="" className="smallimage_setting" />
          </span>
        </span>
        <span className="itemdetail">
          <span className="provider">Provider:</span>
          <span className="storeSelect">
            <select className="selectSize">
              <option>H-mart</option>
              <option>Trade Joe's</option>
              <option>Westside Market</option>
              <option>Target</option>
            </select>
          </span>
          <span className="price">Price: $65.99</span>
          <button className="addToCart">Add To Cart</button>
          <span className="item">Item Details:</span>
          <table>
            <tr>
              <th>Made in:</th>
              <th>Japan</th>
            </tr>
            <tr>
              <td>Unit Qty:</td>
              <td>12 oz</td>
            </tr>
            <tr>
              <td>Brand:</td>
              <td>Japanese A5 Wagyu</td>
            </tr>
            <tr>
              <td>Keep frozen:</td>
              <td>1 year</td>
            </tr>
          </table>
        </span>
      </div>
      <div className="recommand">
        <span className="people_buy">People who buy it also buy:</span>
        <span className="parallel_image">
          <img src={img1} alt="" className="recommand_image" />
          <img src={img2} alt="" className="recommand_image" />
          <img src={img3} alt="" className="recommand_image" />
          <img src={img1} alt="" className="recommand_image" />
          <img src={img2} alt="" className="recommand_image" />
        </span>
        <span className="text_under_picture">
          <span className="text">Australia Wagyu Beef</span>
          <span className="text">Japanese A5 Wagyu</span>
          <span className="text">A5 Wagyu Beef Chuck</span>
          <span className="text">Premium Selection</span>
          <span className="text">Sliced Beef Plate</span>
        </span>
      </div>
    </>
  );
}

export default StaticItem;
