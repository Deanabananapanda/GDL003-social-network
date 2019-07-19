# Creando una Red Social
## SholoFood

### ¿Cuáles son los elementos básicos que tiene una red social?
Tienen como finalidad principal poner en contacto a personas, de tal forma que a través de la plataforma electrónica se facilite la conexión de forma sencilla y rápida.

Permiten la interacción entre todos los usuarios de la plataforma, ya sea compartiendo información, contactando o facilitando contactos de interés para el otro usuario.

Permiten y fomentan la posibilidad de que los usuarios inicialmente contactados online acaben entablando un contacto real, del que muy probablemente nacerán nuevas relaciones sociales.

Permiten un contacto ilimitado entre los usuarios, en la medida en que el concepto espacio-tiempo se hace relativo al poder comunicarse desde y hacia cualquier lugar, así como en cualquier momento, con la única condición de que ambas partes acepten relacionarse entre sí.

Fomentan la difusión viral de la red social a través de cada uno de los usuarios que la componen, empleando este método como principal forma de crecimiento del número de usuarios.

###¿Quiénes son los principales usuarios de producto?
Muejeres/Hombres  con nocion basica acerca de redes sociales (facebook e instagram) que son amantes de la comida callejera.

###¿Cómo descubriste las necesidades de los usuarios?
Por medio de encuestas y test.

###¿Qué problema resuelve el producto para estos usuarios?
Para el usuario, el tener una red social donde publicar tus lugares favoritos callejeros  para asi beneficiar también al propietario del mismo e impulsar los pequeños negocios locales.
###¿Cuáles son los objetivos de estos usuarios en relación con el producto?
Impulsar los pequeños negocios.
###¿Cuáles son las principales funcionalidades del producto y cuál es su prioridad?
- Hacer publicaciones.
- Editar, Borrar dicha publicaciones.
- Buscar su comida favorita por medio de hashtag.
- Poder acceder a la red social por medio de facebook o gmail.
- Poder crear una cuenta en la misma.
###¿Cómo verificaste que el producto les está resolviendo sus problemas?
Enfocandonos en el usuario y haciendo cambios si son necesarios por medio de feedback.
###¿Cómo te asegurarás que estos usuarios usen este producto?
Por la interfaz fácil de usar y por la facilidad que tendrás de encontrar comida.

#ENCUESTA:
https://forms.gle/YVBY9si5MXWDVF1dA

#PROTOTIPO DE BAJA FIDELIDAD:

#PROTOTIPO DE ALTA FIDELIDAD:


## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.


## Pistas / Tips / Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas y Single-page Applications (SPAs)

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history),
o usando algun Library de Routing del cual puedes preguntarle a tus coachxs.
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

Otras:

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)

***

## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Definición del producto
* [ ] Resumen de entrevistas con usuarios.
* [ ] Link/screenshots prototipo de baja fidelidad.
* [ ] Conclusiones de pruebas con el producto en HTML.

### Pruebas / tests

* [ ] Pruebas unitarios cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [ ] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [ ] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Muro (wall/feed)

* [ ] Muestra _muro_, o lista de publicaciones.
* [ ] Permite hacer nuevas publicaciones.
* [ ] Permite eliminar publicaciones.
* [ ] Pide confirmación antes de borrar publicación.
* [ ] Permite editar publicación en el mismo lugar (in place).
* [ ] Permite filtrar publicaciones por público/privado.
* [ ] Permite marcar publicaciones como _gustados_ (like, corazón, estrella,
  etc...).
* [ ] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.

### Hacker Edition

* [ ] Permite agregar amigos.
* [ ] Permite eliminar amigos.
* [ ] Permite compartir publicación (en twitter esto es retwittear, en facebook
  es compartir).
* [ ] Permite comentar o responder una publicación.
* [ ] Permite editar perfil.
* [ ] Permite ver perfil o resumen desde el _muro_ o lista de publicaciones.
* [ ] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.
* [ ] Single Page Application (Incluye refactorización)
