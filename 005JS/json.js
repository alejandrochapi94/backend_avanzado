function reformatearVehiculos(jsonString) {
    // Convertir el JSON string a un objeto JavaScript
    const datos = JSON.parse(jsonString);

    // Recorrer cada objeto en el array
    const datosModificados = datos.map(item => {
        // Extraer el número de la clave "vehiculo"
        const numero = item.vehiculo.split(' ')[1]; // Divide "vehiculo 001" y toma el segundo elemento ("001")
        
        // Reformatear la clave "vehiculo"
        item.vehiculo = "Vehiculo " + numero;

        // Devolver el objeto modificado
        return item;
    });

    // Convertir el objeto modificado de nuevo a JSON
    return JSON.stringify(datosModificados, null, 2); // El tercer parámetro (2) es para formatear el JSON con indentación
}

// Ejemplo de uso
const jsonOriginal = `[
    {
        "vehiculo": "vehiculO 001",
        "código": "A123",
        "empresa": "Transportes Urbanos",
        "parada": "Estación Central",
        "estado": "En ruta"
    },
    {
        "vehiculo": "vehiculo 002",
        "código": "T456",
        "empresa": "Ferrocarriles Nacionales",
        "parada": "Parque Norte",
        "estado": "En espera"
    },
    {
        "vehiculo": "vehiculo 003",
        "código": "TX789",
        "empresa": "Rápidos y Seguros",
        "parada": "Aeropuerto Internacional",
        "estado": "Disponible"
    },
    {
        "vehiculo": "vehiculo 004",
        "código": "B012",
        "empresa": "EcoMovilidad",
        "parada": "Plaza Mayor",
        "estado": "En uso"
    },
    {
        "vehiculo": "vehiculo 005",
        "código": "M345",
        "empresa": "MetroRápido",
        "parada": "Centro Histórico",
        "estado": "En mantenimiento"
    }
]`;

const jsonModificado = reformatearVehiculos(jsonOriginal);
console.log(jsonModificado);