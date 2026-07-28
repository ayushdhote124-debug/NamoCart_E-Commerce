import React from "react";

const Disclaimer = () => {
  return (
    <div
      style={{
        backgroundColor: "#09090b",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "#18181b",
          padding: "40px",
          borderRadius: "15px",
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
            Disclaimer
          </span>
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#b3b3b3",
            fontSize: "17px",
            marginBottom: "40px",
          }}
        >
          Please read this disclaimer carefully before using NamoCart.
        </p>

        {/* Section 1 */}
        <div style={{ marginBottom: "30px" }}>
          <h2
            style={{
              color: "#FFD93D",
              marginBottom: "10px",
            }}
          >
            1. General Information
          </h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            All information provided on NamoCart is for general informational
            purposes only. While we strive to keep product details accurate and
            up to date, we do not guarantee the completeness, reliability, or
            accuracy of any information displayed on the website.
          </p>
        </div>

        {/* Section 2 */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#FFD93D", marginBottom: "10px" }}>
            2. Product Information
          </h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            Product images are for illustration purposes only. The actual
            product color, design, packaging, or specifications may vary
            slightly depending on the manufacturer.
          </p>
        </div>

        {/* Section 3 */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#FFD93D", marginBottom: "10px" }}>
            3. Pricing & Availability
          </h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            Prices, discounts, and product availability are subject to change
            without prior notice. NamoCart reserves the right to correct pricing
            errors and cancel orders when necessary.
          </p>
        </div>

        {/* Section 4 */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#FFD93D", marginBottom: "10px" }}>
            4. External Links
          </h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            Our website may contain links to third-party websites. We are not
            responsible for the content, privacy practices, or policies of those
            external websites.
          </p>
        </div>

        {/* Section 5 */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#FFD93D", marginBottom: "10px" }}>
            5. Limitation of Liability
          </h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            NamoCart shall not be liable for any direct, indirect, incidental,
            or consequential damages resulting from the use of our website,
            products, or services.
          </p>
        </div>

        {/* Section 6 */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#FFD93D", marginBottom: "10px" }}>
            6. Contact Us
          </h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            If you have any questions regarding this Disclaimer, please contact
            our support team through the Contact Us page.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            textAlign: "center",
            borderRadius: "10px",
            background: "linear-gradient(45deg, #FFD93D, #FF3CAC)",
            color: "#111",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          By using NamoCart, you acknowledge that you have read, understood,
          and agreed to this Disclaimer.
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;