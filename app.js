const { MongoClient } = require('mongodb');

// Reemplaza con tu URI de MongoDB
//const uri = "mongodb+srv://tu_usuario:tu_contraseña@cluster0.xxxxx.mongodb.net/";
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function main() {
    try {
    // Conectar al cliente
    await client.connect();
    console.log("Conexión exitosa a MongoDB");

    // Seleccionar o crear una base de datos
    const db = client.db("viaje");

    // Seleccionar o crear una colección
    const coleccion = db.collection("usuarios");

    // Insertar un documento (esto crea la base de datos y colección si no existen)
    const resultado = await coleccion.insertOne({
        nombre: "Jaime Llanos",
        edad: 36,
        email: "jllanosb@unc.edu.pe"
    });

    console.log("Documento insertado con ID:", resultado.insertedId);

    } catch (error) {
    console.error("Error:", error);
    } finally {
    // Cerrar conexión
    await client.close();
    console.log("Conexión cerrada");
    }
}

// Ejecutar la función
main();