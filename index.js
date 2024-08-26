function procesarTexto(accion) {
    let texto = document.getElementById("texto").value.toLowerCase();

    // Definir reglas de reemplazo
    const reglas = {
        encriptar: [
            ["a", "01"], ["b", "02"], ["c", "03"], ["d", "04"], ["e", "05"], ["f", "06"], ["g", "07"], ["h", "08"],
            ["i", "09"], ["j", "10"], ["k", "11"], ["l", "12"], ["m", "13"], ["n", "14"], ["o", "15"], ["p", "16"],
            ["q", "17"], ["r", "18"], ["s", "19"], ["t", "20"], ["u", "21"], ["v", "22"], ["w", "23"], ["x", "24"],
            ["y", "25"], ["z", "26"]
        ],
        desencriptar: [
            ["01", "a"], ["02", "b"], ["03", "c"], ["04", "d"], ["05", "e"], ["06", "f"], ["07", "g"], ["08", "h"],
            ["09", "i"], ["10", "j"], ["11", "k"], ["12", "l"], ["13", "m"], ["14", "n"], ["15", "o"], ["16", "p"],
            ["17", "q"], ["18", "r"], ["19", "s"], ["20", "t"], ["21", "u"], ["22", "v"], ["23", "w"], ["24", "x"],
            ["25", "y"], ["26", "z"]
        ]
    };

    // Obtener las reglas correspondientes para la acción
    const reglasActuales = reglas[accion];

    // Ordenar reglas por longitud de las claves en orden descendente
    reglasActuales.sort((a, b) => b[0].length - a[0].length);

    // Aplicar las reglas de reemplazo
    reglasActuales.forEach(([key, value]) => {
        const regex = new RegExp(key, 'g');
        texto = texto.replace(regex, value);
    });

    // Mostrar el mensaje encriptado o desencriptado
    let tituloMensaje = texto ? `Texto ${accion === 'encriptar' ? 'Encriptado' : 'Desencriptado'}` : `UPSS Ingrese un mensaje para ${accion}`;
    document.getElementById("titulo__mensaje").textContent = tituloMensaje;
    document.getElementById("parrafo").textContent = texto || "";
    document.getElementById("imagen-de-una-lupa").style.display = texto ? "none" : "block";
}

function encriptar() {
    procesarTexto("encriptar");
}

function desencriptar() {
    procesarTexto("desencriptar");
}

function limpiarSalida() {
    document.getElementById("titulo__mensaje").textContent = "Ningún mensaje fue encontrado";
    document.getElementById("parrafo").textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    document.getElementById("imagen-de-una-lupa").style.display = "block";
}

function copiarTexto() {
    let texto = document.getElementById("parrafo").textContent;
    navigator.clipboard.writeText(texto);
}

// Limpiar salida cuando se empieza a escribir en el área de texto
document.getElementById("texto").addEventListener("input", limpiarSalida);