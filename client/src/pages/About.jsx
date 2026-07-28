
import React from "react";

const About = () => {
  return (
    <>
    <div
      style={{
        backgroundColor: "#09090b",
        minHeight: "100vh",
        color: "#fff",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          <span
            style={{
              fontSize: "42px",
              fontWeight: "800",
              background: "linear-gradient(90deg, #FFD700 0%, #FF007F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              letterSpacing: "-0.5px",
              filter: "drop-shadow(0px 4px 16px rgba(255, 215, 0, 0.25))",
            }}
          >
            About NamoCart
          </span>
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#cfcfcf",
            lineHeight: "1.8",
            maxWidth: "900px",
            margin: "0 auto 50px",
          }}
        >
          Welcome to <strong style={{ color: "#FFD93D" }}>NamoCart</strong>,
          your trusted online shopping destination where quality meets
          convenience. We offer a wide range of products including fashion,
          electronics, home essentials, beauty products, and much more—all at
          affordable prices. Our mission is to make online shopping fast,
          secure, and enjoyable for every customer.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#18181b",
              padding: "25px",
              borderRadius: "15px",
              width: "300px",
              boxShadow: "0 5px 15px rgba(255,255,255,0.08)",
            }}
          >
            <h2 style={{ color: "#FFD93D", marginBottom: "15px" }}>
              🎯 Our Mission
            </h2>
            <p style={{ color: "#d4d4d4", lineHeight: "1.6" }}>
              To provide customers with high-quality products, affordable
              pricing, and a seamless shopping experience through innovation and
              excellent service.
            </p>
          </div>

          <div
            style={{
              background: "#18181b",
              padding: "25px",
              borderRadius: "15px",
              width: "300px",
              boxShadow: "0 5px 15px rgba(255,255,255,0.08)",
            }}
          >
            <h2 style={{ color: "#FF3CAC", marginBottom: "15px" }}>
              🚚 Fast Delivery
            </h2>
            <p style={{ color: "#d4d4d4", lineHeight: "1.6" }}>
              We ensure quick and reliable delivery with real-time order
              tracking so your favorite products reach your doorstep safely and
              on time.
            </p>
          </div>

          <div
            style={{
              background: "#18181b",
              padding: "25px",
              borderRadius: "15px",
              width: "300px",
              boxShadow: "0 5px 15px rgba(255,255,255,0.08)",
            }}
          >
            <h2 style={{ color: "#FFD93D", marginBottom: "15px" }}>
              💖 Why Choose Us?
            </h2>
            <p style={{ color: "#d4d4d4", lineHeight: "1.6" }}>
              ✔ Premium Quality Products
              <br />
              ✔ Secure Online Payments
              <br />
              ✔ Easy Returns
              <br />
              ✔ 24×7 Customer Support
              <br />
              ✔ Best Deals & Discounts
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "60px",
            background: "linear-gradient(45deg, #FFD93D, #FF3CAC)",
            padding: "35px",
            borderRadius: "20px",
            color: "#111",
          }}
        >
          <h2 style={{ marginBottom: "15px", fontSize: "30px" }}>
            Everything You Need, One Cart.
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              fontWeight: "500",
            }}
          >
            At NamoCart, we believe shopping should be simple, secure, and
            enjoyable. Thank you for choosing us. We are committed to providing
            the best online shopping experience every day.
          </p>
        </div>
      </div>
    </div>
    
    </>
    
    
  );
};

export default About;
