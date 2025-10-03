const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI; // Asegúrate de tener tu URI en .env
const client = new MongoClient(uri);

async function main() {
    try {
    await client.connect();
    console.log("✅ Conectado a MongoDB");

    // Selecciona tu base de datos (se crea si no existe)
    const db = client.db("viaje");

    // === Colección 1: usuarios ===
    const usuarios = db.collection("usuarios");
    await usuarios.insertOne({ nombre: "Ana", edad: 25, email: "ana.llanos@gmail.com" });
    console.log("👤 Documento insertado en 'usuarios'");

    // === Colección 2: productos ===
    const productos = db.collection("productos");
    await productos.insertOne({ nombre: "Laptop", precio: 1200, stock: 10 });
    console.log("🛒 Documento insertado en 'productos'");

    // === Colección 3: pedidos ===
    const pedidos = db.collection("pedidos");
    await pedidos.insertOne({
      usuarioId: "660000000000000000000001", // ObjectId simulado
        productos: ["Laptop"],
        total: 1200,
        fecha: new Date()
    });
    console.log("📦 Documento insertado en 'pedidos'");

    // Puedes seguir agregando más colecciones...
    // const categorias = db.collection("categorias");
    // const comentarios = db.collection("comentarios");
    // etc.


    } catch (error) {
    console.error("Error:", error);
    } finally {
    // Cerrar conexión
    await client.close();
    console.log("Conexión cerrada");
    }
}

main();