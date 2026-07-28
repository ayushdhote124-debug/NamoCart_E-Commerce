import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Profile.css";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchMyOrders = async () => {
      try {
        const res = await fetch("/api/orders/myorders", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setOrders(Array.isArray(data) ? data : []);
        } else {
          if (res.status === 401) {
            logout();
            navigate("/login");
          }
          setOrders([]);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyOrders();
  }, [user, navigate, logout]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getStatusBadge = (status) => {
    const s = (status || "").toLowerCase().trim();
    if (s === "delivered") {
      return <span className="status-pill status-delivered">Delivered</span>;
    } else if (s === "shipped") {
      return <span className="status-pill status-shipped">Shipped</span>;
    } else {
      return <span className="status-pill status-pending">{status || "Pending"}</span>;
    }
  };

  return (
    <div className="profile-page-wrapper">
      <div className="profile-grid-container">
        {/* Left Column: User Profile Card */}
        <div className="profile-card">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <h2 className="profile-title">{user?.name || "User Profile"}</h2>
          </div>

          <div className="profile-info-group">
            <div className="profile-info-item">
              <span className="profile-info-label">Full Name</span>
              <span className="profile-info-value">{user?.name}</span>
            </div>

            <div className="profile-info-item">
              <span className="profile-info-label">Email Address</span>
              <span className="profile-info-value">{user?.email}</span>
            </div>

            <div className="profile-info-item">
              <span className="profile-info-label">Account Role</span>
              <span className="role-badge">
                {user?.role ? user.role.toUpperCase() : "CUSTOMER"}
              </span>
            </div>
          </div>

          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>

        {/* Right Column: Order History */}
        <div className="history-section">
          <div className="history-header-card">
            <div className="history-title-group">
              <h2>Order History</h2>
              <p className="history-subtitle">View and track all your past purchases</p>
            </div>
            <div className="orders-count-pill">
              {orders.length} {orders.length === 1 ? "Order" : "Orders"}
            </div>
          </div>

          {loading ? (
            <div className="history-loading">
              <div className="spinner"></div>
              <p>Loading your order history...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="empty-history-card">
              <div className="empty-icon">📦</div>
              <h3>No Orders Found</h3>
              <p>You haven't placed any orders yet. Explore our products and start shopping!</p>
              <Link to="/shop" className="shop-cta-btn">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order._id} className="order-card">
                  <div className="order-card-header">
                    <div>
                      <div className="order-id-badge">
                        ORDER <span className="order-id-highlight">#{order._id}</span>
                      </div>
                      <div className="order-date">
                        Placed on {new Date(order.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    {getStatusBadge(order.status)}
                  </div>

                  {order.items && order.items.length > 0 && (
                    <div className="order-items-container">
                      {order.items.map((item, idx) => (
                        <div key={item._id || idx} className="order-item-row">
                          <div className="order-item-info">
                            <span className="order-item-name">
                              {item.productId?.name || "Product Item"}
                            </span>
                            <span className="order-item-qty">x{item.qty}</span>
                          </div>
                          <span className="order-item-price">
                            ₹{item.price ? Number(item.price).toLocaleString('en-IN') : "0"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="order-card-footer">
                    <div className="address-summary">
                      {order.address?.city && (
                        <span>Deliver to: {order.address.city}, {order.address.country || 'India'}</span>
                      )}
                    </div>
                    <div className="order-total-group">
                      <span className="total-label">Total Amount:</span>
                      <span className="total-amount">
                        ₹{Number(order.totalAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;