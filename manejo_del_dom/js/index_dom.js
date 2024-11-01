import hamburgerMenu from "../js/dom/menu_hamburguesa.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
// import contactFormAjax from "./dom/validaciones_formulario_ajax.js";
import videoSelect from "./dom/videoSeleccion.js";
import mensajeModal from "./dom/modal.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import smartVideo from "./dom/video_inteligente.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => { // esto permite que cargue el dom antes de ejecutar la funcion que esta dentro.
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    scrollTopButton(".scroll-top-btn");
    // darkTheme(".dark-theme-btn","dark-mode"); // se quito de aqui y se puso mas abajo afuera del DOMContentLoaded, porque se llamo otro evento DOMContentLoaded para usar el localStorage

    responsiveMedia(
        "visor2",
        "(min-width: 1024px)",
        // '<center><div class="blue-link"><a href="../../../qgisLeaflet/sitios_turisticos_2/index.html" target="_blank">ver Mapa</a></div></center>',
        '<iframe id="visor2" src="../../../qgisLeaflet/sitios_turisticos_2/index.html" width="100%" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe id="visor2" src="../../../qgisLeaflet/sitios_turisticos_2/index.html" width="127%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );

    // responsiveMedia(
    //     "visor3",
    //     "(min-width: 1024px)",
    //     // '<center><div class="blue-link"><a href="../../../qgisLeaflet/sitios_turisticos_2/index.html" target="_blank">ver Mapa</a></div></center>',
    //     '<iframe src="https://ljagis.github.io/leaflet-measure/" width="100%" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    //     '<iframe src="https://ljagis.github.io/leaflet-measure/" width="127%" height="900" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    // );


    responsiveMedia(
        "visor4",
        "(min-width: 1024px)",
        // '<center><div class="blue-link"><a href="../../../qgisLeaflet/sitios_turisticos_2/index.html" target="_blank">ver Mapa</a></div></center>',
        '<iframe id="visor4" src="../../../compareMap/mapCampare2.html" width="100%" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe id="visor4" src="../../../compareMap/mapCampare2.html" width="127%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );

    responsiveMedia(
        "visor5",
        "(min-width: 1024px)",
        // '<center><div class="blue-link"><a href="../../../qgisLeaflet/sitios_turisticos_2/index.html" target="_blank">ver Mapa</a></div></center>',
        '<iframe id="visor5" src="../../../leaflet Routing Machine/index.html" width="100%" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe id="visor5" src="../../../leaflet Routing Machine/index.html" width="127%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
    responsiveMedia(
        "visor6",
        "(min-width: 1024px)",
        // '<center><div class="blue-link"><a href="../../../qgisLeaflet/sitios_turisticos_2/index.html" target="_blank">ver Mapa</a></div></center>',
        '<iframe id="visor6" src="../../../draw/index.html" width="100%" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe id="visor6" src="../../../draw/index.html" width="127%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
    responsiveMedia(
        "visor7",
        "(min-width: 1024px)",
        // '<center><div class="blue-link"><a href="../../../qgisLeaflet/sitios_turisticos_2/index.html" target="_blank">ver Mapa</a></div></center>',
        '<iframe id="visor7" src="../../../routing/index.html" width="100%" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe id="visor7" src="../../../routing/index.html" width="127%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
    responsiveMedia(
        "visor8",
        "(min-width: 1024px)",
        // '<center><div class="blue-link"><a href="../../../qgisLeaflet/sitios_turisticos_2/index.html" target="_blank">ver Mapa</a></div></center>',
        '<iframe id="visor8" src="../../../realtime location/index.html" width="100%" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe id="visor8" src="../../../realtime location/index.html" width="127%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );


    responsiveMedia(
        "visor9",
        "(min-width: 1024px)",
        // '<center><div class="blue-link"><a href="../../../qgisLeaflet/sitios_turisticos_2/index.html" target="_blank">ver Mapa</a></div></center>',
        '<iframe src="../../leafletMeasurePolygon/index.html" width="100%" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="../../leafletMeasurePolygon/index.html" width="127%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
    responsiveMedia(
        "visor10",
        "(min-width: 1024px)",
        // '<center><div class="blue-link"><a href="../../../qgisLeaflet/sitios_turisticos_2/index.html" target="_blank">ver Mapa</a></div></center>',
        '<iframe src="../../compareMap/sibeBySide.html" width="100%" height="700"" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '<iframe src="../../compareMap/sibeBySide.html" width="127%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );


    responsiveTester("responsive-tester");
    // userDeviceInfo("user-device"); // Deteccion de dispositivos
    // getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    slider();
    scrollSpy();
    smartVideo();
    // contactFormAjax();
})


darkTheme(".dark-theme-btn", "dark-mode"); // se quito de arriba y se puso aqui afuera del DOMContentLoaded, porque se llamo otro evento DOMContentLoaded para usar el localStorage
// networkStatus();
videoSelect();
// mensajeModal("o1", "c1", "mb1"); // para explicar el código. Mensajes de informacion en ventana modal.
mensajeModal("o1", "c1", "mb1");
mensajeModal("o2", "c2", "mb2");
// mensajeModal("o4", "c4", "mb4");