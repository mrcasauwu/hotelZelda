/* ==================== GENERAL ==================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f8f7f4;
    color: #222;
}

a {
    text-decoration: none;
}


/* ==================== MENÚ ==================== */

.header {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 22px 7%;

    background: rgba(15, 23, 42, 0.95);

    color: white;

    z-index: 1000;
}

.logo {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
}

.logo span {
    color: #d4af37;
}

nav {
    display: flex;
    gap: 28px;
}

nav a {
    color: white;
    font-size: 14px;
    transition: 0.3s;
}

nav a:hover {
    color: #d4af37;
}


/* ==================== HERO ==================== */

.hero {
    height: 100vh;

    background:
        linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
        ),
        url("https://images.unsplash.com/photo-1566073771259-6a8506099945")
        center/cover;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    color: white;
}

.hero-content {
    max-width: 800px;
    padding: 20px;
}

.bienvenida {
    color: #d4af37;
    font-size: 14px;
    letter-spacing: 4px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: 65px;
    line-height: 1.1;
    margin-bottom: 25px;
}

.hero h1 span {
    color: #d4af37;
}

.descripcion {
    max-width: 600px;
    margin: auto;
    line-height: 1.7;
    font-size: 17px;
    margin-bottom: 35px;
}

.boton {
    display: inline-block;

    padding: 15px 32px;

    background: #d4af37;

    color: white;

    font-weight: bold;

    border-radius: 4px;

    transition: 0.3s;
}

.boton:hover {
    background: #b89525;
    transform: translateY(-2px);
}


/* ==================== PRESENTACIÓN ==================== */

.presentacion {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 70px;

    padding: 100px 10%;

    align-items: center;

    background: white;
}

.subtitulo {
    color: #b89525;
    font-size: 13px;
    letter-spacing: 3px;
    font-weight: bold;

    margin-bottom: 15px;
}

.presentacion h2 {
    font-size: 45px;
    line-height: 1.2;
    margin-bottom: 25px;
}

.presentacion-texto p:not(.subtitulo) {
    color: #666;
    line-height: 1.8;
    margin-bottom: 15px;
}

.imagen-placeholder {
    height: 400px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #e9e6dc;

    font-size: 130px;

    border-radius: 8px;
}


/* ==================== SECCIONES ==================== */

.seccion {
    padding: 100px 7%;
}

.centro {
    text-align: center;
}

.titulo-centro {
    text-align: center;

    font-size: 40px;

    margin-bottom: 50px;
}


/* ==================== HABITACIONES ==================== */

.habitaciones {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 30px;
}

.habitacion {
    background: white;

    border-radius: 8px;

    overflow: hidden;

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.08);

    transition: 0.3s;
}

.habitacion:hover {
    transform: translateY(-8px);
}

.habitacion-imagen {
    height: 230px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 90px;
}

.sencilla {
    background: #ddd8ca;
}

.doble {
    background: #d9e0e0;
}

.suite {
    background: #e1d8c0;
}

.habitacion-info {
    padding: 28px;
}

.habitacion-info h3 {
    font-size: 23px;
    margin-bottom: 12px;
}

.habitacion-info p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

.precio {
    font-size: 25px;
    font-weight: bold;

    margin-bottom: 20px;
}

.precio small {
    font-size: 13px;
    color: #777;
}

.boton-secundario {
    display: inline-block;

    padding: 11px 22px;

    background: #111827;

    color: white;

    border-radius: 4px;

    font-size: 14px;
}

.boton-secundario:hover {
    background: #d4af37;
}


/* ==================== SERVICIOS ==================== */

.servicios {
    padding: 100px 7%;

    background: #111827;

    color: white;
}

.servicios-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 25px;
}

.servicio {
    text-align: center;

    padding: 30px 20px;

    border: 1px solid #374151;

    border-radius: 8px;
}

.icono {
    font-size: 45px;

    margin-bottom: 18px;
}

.servicio h3 {
    margin-bottom: 12px;
}

.servicio p {
    color: #bfc3ca;

    line-height: 1.6;

    font-size: 14px;
}


/* ==================== RESERVAS ==================== */

.reservas {
    padding: 100px 10%;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 80px;

    align-items: center;

    background: #f1eee7;
}

.reserva-contenido h2 {
    font-size: 45px;

    margin-bottom: 20px;
}

.reserva-contenido > p:last-child {
    color: #666;

    line-height: 1.7;
}

form {
    background: white;

    padding: 35px;

    border-radius: 8px;

    box-shadow:
        0 8px 30px rgba(0, 0, 0, 0.08);
}

label {
    display: block;

    font-size: 14px;

    font-weight: bold;

    margin-bottom: 7px;

    margin-top: 18px;
}

input,
select {
    width: 100%;

    padding: 13px;

    border: 1px solid #ddd;

    border-radius: 4px;

    font-size: 14px;
}

input:focus,
select:focus {
    outline: none;

    border-color: #d4af37;
}

.fila {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 15px;
}

.boton-formulario {
    width: 100%;

    border: none;

    padding: 15px;

    margin-top: 25px;

    background: #111827;

    color: white;

    font-weight: bold;

    cursor: pointer;

    border-radius: 4px;
}

.boton-formulario:hover {
    background: #d4af37;
}


/* ==================== CONTACTO ==================== */

.contacto {
    padding: 90px 10%;

    text-align: center;

    background: white;
}

.contacto h2 {
    font-size: 40px;

    margin-bottom: 35px;
}

.contacto-datos {
    display: flex;

    justify-content: center;

    gap: 40px;

    flex-wrap: wrap;

    color: #666;
}


/* ==================== FOOTER ==================== */

footer {
    padding: 30px;

    background: #080b11;

    color: white;

    text-align: center;
}

footer p {
    margin-top: 12px;

    color: #aaa;

    font-size: 13px;
}


/* ==================== CELULAR ==================== */

@media (max-width: 900px) {

    .header {
        flex-direction: column;

        gap: 15px;
    }

    nav {
        gap: 15px;

        flex-wrap: wrap;

        justify-content: center;
    }

    .hero h1 {
        font-size: 45px;
    }

    .presentacion {
        grid-template-columns: 1fr;
    }

    .habitaciones {
        grid-template-columns: 1fr;
    }

    .servicios-grid {
        grid-template-columns: 1fr 1fr;
    }

    .reservas {
        grid-template-columns: 1fr;
    }

}


@media (max-width: 600px) {

    .servicios-grid {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 38px;
    }

    .presentacion h2,
    .reserva-contenido h2 {
        font-size: 35px;
    }

    .fila {
        grid-template-columns: 1fr;
    }

}