const mysql = require("mysql2/promise");

async function seedCategories() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "next_cashed",
  });

  const name = "Makanan";
  const active = 1;
  const query =
    "INSERT INTO category (name, active, createdAt) VALUES (?, ?, NOW())";
  await connection.execute(query, [name, active]);

  console.log("Category seeded successfully");
  await connection.end();
}

seedCategories().catch(console.error);
