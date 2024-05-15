import React, { useEffect, useState } from 'react';
import { listOrder } from '../services/OrderService';

const History = () => {
  const [user] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [orders, setOrders] = useState([]);
  const [ setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await listOrder(user.id);
        setOrders(response.data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    fetchOrders();
  }, [user.id]); // Trigger useEffect when user.id changes

  return (
    <div className="container-fluid mt-5 mb-5" style={{ padding: '0 200px 100px 200px' }}>
      <div className="row">
        <div className="col-md-12">
          <h2>My History</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/home">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">My Profile</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="dashboard-list-box invoices with-icons mt-4 mx-auto">
            <h4>Invoices</h4>
            <ul className="list-group">
              {orders.map((order) => (
                <li key={order.id} className="list-group-item">
                  <i className="list-box-icon sl sl-icon-doc"></i>
                  <strong>{order.order_Item[0].product.product_Name}</strong>
                  {order.order_Item.length > 1 && (
                    <span className="ml-3">
                      {' and ' + (order.order_Item.length - 1) + ' more ...'}
                    </span>
                  )}
                  <ul className="list-group">
                  <li>Order: #{order.id}</li>
                    <li className={order.payment_Method === 'Payment on delivery' ? 'text-primary' : 'text-success'}>
                      {order.payment_Method}
                    </li>
                    <li>Date: {new Date(order.booking_Date).toLocaleDateString()}</li>
                  </ul>
                  <div className="float-right">
                    <a href={`/invoice/${order.id}`} className="btn btn-secondary">View Invoice</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
