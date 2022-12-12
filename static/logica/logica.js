var numeroAyudas = 0;
var minutosTranscurridos = 0;
var segundosTranscurridos = 0;
var minutos = "";
var segundos = "";
var valores = [];
var verdaderos = 0;
var falsos = 0;

function obtenerRespuestas(form1, form2, form3, form4, form5) {
    var sizes = form1.length;
    var faltoResponder = true;
    
    for (i=0; i < sizes; i++) 
    {
        if (form1[i].checked==true) 
        {
            valores[0] = form1.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder) 
    {
        alert('Faltó contestar una pregunta. 1')
        return;
    }
    faltoResponder=true;

    sizes = form2.length;
    for (i=0; i < sizes; i++) 
    {
        if (form2[i].checked==true) 
        {
            valores[1] = form2.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder) 
    {
        alert('Faltó contestar una pregunta. 2')
        return;
    }
    faltoResponder=true;

    sizes = form3.length;
    for (i=0; i < sizes; i++) 
    {
        if (form3[i].checked==true) 
        {
            valores[2] = form3.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder) 
    {
        alert('Faltó contestar una pregunta. 3')
        return;
    }
    faltoResponder=true;

    sizes = form4.length;
    for (i=0; i < sizes; i++) 
    {
        if (form4[i].checked==true) 
        {
            valores[3] = form4.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder) 
    {
        alert('Faltó contestar una pregunta. 4')
        return;
    }
    faltoResponder=true;

    sizes = form5.length;
    for (i=0; i < sizes; i++) 
    {
        if (form5[i].checked==true) 
        {
            valores[4] = form5.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder) 
    {
        alert('Faltó contestar una pregunta. 5')
        return;
    }

    for (i = 0; i < valores.length; i++)
    {
        if (valores[i] == "Verdadero") 
        {
            verdaderos += 1;
        }
        else
        {
            falsos += 1;
        }
        // alert(valores[i])
    }

    alert("Errores: " + falsos + " " + ", Tiempo (Minutos): " + minutosTranscurridos + " " + ", Ayudas: " + numeroAyudas);
    
    var obj = {
        crisp_input: [falsos, minutosTranscurridos, numeroAyudas],
        variables_input: [
            {
                name: "Errores",
                setsName: ["Pocos", "Algunos", "Muchos"],
                sets: [
                    [0,0,1,2],
                    [1,2,3,4],
                    [3,4,5,5]
                ]
            },
            {
                name: "Tiempo",
                setsName: ["Bueno", "Decente", "Mucho"],
                sets: [
                    [0,0,0,2],
                    [1,3,3,5],
                    [4,6,6,6]
                ]
            },
            {
                name: "Ayudas",
                setsName: ["Pocas", "Algunas", "Muchas"],
                sets: [
                    [0,0,0,2],
                    [1,3,3,5],
                    [4,6,6,6]
                ]
            }
        ],
        variable_output: {
            name: "Complejidad",
            setsName: ["Facil", "Medio", "Dificil"],
            sets: [
                [0,0,0,3],
                [2,5,5,8],
                [7,10,10,10]
            ]
        },
        inferences: [
            [2,1,0],
            [2,1,0],
            [2,1,0]
        ]
    };

    var fl = new FuzzyLogic();

    alert("Resultados: " + fl.getResult(obj))

    if (fl.getResult(obj) >= 7)
    {
        window.location.href = "../guerra_mundial_2/guerra_mundial_2.html";
    }
    else if (fl.getResult(obj) <= 3)
    {
        window.location.href = "../prehistoria/prehistoria.html";
    }
    else 
    {
        window.location.href = "../independencia_mexico/independencia_mexico.html";
    }

    // Agarrar errores (falsos), tiempo (minutosTranscurridos), ayudas (numeroAyudas) y pasarlos a fuzzy logic.
    //Falta redirigir en js a otra pagina, las ayudas y el cronometro
    
    //TimeMe.js
    //howto_js_redirect_webpage
    //how-to-measure-a-time-spent-on-a-page
};

function reloj(){
    if (minutosTranscurridos.toString().length == 1)
    {
        minutos = "0"+minutosTranscurridos;
    }
    else 
    {
        minutos = minutosTranscurridos;
    }
    if (segundosTranscurridos.toString().length == 1)
    {
        segundos = "0"+segundosTranscurridos;
    }
    else 
    {
        segundos = segundosTranscurridos;
    }

    document.getElementById("tiempo-reloj-1").innerText = minutos + ":" + segundos;
    document.getElementById("tiempo-reloj-2").innerText = minutos + ":" + segundos;

    segundosTranscurridos += 1;

    if (segundosTranscurridos == 60) 
    {
        minutosTranscurridos += 1;
        segundosTranscurridos = 0;
    }

    setTimeout("reloj()", 1000)
}

function ayuda(dificultad, pregunta) {
    //Preguntas Prehistoria
    if (dificultad == 1 && pregunta == 1) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C.');
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 2) {
        alert('Su uso se difundió rápidamente debido a su fácil obtención y a su gran maleabilidad')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 3) {
        alert('Comprende desde los 10 mil años a.C. hasta los 3 mil años a.C.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 4) {
        alert('Se domesticaron algunos animales con los que se organizó la ganadería actual')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 5) {
        alert('Con esta nueva aleación se comenzó a fabricar nuevas armas, ornamentos y utensilios.')
        numeroAyudas += 1;
        return;
    }

    //Preguntas Independencia
    if (dificultad == 2 && pregunta == 1) {
        alert('Hidalgo apeló al apoyo popular y, en la misa, profirió el famoso Grito de Dolores.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 2) {
        alert('Se une al Padre Miguel Hidalgo y levanta un ejército popular, pero disciplinado, móvil y aguerrido.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 3) {
        alert('Entró a formar parte de la conspiración de la Profesa, cuya finalidad consistía en impedir el restablecimiento de la Constitución española de Cádiz. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 4) {
        alert('Se organiza una regencia de cinco miembros, presidida por Iturbide.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 5) {
        alert('Tras un período de inestabilidad, Santa-Anna asumió el mando en abril de 1833 y dominó el país durante veinte años.')
        numeroAyudas += 1;
        return;
    }

    //Preguntas Segunda Guerra Mundial
    if (dificultad == 3 && pregunta == 1) {
        alert('El Reino Unido o Gran Bretaña permitió el acceso nazi al poder en Alemania sin defender a la Republica Demo Liberal de Weimar.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 2) {
        alert('Ese mismo año Alemania se retira de la Liga de Naciones.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 3) {
        alert('Las potencias del Eje impulsaron políticas anexionistas.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 4) {
        alert('Consistió en el desembarco de Normandia (Francia).')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 5) {
        alert('Lograron muchos una independencia política mas no económica.')
        numeroAyudas += 1;
        return;
    }
};

function personTextJS()
{
    // /persontext/Hola me gusta coleccionar objetos y divertirme // No
    // /persontext//Un tema que me tiene dando vueltas la cabeza es que ya viene el día del niño y me gustaría como que hacerle un día especial al niño quisiera decorarle una pared quisiera hacer bollitos para ese día comprarle dulces que haiga música para que él esté feliz quisiera que hiciéramos en esa semana actividades con el niño como salir al parque hacer un día un pastel o algo al niño me gustaría ah me gustaría que hiciéramos una video llamada que puedan estar

    texto = document.getElementById("textoApertura").value
    cantidadPalabras = texto.split(' ').length
    prueba = 'Un tema que me tiene dando vueltas la cabeza es que ya viene el día del niño y me gustaría como que hacerle un día especial al niño quisiera decorarle una pared quisiera hacer bollitos para ese día comprarle dulces que haiga música para que él esté feliz quisiera que hiciéramos en esa semana actividades con el niño como salir al parque hacer un día un pastel o algo al niño me gustaría ah me gustaría que hiciéramos una video llamada que puedan estar'
    prueba2 = 'El tema del que voy a hablar es de la música cuando tenía 14 años empecé a tocar guitarra aprendí a tocar en una escuela que estaba cerca de mi casa estuve aprendiendo como por dos años más o menos cuando me di cuenta que había cosas que me gustaban mucho que estaba aprendiendo bien pero que quería llevarlo a un siguiente nivel entonces me cambié de escuela a una con un nivel un poquito más avanzado ya estando ahí pues aprendí más cosas más sobre teoría de música y luego yo solo aprendí a tocar el ukulele yo solo aprendí a tocar el piano y la batería entonces ya con el conjunto de todo eso empezaba a hacer mis primeras canciones yo solo yo las producía solo me grababa tocando esos instrumentos y pues yo los subía'
    url = '/persontext/' + texto
    valor = fetch(url)
    .then(response => response.json())
    .then(data => {
        alert(data["presenta_apertura"])
        if (texto == '' || texto == ' ' || cantidadPalabras < 30)
        {
            alert('Se requieren de al menos 30 palabras para continuar con History Advisor.')
            alert('Número de palabras escritas: ' + cantidadPalabras)
        }
        else if (data["presenta_apertura"] == 'No' || data["presenta_apertura"] == 'no')
        {
            window.location.href = "../stonehenge/stonehenge.html";
        }
        else if (data["presenta_apertura"] == 'Si' || data["presenta_apertura"] == 'si' || data["presenta_apertura"] == 'Sí' || data["presenta_apertura"] == 'sí')
        {
            window.location.href = "../prehistoria/prehistoria.html";
        }
    })
};

function obtenerRespuestas2(form1, form2, form3, form4, form5) {
    var sizes = form1.length;
    var faltoResponder = true;

    for (i=0; i < sizes; i++)
    {
        if (form1[i].checked==true)
        {
            valores[0] = form1.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder)
    {
        alert('Faltó contestar una pregunta. 1')
        return;
    }
    faltoResponder=true;

    sizes = form2.length;
    for (i=0; i < sizes; i++)
    {
        if (form2[i].checked==true)
        {
            valores[1] = form2.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder)
    {
        alert('Faltó contestar una pregunta. 2')
        return;
    }
    faltoResponder=true;

    sizes = form3.length;
    for (i=0; i < sizes; i++)
    {
        if (form3[i].checked==true)
        {
            valores[2] = form3.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder)
    {
        alert('Faltó contestar una pregunta. 3')
        return;
    }
    faltoResponder=true;

    sizes = form4.length;
    for (i=0; i < sizes; i++)
    {
        if (form4[i].checked==true)
        {
            valores[3] = form4.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder)
    {
        alert('Faltó contestar una pregunta. 4')
        return;
    }
    faltoResponder=true;

    sizes = form5.length;
    for (i=0; i < sizes; i++)
    {
        if (form5[i].checked==true)
        {
            valores[4] = form5.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder)
    {
        alert('Faltó contestar una pregunta. 5')
        return;
    }

    for (i = 0; i < valores.length; i++)
    {
        if (valores[i] == "Verdadero")
        {
            verdaderos += 1;
        }
        else
        {
            falsos += 1;
        }
        // alert(valores[i])
    }

    alert("Errores: " + falsos + " " + ", Tiempo (Minutos): " + minutosTranscurridos + " " + ", Ayudas: " + numeroAyudas);

    var obj = {
        crisp_input: [falsos, minutosTranscurridos, numeroAyudas],
        variables_input: [
            {
                name: "Errores",
                setsName: ["Pocos", "Algunos", "Muchos"],
                sets: [
                    [0,0,1,2],
                    [1,2,3,4],
                    [3,4,5,5]
                ]
            },
            {
                name: "Tiempo",
                setsName: ["Bueno", "Decente", "Mucho"],
                sets: [
                    [0,0,0,2],
                    [1,3,3,5],
                    [4,6,6,6]
                ]
            },
            {
                name: "Ayudas",
                setsName: ["Pocas", "Algunas", "Muchas"],
                sets: [
                    [0,0,0,2],
                    [1,3,3,5],
                    [4,6,6,6]
                ]
            }
        ],
        variable_output: {
            name: "Complejidad",
            setsName: ["Facil", "Medio", "Dificil"],
            sets: [
                [0,0,0,3],
                [2,5,5,8],
                [7,10,10,10]
            ]
        },
        inferences: [
            [2,1,0],
            [2,1,0],
            [2,1,0]
        ]
    };

    var fl = new FuzzyLogic();

    alert("Resultados: " + fl.getResult(obj))

    if (fl.getResult(obj) >= 7)
    {
        window.location.href = "../revolucion_industrial/revolucion_industrial.html";
    }
    else if (fl.getResult(obj) <= 3)
    {
        window.location.href = "../stonehenge/stonehenge.html";
    }
    else
    {
        window.location.href = "../benito_juarez/benito_juarez.html";
    }

    // Agarrar errores (falsos), tiempo (minutosTranscurridos), ayudas (numeroAyudas) y pasarlos a fuzzy logic.
    //Falta redirigir en js a otra pagina, las ayudas y el cronometro

    //TimeMe.js
    //howto_js_redirect_webpage
    //how-to-measure-a-time-spent-on-a-page
};

function ayuda2(dificultad, pregunta) {
    //Preguntas Stonehenge
    if (dificultad == 1 && pregunta == 1) {
        alert('Entre el final del periodo Neolítico y el comienzo de la Edad del Bronce.');
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 2) {
        alert('Station Stone.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 3) {
        alert('Silbury Hill.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 4) {
        alert('Druidas.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 5) {
        alert('Nadie conoce con seguridad el propósito de Stonehenge.')
        numeroAyudas += 1;
        return;
    }

    //Preguntas Benito Juarez
    if (dificultad == 2 && pregunta == 1) {
        alert('21 de marzo de 1806.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 2) {
        alert('1834.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 3) {
        alert('1852.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 4) {
        alert('1858')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 5) {
        alert('18 de julio de 1872.')
        numeroAyudas += 1;
        return;
    }

    //Preguntas Revolución industrial
    if (dificultad == 3 && pregunta == 1) {
        alert('El deseo de mejorar los niveles de calidad de los productos.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 2) {
        alert('Maquinismo.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 3) {
        alert('Agricultura.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 4) {
        alert('Maquinismo.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 5) {
        alert('Disminuyó la población mundial.')
        numeroAyudas += 1;
        return;
    }
};