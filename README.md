# Juego de Piedra, Papel o Tijera - Implementación en React
## Parte 1: Configuración Inicial
Para comenzar, se configuró un nuevo proyecto React utilizando la herramienta de línea de comandos npx create-react-app. Esta herramienta proporciona una estructura inicial y configuración para una aplicación React.

## Parte 2: Creación de Componentes Básicos
En esta etapa, se procedió a diseñar los componentes principales de la aplicación:

# Componente App
El componente App representa la aplicación en su conjunto. En su estructura, se incluye:

- Un formulario o componente de entrada de texto para capturar el nombre del jugador.
- Subcomponentes para mostrar el marcador y los resultados de cada ronda.
- Utiliza el estado (useState) de React para manejar el nombre ingresado por el jugador.

## Subcomponentes
# Componente PlayerOptions
Este componente se encarga de obtener el nombre del jugador. Incluye:

- Un campo de entrada de texto donde el jugador puede ingresar su nombre.
- Un botón "Confirmar" que, al hacer clic, muestra un mensaje de bienvenida al jugador.
- Utiliza eventos (onChange) para capturar y actualizar el nombre del jugador.

# Componente ScoreBoard
El componente ScoreBoard muestra el marcador actual del juego. Aunque aún no se ha implementado la lógica del marcador en esta etapa, se ha creado un espacio para mostrarlo.

# Componente Result
El componente Result se encargará de mostrar los resultados de cada ronda del juego. Al igual que el marcador, en esta etapa se ha creado una estructura básica para mostrar los resultados, pero la lógica de juego aún no se ha implementado.

## Parte 3: Selección de la opción del jugador y de la PC
#Adiciones:
**Imágenes de Opciones:** Se agregaron imágenes para las opciones del juego ("rock.png", "paper.png" y "scissors.png") y se importaron en el componente `Options.js` para mostrar visualmente las opciones seleccionadas por el jugador y generadas aleatoriamente para la computadora.

**Manejo de Elecciones:** Se implementó una función `handleOptionClick` en el componente `Options.js` que permite al jugador seleccionar una opción haciendo clic en la imagen correspondiente. La computadora también elige una opción aleatoria en respuesta a la elección del jugador.

**Pasando Elecciones como Props:** Las elecciones del jugador y de la computadora se pasan como props (`playerChoice` y `computerChoice`) desde `Options.js` a otros componentes que necesitan acceder a estas elecciones.

# Modificaciones:
**Manejo de Elecciones:** Se realizó una modificación en el componente `Options.js` para manejar las elecciones del jugador y de la computadora utilizando estados locales. Cuando se selecciona una opción, estas elecciones se actualizan y se pasan como argumentos a la función `onSelectOption`, que se utiliza para comunicar las elecciones al componente principal `App.js`.

**Componente Result.js:** Se modificó `Result.js` para mostrar los resultados del juego, incluyendo las elecciones del jugador y de la computadora, así como el resultado del juego (ganador o empate). Este componente recibe las elecciones como props y calcula el resultado en función de las reglas del juego.

**Componente ScoreBoard.js:** Se modificó `ScoreBoard.js` para mostrar el marcador del juego. Este componente recibe las elecciones como props y puede ser utilizado para llevar un registro de las puntuaciones del jugador y de la computadora.

## Parte 4: Determinación del ganador y actualización del marcador
#Adiciones:
**Lógica de Determinación del Ganador:** Se implementó la lógica para determinar el ganador en el componente `Result.js` utilizando las elecciones del jugador y de la computadora. El resultado se muestra en función de las reglas del juego (por ejemplo, "Ganaste" o "La PC ganó").

# Modificaciones:
**Componente App.js:** Se modificó el componente `App.js` para incluir los nuevos componentes *Result* y *ScoreBoard* en la interfaz de usuario.

**Manejo de Elecciones en Options.js:** Se ajustó el manejo de las elecciones en el componente `Options.js` para asegurarse de que se actualicen correctamente y se pasen como props a otros componentes.

## Implementación de React Props y Cambios en la Visualización de Imágenes
#Adiciones:
**Uso de React Props:** Se implementó el uso de React Props para pasar datos y funciones entre componentes de React de manera más organizada y modular.

**Componente Options.js:** Se modificó el componente `Options.js` para recibir una función `onSelectOption` como prop. Esta función se llama cuando el jugador elige una opción y se utiliza para comunicar las elecciones al componente principal `App.js`.

**Componentes ScoreBoard.js y Result.js:** Se crearon dos nuevos componentes, ScoreBoard.js y Result.js, para mostrar el marcador del juego y los resultados, respectivamente. Estos componentes reciben datos como props y se utilizan para mostrar información relevante al jugador.

**Imágenes de Opciones:** Se agregaron imágenes para las opciones del juego ("rock.png", "paper.png" y "scissors.png") y se importaron en el componente Options.js para su visualización.

# Modificaciones:
**Componente Options.js:** Se modificó el componente `Options.js` para manejar las elecciones del jugador y de la computadora utilizando estados locales (`playerChoice` y `computerChoice`). Se agregó una función `handleOptionClick` para manejar la selección de opciones y se llamó a `props.onSelectOption` para comunicar las elecciones al componente principal `App.js`.

**Componente App.js:** Se modificó el componente `App.js` para incluir los nuevos componentes *Options, ScoreBoard* y *Result* en la interfaz de usuario. Las elecciones del jugador y de la computadora se pasan como props a estos componentes para mostrar resultados y el marcador.

**Manejo de Imágenes:** Se modificó el componente `Options.js` para manejar la visualización de imágenes de las opciones del juego. Se importaron las imágenes y se utilizaron en las etiquetas <img> para mostrar las opciones seleccionadas por el jugador y la computadora.

## Parte 5, 6 y 7
#Cambios Realizados

**Contador de Victorias:** Se ha añadido un contador de victorias tanto para el jugador como para la computadora. Estos contadores se inicializan en cero al inicio del juego y se actualizan en función de los resultados de cada ronda.

**Efecto useEffect:** Se ha incorporado un efecto *useEffect* que se ejecuta cada vez que se actualizan las puntuaciones del jugador y la computadora. Este efecto se utiliza para verificar si uno de los jugadores ha alcanzado 3 victorias, lo que marca el final del juego.

**Finalización del Juego:** Cuando uno de los jugadores (ya sea el jugador humano o la computadora) alcanza 3 victorias, se muestra una alerta que anuncia al ganador del juego. Si el jugador gana, se muestra su nombre, y si la computadora gana, se muestra "La PC" como ganador.

**Reinicio del Juego:** Después de que se haya anunciado al ganador, se implementa una función de reinicio que restablece las puntuaciones del jugador y la computadora, así como el contador de rondas. Esto permite que el juego comience nuevamente desde cero.

## Parte 8: Estilos CSS con Styled Components y otros cambios estéticos

**Botones de Reinicio:** Se han agregado botones de reinicio tanto para reiniciar la partida actual como para reiniciar por completo el juego. Esto proporciona una experiencia más amigable y permite a los jugadores tener un mayor control sobre el flujo del juego.

**Contenedor Centralizado:** Se ha agregado un contenedor adicional llamado *InnerContainer* alrededor de los elementos de la interfaz principal. Este contenedor mejora la presentación visual al centrar todo el contenido.

**Mostrar/Ocultar el Título y los Resultados Dinámicamente:** Se han agregado estados para controlar la visibilidad del título y la sección de resultados. El título se oculta una vez que se confirma el nombre del jugador, mientras que los resultados solo se muestran después de que se ha realizado la primera jugada. Estos cambios proporcionan una interfaz más limpia y centrada en la acción del juego.

**Reubicación de Elementos:** Los elementos de la interfaz se han reorganizado para una mejor experiencia del usuario. Ahora, primero se muestra el marcador, seguidos del resultado de la ronda, luego las opciones del jugador, y, finalmente, las elecciones del jugador y la computadora.

**Borde de animado para el marcador:** se utiliza { keyframes } para importar la función keyframes que se usa en la definición de animaciones dentro de esos componentes estilizados. 
