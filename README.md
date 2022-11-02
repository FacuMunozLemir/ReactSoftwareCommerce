# Nombre del proyecto: React Software Commerce
## React software commerce V1.0.0

... 

## Acerca del proyecto 

Proyecto simulando un E-Commerce básico donde los productos son productos de Software. La idea de este proyecto es poder utilizarlo como proyecto final para el curso de React Js de CoderHouse.

...

## Funcionalidades principales
- Filtro de producto basado en el sistema operativo destino: Se venden software destinados a dispositivos con SO "Android" o "Windows".
- Vista detallada del producto seleccionado: aquí podemos ver en datelle la imagen de producto, su descripción y es aquí donde podemos seleccionar la cantidad que deseamos agregar al carrito (si superamos el stock disponible una alerta nos va avisar que no podemos superar dicha cantidad).
- Carrito de compras: En el carrito podremos ver un resumen de todos los productos que vamos a comprar, con su precio individual y el valor total de la compra.
- Realizar compra: Para finalizar la compra el usuario debe introducir sus datos personales (nombre completo, teléfono y mail) en un formulario.

...

## Flujo de interacción del usuario
1) El usuario selecciona el producto que desea comprar pulsando el boton "Descripción".
2) El usuario selecciona la cantidad del producto que desea comprar y luego aprieta el botón "Agregar al Carrito". 
3) Una vez realizado el paso anterior el usuario podrá ver la cantidad de items que tiene en el carrito en el ícono en la parte derecha del navegador.
4) En el carrito podrá ver un resumen de lo que va a comprar junto con el valor total a abonar por la compra.
5) Para finalizar la compra deberá introducir sus datos en un formulario.
6) Luego de llenar sus datos solo debe apretar el botón "Confirmar compra" y listo esto va a redirigir al usuario a una pantalla de éxito en la compra.

### IMPORTANTE: El carrito no se vacía sinó hasta despues de terminada la compra cuando el usuario presiona el botón "Volver al Inicio" de la pantalla de éxito en la compra (checkout).

...

## ¿Cómo usar el proyecto?

### Clonar el repositorio
$ git clone https://github.com/FacuMunozLemir/ReactSoftwareCommerce

### Ir al repositorio 
$ cd ReactSoftwareCommerce

### Instalar las dependencias
$ npm intall

### Ejecutar la app
$npm start

...

## Dependencias aparte del proyecto
La idea de esta sección es dejar mostrado cuales son las otra dependencias que el proyecto podría llegar a necesitar, junto con sus versiones, en caso que no funcione una vez clonado

    "@fortawesome/fontawesome-svg-core": "^6.2.0"
    "@fortawesome/free-solid-svg-icons": "^6.2.0",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@uiball/loaders": "^1.2.6",
    "firebase": "^9.12.1",