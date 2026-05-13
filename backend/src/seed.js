import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./models/category.model";
import Product from "./models/product.model";

dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL);
  console.log("Connected. Seeding...");

  await Category.deleteMany();
  await Product.deleteMany();

  const [phone, laptop, tablet] = await Category.insertMany([
    { name: "Điện thoại", slug: "dien-thoai", description: "Điện thoại thông minh" },
    { name: "Laptop", slug: "laptop", description: "Máy tính xách tay" },
    { name: "Máy tính bảng", slug: "may-tinh-bang", description: "Máy tính bảng" },
  ]);

  await Product.insertMany([
    {
      name: "iPhone 16 Pro Max",
      slug: "iphone-16-pro-max",
      description: "iPhone 16 Pro Max với chip A18 Pro, camera 48MP, màn hình 6.9 inch Super Retina XDR.",
      price: 34990000,
      salePrice: 31990000,
      images: [
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
        "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400",
      ],
      category: phone._id,
      stock: 50,
      sold: 320,
      isNew: true,
      isFeatured: true,
      rating: 4.8,
      numReviews: 95,
    },
    {
      name: "Samsung Galaxy S25 Ultra",
      slug: "samsung-galaxy-s25-ultra",
      description: "Samsung Galaxy S25 Ultra với bút S Pen, camera 200MP, màn hình 6.8 inch Dynamic AMOLED.",
      price: 32990000,
      salePrice: 29990000,
      images: [
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
      ],
      category: phone._id,
      stock: 30,
      sold: 210,
      isNew: true,
      isFeatured: true,
      rating: 4.7,
      numReviews: 80,
    },
    {
      name: "Xiaomi 15 Pro",
      slug: "xiaomi-15-pro",
      description: "Xiaomi 15 Pro với chip Snapdragon 8 Elite, camera Leica, sạc 90W.",
      price: 22990000,
      salePrice: 0,
      images: [
        "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400",
      ],
      category: phone._id,
      stock: 45,
      sold: 150,
      isNew: true,
      isFeatured: false,
      rating: 4.6,
      numReviews: 60,
    },
    {
      name: "OPPO Find X8 Pro",
      slug: "oppo-find-x8-pro",
      description: "OPPO Find X8 Pro với camera Hasselblad, sạc SUPERVOOC 80W.",
      price: 28990000,
      salePrice: 25990000,
      images: [
        "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400",
      ],
      category: phone._id,
      stock: 0,
      sold: 95,
      isNew: false,
      isFeatured: true,
      rating: 4.5,
      numReviews: 45,
    },
    {
      name: "MacBook Pro M4 14 inch",
      slug: "macbook-pro-m4-14-inch",
      description: "MacBook Pro M4 với chip Apple M4, màn hình Liquid Retina XDR, pin 22 giờ.",
      price: 49990000,
      salePrice: 46990000,
      images: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      ],
      category: laptop._id,
      stock: 20,
      sold: 180,
      isNew: true,
      isFeatured: true,
      rating: 4.9,
      numReviews: 120,
    },
    {
      name: "Dell XPS 15 9530",
      slug: "dell-xps-15-9530",
      description: "Dell XPS 15 với Intel Core i7 13700H, RAM 16GB, SSD 512GB, màn hình OLED.",
      price: 42990000,
      salePrice: 39990000,
      images: [
        "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400",
      ],
      category: laptop._id,
      stock: 15,
      sold: 120,
      isNew: false,
      isFeatured: true,
      rating: 4.7,
      numReviews: 75,
    },
    {
      name: "ASUS ROG Zephyrus G16",
      slug: "asus-rog-zephyrus-g16",
      description: "Laptop gaming ASUS ROG với RTX 4070, AMD Ryzen 9, tản nhiệt MUX Switch.",
      price: 55990000,
      salePrice: 0,
      images: [
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
      ],
      category: laptop._id,
      stock: 10,
      sold: 80,
      isNew: true,
      isFeatured: false,
      rating: 4.8,
      numReviews: 55,
    },
    {
      name: "iPad Pro M4 11 inch",
      slug: "ipad-pro-m4-11-inch",
      description: "iPad Pro M4 với màn hình OLED Ultra Retina XDR, chip M4 mạnh mẽ.",
      price: 27990000,
      salePrice: 25990000,
      images: [
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
        "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=400",
      ],
      category: tablet._id,
      stock: 25,
      sold: 200,
      isNew: true,
      isFeatured: true,
      rating: 4.8,
      numReviews: 90,
    },
    {
      name: "Samsung Galaxy Tab S10 Ultra",
      slug: "samsung-galaxy-tab-s10-ultra",
      description: "Galaxy Tab S10 Ultra màn hình 14.6 inch Dynamic AMOLED, bút S Pen kèm theo.",
      price: 31990000,
      salePrice: 28990000,
      images: [
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400",
      ],
      category: tablet._id,
      stock: 18,
      sold: 130,
      isNew: false,
      isFeatured: true,
      rating: 4.6,
      numReviews: 70,
    },
  ]);

  // === SẢN PHẨM GIÁ RẺ BỔ SUNG ===
  await Product.insertMany([
    // Dưới 5 triệu
    {
      name: "Realme C67",
      slug: "realme-c67",
      description: "Realme C67 màn hình 6.72 inch 120Hz, chip Snapdragon 685, pin 5000mAh, camera 108MP.",
      price: 4490000, salePrice: 3990000,
      images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"],
      category: phone._id, stock: 80, sold: 420,
      isNew: true, isFeatured: false, rating: 4.3, numReviews: 210,
    },
    {
      name: "OPPO A38",
      slug: "oppo-a38",
      description: "OPPO A38 thiết kế mỏng nhẹ, pin 5000mAh sạc nhanh 33W, màn hình 90Hz.",
      price: 3990000, salePrice: 0,
      images: ["https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400"],
      category: phone._id, stock: 60, sold: 350,
      isNew: false, isFeatured: false, rating: 4.1, numReviews: 180,
    },
    {
      name: "Samsung Galaxy A05s",
      slug: "samsung-galaxy-a05s",
      description: "Samsung Galaxy A05s chip Snapdragon 680, camera 50MP, pin 5000mAh bền bỉ cả ngày.",
      price: 4290000, salePrice: 3790000,
      images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400"],
      category: phone._id, stock: 45, sold: 280,
      isNew: true, isFeatured: false, rating: 4.2, numReviews: 145,
    },
    {
      name: "Xiaomi Redmi 13C",
      slug: "xiaomi-redmi-13c",
      description: "Redmi 13C chip MediaTek Helio G85, camera 50MP, pin 5000mAh, giá siêu rẻ.",
      price: 2990000, salePrice: 2690000,
      images: ["https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400"],
      category: phone._id, stock: 100, sold: 580,
      isNew: false, isFeatured: true, rating: 4.0, numReviews: 320,
    },
    // 5 - 15 triệu
    {
      name: "Samsung Galaxy A55 5G",
      slug: "samsung-galaxy-a55-5g",
      description: "Galaxy A55 5G với chip Exynos 1480, camera 50MP OIS, màn hình Super AMOLED 120Hz.",
      price: 11990000, salePrice: 10490000,
      images: ["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400"],
      category: phone._id, stock: 35, sold: 260,
      isNew: true, isFeatured: true, rating: 4.5, numReviews: 130,
    },
    {
      name: "iPhone 15",
      slug: "iphone-15",
      description: "iPhone 15 chip A16 Bionic, camera 48MP Dynamic Island, cổng USB-C.",
      price: 22990000, salePrice: 19990000,
      images: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400"],
      category: phone._id, stock: 40, sold: 310,
      isNew: false, isFeatured: true, rating: 4.7, numReviews: 200,
    },
    {
      name: "OPPO Reno 12",
      slug: "oppo-reno-12",
      description: "OPPO Reno 12 chip MediaTek Dimensity 7300, camera AI Portrait 50MP, sạc SUPERVOOC 80W.",
      price: 10990000, salePrice: 9490000,
      images: ["https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400"],
      category: phone._id, stock: 55, sold: 190,
      isNew: true, isFeatured: false, rating: 4.4, numReviews: 95,
    },
    {
      name: "Laptop Acer Aspire 3 A315",
      slug: "acer-aspire-3-a315",
      description: "Acer Aspire 3 Intel Core i5-1235U, RAM 8GB, SSD 512GB, màn hình 15.6 inch Full HD.",
      price: 13990000, salePrice: 12490000,
      images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"],
      category: laptop._id, stock: 25, sold: 145,
      isNew: false, isFeatured: true, rating: 4.3, numReviews: 88,
    },
    {
      name: "Laptop HP 15s-fq5",
      slug: "hp-15s-fq5",
      description: "HP 15s Intel Core i3-1215U, RAM 8GB, SSD 256GB, Windows 11 Home bản quyền.",
      price: 9990000, salePrice: 8990000,
      images: ["https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400"],
      category: laptop._id, stock: 30, sold: 220,
      isNew: true, isFeatured: false, rating: 4.2, numReviews: 115,
    },
    {
      name: "Samsung Galaxy Tab A9+",
      slug: "samsung-galaxy-tab-a9-plus",
      description: "Galaxy Tab A9+ màn hình 11 inch 90Hz, chip Snapdragon 695, loa AKG quad speaker.",
      price: 8990000, salePrice: 7990000,
      images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"],
      category: tablet._id, stock: 40, sold: 175,
      isNew: true, isFeatured: true, rating: 4.4, numReviews: 92,
    },
  ]);

  console.log("Seed hoàn tất! Đã tạo 3 danh mục và 19 sản phẩm.");
  await mongoose.connection.close();
};

run().catch(console.error);
