import React, { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";
import "../styles/Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let data = [...products];

    if (category !== "All") {
      data = data.filter(
        (item) => item.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(data);
  }, [products, search, category, sort]);

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "auto",
        padding: "40px 20px",
        color: "white",
      }}
    >
      <h1 className="shop-title-container">
        <span className="shop-title-gradient">
          Shop
        </span>
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#b3b3b3",
          marginBottom: "35px",
        }}
      >
        Discover premium products at unbeatable prices.
      </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            minWidth: "250px",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #444",
            outline: "none",
            background: "#18181b",
            color: "white",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "10px",
            background: "#18181b",
            color: "white",
            border: "1px solid #444",
          }}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessories">Accessories</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "10px",
            background: "#18181b",
            color: "white",
            border: "1px solid #444",
          }}
        >
          <option value="">Sort By</option>
          <option value="low">Price : Low → High</option>
          <option value="high">Price : High → Low</option>
        </select>
      </div>

      {loading ? (
        <h2 style={{ textAlign: "center" }}>Loading Products...</h2>
      ) : filteredProducts.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>No Products Found</h2>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCards key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;