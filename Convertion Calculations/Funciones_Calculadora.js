// Definimos una función que calcule la huella hídrica total anual por cada respuesta de usuario:

function huella_hídrica_total_anual(row) {
    var quinto_elemento = row['¿Cuánto duran tus duchas?'];
    var sexto_elemento = row['¿Cuántas veces pones la lavadora a la semana?'];
    var septimo_elemento = row['¿Cuántas veces pones el lavavajillas?'];
    var octavo_elemento = row['¿Sueles poner el modo *ECO *en tus electrodomésticos?'];
    var noveno_elemento = row['¿Reciclas agua para usarlo en otras tareas?'];
    var decimo_elemento = row['¿*Reciclas *vidrio, cartón y plástico?'];
    var undecimo_elemento = row['¿Cada cuánto consumes *carne*?'];
    var duodecimo_elemento = row['¿Cuántos km haces a la semana en coche?'];
    var decimotercero_elemento = row['¿Cuánto gastas al mes en comida para gato/perro?'];
    var decimocuarto_elemento = row['¿Cuántos metros cuadrados tiene tu jardín?'];

    var huella_hidrica_ducha = 0;
    var huella_hidrica_lavadora = 0;
    var huella_hidrica_lavar_platos = 0;
    var huella_hidrica_para_modo_eco = 0;
    var huella_hidrica_ahorro_agua = 0;
    var huella_hidrica_reciclaje = 0;
    var huella_hidrica_carne = 0;
    var huella_hidrica_gasolina = 0;
    var huella_hidrica_mascota = 0;
    var huella_hidrica_jardin = 0;

    if (quinto_elemento === 'Menos de 5 minutos') {
        huella_hidrica_ducha = 5 * (4 * 2.5 / 60) * 0.01 * 52 * 1000;
    } else if (quinto_elemento === 'Entre 5 y 10 minutos') {
        huella_hidrica_ducha = 5 * (7 * 2.5 / 60) * 0.01 * 52 * 1000;
    } else if (quinto_elemento === 'Entre 11 y 15 minutos') {
        huella_hidrica_ducha = 5 * (12 * 2.5 / 60) * 0.01 * 52 * 1000;
    } else if (quinto_elemento === 'Más de 15 minutos') {
        huella_hidrica_ducha = 5 * (20 * 2.5 / 60) * 0.01 * 52 * 1000;
    }

    if (sexto_elemento === 'Menos de 3 veces') {
        huella_hidrica_lavadora = 1 * 15 * 0.01 * 52 * 1000;
    } else if (sexto_elemento === 'Entre 3 y 5 veces') {
        huella_hidrica_lavadora = 4 * 15 * 0.01 * 52 * 1000;
    } else if (sexto_elemento === 'Más de 5') {
        huella_hidrica_lavadora = 6 * 15 * 0.01 * 52 * 1000;
    }
        
    if (septimo_elemento === '1 vez al día') {
        huella_hidrica_lavar_platos = 1 * 6.5 * 0.01 * 52 * 1000;
    } else if (septimo_elemento === 'Entre 3 y 5 a la semana') {
        huella_hidrica_lavar_platos = 5 * 6.5 * 0.01 * 52 * 1000;
    } else if (septimo_elemento === 'Friego a mano') {
        huella_hidrica_lavar_platos = 10 * 27 * 0.01 * 52 * 1000;
    }

    if (octavo_elemento === 'Siempre') {
        huella_hidrica_para_modo_eco = -((7800 + 23659.3) * 36) / 100;
    } else if (octavo_elemento === 'A veces') {
        huella_hidrica_para_modo_eco = -((7800 + 23659.3) * 18) / 100;
    } else if (octavo_elemento === 'No sabía que existía ese modo') {
        huella_hidrica_para_modo_eco = 0;
    }

    if (noveno_elemento === 'Si') {
        huella_hidrica_ahorro_agua = -730;
    } else if (noveno_elemento === 'No') {
        huella_hidrica_ahorro_agua = 0;
    } else if (noveno_elemento === 'Buena idea! Voy a probarlo!') {
        huella_hidrica_ahorro_agua = 0;
    }

    if (decimo_elemento === 'A veces') {
        huella_hidrica_reciclaje = -730;
    } else if (decimo_elemento === 'Siempre') {
        huella_hidrica_reciclaje = -1460;
    } else if (decimo_elemento === 'Nunca!') {
        huella_hidrica_reciclaje = 0;
    }

    if (undecimo_elemento === '1 vez al día') {
        huella_hidrica_carne = 768 * 0.01 * 1000 * 365;
    } else if (undecimo_elemento === '1 vez cada 3 días') {
        huella_hidrica_carne = 596 * 0.01 * 1000 * 365;
    } else if (undecimo_elemento === '1 vez a la semana') {
        huella_hidrica_carne = 563 * 0.01 * 1000 * 365;
    } else if (undecimo_elemento === 'Nunca!') {
        huella_hidrica_carne = 406 * 0.01 * 1000 * 365;
    }

    if (duodecimo_elemento === 'Menos de 100 km') {
        huella_hidrica_gasolina = (6 * 52) * 97;
    } else if (duodecimo_elemento === '100 - 200 km') {
        huella_hidrica_gasolina = (15 * 52) * 97;
    } else if (duodecimo_elemento === 'Más de 200 km') {
        huella_hidrica_gasolina = (25 * 52) * 97;
    } else if (duodecimo_elemento === 'No uso coche') {
        huella_hidrica_gasolina = 0;
    }

    if (decimotercero_elemento === 'No tengo mascota') {
        huella_hidrica_mascota = 358.75 * 1000;
    } else if (decimotercero_elemento === 'Menos de 50 €') {
        huella_hidrica_mascota = (40 * 358750) / 75;
    } else if (decimotercero_elemento === 'Entre 50 y 100 €') {
        huella_hidrica_mascota = (75 * 358750) / 75;
    } else if (decimotercero_elemento === 'Más de 100 €') {
        huella_hidrica_mascota = (120 * 358750) / 75;
    }

    if (decimocuarto_elemento.match(/^\d+$/)) {
        huella_hidrica_jardin = 6 * parseInt(decimocuarto_elemento);
    } else {
        var numero_encontrado = decimocuarto_elemento.match(/\d+/);
        if (numero_encontrado) {
            huella_hidrica_jardin = 6 * parseInt(numero_encontrado[0]);
        } else {
            huella_hidrica_jardin = 0;
        }
    }

    var huella_hidrica_total_anual = huella_hidrica_ducha + huella_hidrica_lavadora + huella_hidrica_lavar_platos + huella_hidrica_para_modo_eco + huella_hidrica_ahorro_agua + huella_hidrica_reciclaje + huella_hidrica_carne + huella_hidrica_gasolina + huella_hidrica_mascota + huella_hidrica_jardin;

    return huella_hidrica_total_anual;
}

// Definimos una función que calcule la huella hídrica total diaria por cada respuesta de usuario:

function huella_hidrica_total_diaria(huella_hidrica_total_anual) {
    var huella_hidrica_total_diaria = huella_hidrica_total_anual / 365;

    return huella_hidrica_total_diaria;
}