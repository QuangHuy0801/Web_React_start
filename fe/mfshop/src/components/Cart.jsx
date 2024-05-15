import React, { useState, useEffect } from "react";
import { cartOfUser } from "../services/CartService";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const user = JSON.parse(sessionStorage.getItem('user'));

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await cartOfUser(user.id);
        calculateTotal(response.data);
        setCartItems(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    if (user) {
      fetchCart();
    }
  }, [user]);
  const calculateTotal = (items) => {
    let totalPrice = 0;
    items.forEach(item => {
      totalPrice += item.product.price * item.count;
    });
    setTotal(totalPrice);
  };

  const handleDeleteCartItem = async (itemId) => {
    // Xử lý xóa mục khỏi giỏ hàng
    try {
      // Gọi API hoặc thực hiện hành động xóa
      console.log(`Deleting item with ID: ${itemId}`);
    } catch (error) {
      console.error('Error deleting item from cart:', error);
    }
  };

  const handleUpdateCart = async () => {
    // Xử lý cập nhật giỏ hàng
    try {
      // Gọi API hoặc thực hiện hành động cập nhật
      console.log('Updating cart...');
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  return (
    <section className="shopping-cart spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="shopping__cart__table">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product__cart__item">
                        <div style={{maxWidth: '90px', maxHeight: '90px'}} className="product__cart__item__pic">
                          <img src={item.product.productImage[0].url_Image} alt="" />
                        </div>
                        <div className="product__cart__item__text">
                          <h6>{item.product.product_Name}</h6>
                          <h5>{item.product.price.toLocaleString('en-US')} VNĐ</h5>
                        </div>
                      </td>
                      <td className="quantity__item">
                        <div className="quantity">
                          <div className="pro-qty-2">
                            <input name={`count${index}`} type="number" value={item.count} />
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">{(item.product.price * item.count).toLocaleString('en-US')} VNĐ</td>
                      <td className="cart__close">
                        <button onClick={() => handleDeleteCartItem(item.id)}><i className="fa fa-close"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="continue__btn">
                  <a href="/shop">Continue Shopping</a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="continue__btn update__btn">
                  <button onClick={handleUpdateCart}>
                    <i className="fa fa-spinner"></i> Update cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cart__discount">
              <h6>Discount codes</h6>
              <input type="text" placeholder="Coupon code" />
              <button type="submit">Apply</button>
            </div>
            <div className="cart__total">
              <h6>Cart total</h6>
              <ul>
                <li>Customer <span>{user && user.user_Name}</span></li>
                <li>Total <span>{total.toLocaleString('en-US')} VNĐ</span></li>
              </ul>
              <a href="/checkout" className="primary-btn">Proceed to checkout</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
