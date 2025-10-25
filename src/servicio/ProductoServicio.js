export async function getProductos() {
    const res = await fetch("http://localhost:8080/api/productos");
    if (!res.ok) throw new Error("Error al obtener los productos");
    return await res.json();
}