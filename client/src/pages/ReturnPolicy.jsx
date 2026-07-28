import React from "react";

const ReturnPolicy = () => {
  return (
    <div
      style={{
        backgroundColor: "#09090b",
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "#18181b",
          borderRadius: "15px",
          padding: "40px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        }}
      >
        {/* Heading */}
        <h1 style={{ textAlign: "center", marginBottom: "15px" }}>
          <span
            style={{
              fontSize: "40px",
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
            Return & Refund Policy
          </span>
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            fontSize: "17px",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          At <span style={{ color: "#FFD93D" }}>NamoCart</span>, customer
          satisfaction is our priority. If you are not completely satisfied with
          your purchase, you may request a return or refund under the conditions
          below.
        </p>

        {/* Policy Sections */}

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#FFD93D", marginBottom: "10px" }}>
            📦 Return Eligibility
          </h2>

          <p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
            Products can be returned within <strong>7 days</strong> of
            delivery. The item must be unused, undamaged, and returned in its
            original packaging with all accessories, tags, and invoices.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#FFD93D", marginBottom: "10px" }}>
            ❌ Non-Returnable Items
          </h2>

          <ul
            style={{
              color: "#d1d5db",
              lineHeight: "2",
              paddingLeft: "20px",
            }}
          >
            <li>Personal care and hygiene products.</li>
            <li>Gift cards and digital products.</li>
            <li>Products damaged due to customer misuse.</li>
            <li>Items returned without original packaging.</li>
          </ul>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#FFD93D", marginBottom: "10px" }}>
            💰 Refund Process
          </h2>

          <p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
            After we receive and inspect your returned product, your refund will
            be processed within <strong>5–7 business days</strong>. The refund
            will be credited to your original payment method.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#FFD93D", marginBottom: "10px" }}>
            🔄 Exchange Policy
          </h2>

          <p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
            If you receive a damaged, defective, or incorrect product, you may
            request a replacement within <strong>48 hours</strong> of delivery
            by contacting our customer support team.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#FFD93D", marginBottom: "10px" }}>
            🚚 Return Shipping
          </h2>

          <p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
            If the return is due to our error (wrong or damaged product),
            NamoCart will bear the shipping cost. For all other returns, return
            shipping charges may apply.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#FFD93D", marginBottom: "10px" }}>
            📞 Need Help?
          </h2>

          <p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
            For return or refund assistance, please contact our customer support
            team with your Order ID. We'll be happy to help resolve your issue
            as quickly as possible.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "40px",
            padding: "25px",
            borderRadius: "12px",
            background: "linear-gradient(45deg, #FFD93D, #FF3CAC)",
            textAlign: "center",
            color: "#111827",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>
            Thank You for Shopping with NamoCart ❤️
          </h3>

          <p
            style={{
              margin: 0,
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "1.7",
            }}
          >
            We value your trust and are committed to providing a smooth,
            transparent, and customer-friendly shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;