#  Juego de Torres de Hanoi


Este proyecto consiste en una implementación del famoso juego de Torres de Hanoi. El objetivo del juego es mover una torre de discos de un poste inicial a otro poste, siguiendo ciertas reglas: solo puedes mover un disco a la vez y nunca puedes poner un disco más grande sobre uno más pequeño.


<img src="img/Screenshot from 2023-07-25 07-21-50.png">


## Características clave



- **Ranking de Usuarios**: Se ha implementado una tabla de ranking que muestra los nombres de los usuarios que han resuelto el juego con mayor rapidez. ¡Compite con otros jugadores para obtener el mejor tiempo!

  

## Instrucciones

1. Abre la aplicación en tu navegador web.

2. El juego se presenta con tres postes, cada uno con una torre de discos de diferentes tamaños. El objetivo es mover la torre completa del poste izquierdo al poste derecho.

3. Para mover un disco, haz clic en él y, manteniendo presionado, arrástralo al poste deseado.

4. Recuerda que solo puedes colocar un disco más pequeño sobre uno más grande. ¡Ten cuidado con tus movimientos!

5. Una vez que hayas movido la torre completa al poste derecho, el juego te felicitará y te agregara  al ranking de jugadores.

6. Compite con otros jugadores para ver quién puede resolver el juego en el menor tiempo posible y alcanzar el primer lugar del ranking.

   

## Tecnologías Utilizadas



- **HTML, CSS y JavaScript**: El juego utiliza la funcionalidad de arrastrar y soltar (Drag and Drop) para que puedas mover los discos entre los postes de manera intuitiva y divertida.

- **Drag and Drop API**: Se ha utilizado la API de Drag and Drop de HTML5 para permitir la interacción con los discos del juego.

- **Asyn/Await**: Se han empleado las funciones asincrónicas y el uso de await para realizar solicitudes de envío y recepción de datos al servidor que almacena los tiempos de resolución de los usuarios.

- **MockAPI**: Los datos del ranking y los tiempos de resolución se almacenan en el servicio https://mockapi.io/projects, una API simulada para almacenar y recuperar información utilizando el protocolo asyn/await para realizar las solicitudes de envío y recepción de datos.

  

  