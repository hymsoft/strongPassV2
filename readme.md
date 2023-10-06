# Generador de Contraseñas

El Generador de Contraseñas es una aplicación web que permite generar contraseñas aleatorias y seguras basadas en las opciones seleccionadas por el usuario.

## Función `showToast`

Muestra un mensaje de notificación tipo "toast".

### Parámetros

- `message` (string): El mensaje que se mostrará en el toast.
- `variant` (string): La variante de color del toast (por ejemplo, "success", "warning", "error").
- `duration` (number) (opcional): La duración en milisegundos durante la cual se mostrará el toast. Valor predeterminado: 2000 ms.

### Retorno

- `Object`: La instancia del toast mostrado.

## Función `generatePassword`

Genera una contraseña aleatoria basada en las opciones seleccionadas.

### Retorno

- `string`: La contraseña generada.

## Evento de clic en el botón "Generar Contraseña"

Asigna un evento al botón de generar contraseña para mostrar la contraseña generada en un contenedor.

## Evento de clic en la contraseña generada

Asigna un evento de clic al documento para copiar la contraseña al portapapeles cuando se hace clic en el elemento de contraseña.

## Evento de entrada en el campo de longitud

Asigna un evento de entrada al elemento de longitud para actualizar la etiqueta de longitud.

---

Este programa utiliza la biblioteca Bootstrap 5 para estilos y funcionalidades de interfaz de usuario.

## Requisitos

- Seleccionar al menos una opción de generación de contraseña (mayúsculas, minúsculas, números, símbolos).
- Especificar la longitud deseada para la contraseña mediante un control deslizante.
- Hacer clic en el botón "Generar Contraseña" para generar una nueva contraseña.
- Hacer clic en la contraseña generada para copiarla al portapapeles.

## Recomendaciones de seguridad

- Utilizar contraseñas diferentes para cada sitio web o servicio.
- Utilizar contraseñas seguras generadas aleatoriamente para mejorar la seguridad.
- Actualizar regularmente las contraseñas y cambiarlas inmediatamente si hay sospechas de una violación de seguridad.

---

¡Mantén tus contraseñas seguras y protege tu información personal en línea!

© HyM Soft (2021 - [Año Actual])
