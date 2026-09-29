---
title: Nómina
category: Documentation
star: 9
sticky: 9
article: false
---

El presente material elaborado por **Solop ERP** pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de realizar los procedimientos correspondientes a nómina en Solop ERP.

- Conceptos de Nómina
  - Configuración de Conceptos con Fórmulas (Expresiones)
- Proceso de Nómina
  - Registro de Nómina
- Novedades de Nómina
  - Registro de Incidencias
- Pagos de Nómina
  - Registro de Pagos de Nómina
- Reporte de Nómina
  - Generar Reporte de Nómina

## Conceptos de Nómina

Los conceptos de nómina son los distintos rubros que componen la liquidación de un empleado (salario base, bonos, horas extra, deducciones, etc.). Cada concepto define, entre otras cosas, **cómo se calcula su valor** cuando se procesa la nómina.

### Configuración de Conceptos con Fórmulas (Expresiones)

Solop ERP permite definir el cálculo de un concepto de nómina mediante una **fórmula (expresión)** escrita directamente en la configuración del concepto, sin necesidad de crear una regla de programación aparte para cada cálculo. Esto agiliza la puesta en marcha y el mantenimiento de conceptos con cálculos simples o moderadamente complejos.

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Recursos Humanos y Nómina**, luego seleccione la carpeta **Nómina**, por último seleccione la ventana **Catálogo de Conceptos de Nómina**.

En la pestaña **Atributos del Concepto** del concepto que desea configurar, complete los siguientes campos:

- **Tipo de Cálculo**  
  Defina si el concepto se calcula mediante una **Expresión** (fórmula) o mediante un **Script** (código con lógica más avanzada). Si el concepto no utiliza ninguno de estos dos tipos, continúa calculándose con el mecanismo tradicional de reglas de nómina, sin ningún cambio en su comportamiento.

- **Expresión**  
  Disponible cuando el **Tipo de Cálculo** es `Expresión`. Aquí se escribe la fórmula que determina el valor del concepto. La fórmula puede combinar operaciones matemáticas, condiciones y funciones predefinidas.

- **Motor de Script**, **Código de Script** y **Tiempo Límite**  
  Disponibles cuando el **Tipo de Cálculo** es `Script`, para los casos en que se requiera una lógica de cálculo más avanzada que una fórmula simple.

#### Funciones disponibles en las expresiones

| Función | Qué hace |
|---|---|
| `ROUND(n, decimales)` | Redondea un número a la cantidad de decimales indicada |
| `ABS(n)` | Valor absoluto |
| `FLOOR(n)` / `CEIL(n)` | Redondeo hacia abajo / hacia arriba |
| `MIN(a, b)` / `MAX(a, b)` | Menor / mayor de dos valores |
| `IF(condición, sí, no)` | Condicional: devuelve un valor u otro según se cumpla la condición |
| `COALESCE(a, b, …)` / `NVL(valor, por_defecto)` | Devuelven el primer valor disponible cuando uno puede estar vacío |
| `UPPER(texto)` / `LOWER(texto)` / `TRIM(texto)` | Transformaciones de texto |
| `CONCAT(a, b, …)` | Concatena valores como texto |
| `LENGTH(texto)` | Longitud de un texto |
| `DATEDIFF(fecha1, fecha2)` | Diferencia en días entre dos fechas |
| `TONUMBER(texto)` / `TOSTRING(valor)` | Conversión entre texto y número |

Además de estas funciones, la expresión puede usar como variables:

- Datos del período que se está calculando (por ejemplo, la cantidad de días del período).
- El **código de otro concepto de nómina** ya calculado dentro del mismo proceso, para construir cálculos encadenados (un concepto que usa el resultado de otro).

### Ejemplo de uso

Un concepto llamado **Bono por Asistencia** puede configurarse con:

- **Tipo de Cálculo:** `Expresión`
- **Expresión:** `IF(DIAS_TRABAJADOS >= 20, MONTO_BASE * 0.10, 0)`

Con esta fórmula, el sistema paga el 10% del concepto **Monto Base** únicamente cuando el empleado trabajó 20 días o más en el período; de lo contrario, el concepto no genera pago.

De la misma forma, se pueden encadenar varios conceptos simples para construir un cálculo compuesto, por ejemplo: un concepto que suma las horas trabajadas del período, otro que calcula el valor de la hora a partir del salario del empleado, y un tercer concepto que multiplica ambos resultados para obtener el salario del período.

### Consideraciones importantes

- Los conceptos que ya utilizaban una regla de nómina tradicional (sin **Tipo de Cálculo** definido) siguen funcionando exactamente igual; esta funcionalidad es un mecanismo adicional, no un reemplazo obligatorio.
- Use **Expresión** para fórmulas y condiciones simples. Reserve **Script** para lógica de cálculo que no pueda resolverse con una fórmula (por ejemplo, escalas o recorridos más complejos).
- Verifique que los nombres de variables y de conceptos usados en la expresión coincidan exactamente con los códigos configurados en el sistema; un nombre incorrecto no producirá el cálculo esperado.

## Proceso de Nómina

El presente material elaborado por Solop ERP pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de procesar la nómina en Solop ERP.

Registro de Nómina

### Registro de Nómina

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Recursos Humanos y Nómina**, luego seleccione la carpeta **Nómina**, por último seleccione la ventana **Proceso Nómina**.

![Campo](/assets/img/docs/human-management/hum-human-image1.png)

Imagen 1. Menú de Solop ERP

Podrá visualizar la ventana **Proceso Nómina**, donde debe seleccionar el icono **Registro Nuevo** ubicado en la barra de herramientas de Solop ERP, para crear un nuevo registro de proceso de nómina.

![Campo](/assets/img/docs/human-management/hum-human-image2.png)

Imagen 2. Ventana Proceso Nómina y Selección de Icono de Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual está realizando el proceso de nómina.

Introduzca en el campo **Nombre**, el nombre de la nómina que se requiere procesar con su respectivo rango de tiempo (desde/hasta).

Seleccione el tipo de documento a generar en el campo **Tipo de Documento Destino**, la selección de este define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por Solop ERP.

Los tipos de documentos de nómina se encuentran agrupados según su comportamiento, la Nominas Semanal y la Nómina Semanal Mixta se encuentran definidas en el Tipo de Documento **Nómina Semanal**. De igual forma ocurre con las diferentes nóminas regulares utilizadas en Solop ERP.

Seleccione en el campo **Fecha Contable**, la fecha correspondiente a la fecha final del periodo de la nómina seleccionada, es decir la fecha hasta ingresada en el campo **Nombre**.

Seleccione la nómina que se requiere procesar en el campo **Nómina**. En este campo no se encuentran unidas las nóminas como en el campo **Tipo de Documento Destino**, por lo tanto se puede seleccionar la opción **Nómina Semanal Mixta** para ejemplificar el registro que se está realizando.

Seleccione el **Periodo de Nómina**. Las nóminas regulares poseen sus periodos de nómina ya sean semanales, quincenales o mensuales, usted debe elegir en este campo el periodo correspondiente a la nómina que esté ejecutando.

Seleccione en el campo **Socio del Negocio**, el socio del negocio es el empleado al cual se le va a procesar la nómina que se está registrando.

Este campo es utilizado cuando se le va a procesar la nómina a un solo empleado de la organización.Si usted desea procesar la nómina a todo el personal que tiene asignado la Nómina Semanal Mixta no seleccione a ningún Socio de Negocio.

Seleccione en el campo **Moneda**, la moneda correspondiente al pago del empleado de la organización.

Seleccione en el campo **Tipo de Conversión**, el tipo de conversión correspondiente a la moneda seleccionada para el pago.

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de Solop ERP para guardar el registro de los campos de la ventana **Proceso Nómina**.

Seleccione la opción **Completar**, ubicada en la parte inferior derecha de la ventana **Proceso Nómina**, para preparar la nómina registrada.

Seleccione la acción **Preparar** y la opción **OK** para preparar el documento.

![Campo](/assets/img/docs/human-management/hum-human-image14.png)

Imagen 14. Selección de la acción Preparar y la opción OK.

Puede preparar la nómina cuantas veces sean necesarios. Cuando esté seguro de que tiene todos los cálculos correctos proceda a completar la Nómina.

![Campo](/assets/img/docs/human-management/hum-human-image15.png)

Imagen 15. Selección de la acción Completar y la opción OK.

## Novedades de Nómina

Las novedades de nómina son todas aquellas incidencias que se deben cargar en la nómina de cada uno de los empleados.

El presente material elaborado por Solop ERP pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de registrar las novedades a los empleados, en la versión 3.9.2 de Solop ERP.

Registro de Incidencias

### Registro de Incidencias

Seleccione en el menú de Solop ERP, la carpeta **Gestión de Recursos Humanos y Nómina**, luego seleccione la carpeta **Nómina**, por último seleccione la ventana **Novedades de Nómina**.

![Campo](/assets/img/docs/human-management/hum-human-image16.png)

Imagen 1. Menú de Solop ERP

Seleccione en el campo **Proceso Nómina**, el proceso de nómina actual al cual le cargará las incidencias de los empleados. Dicho proceso se encuentra explicado en el documento Registro de Nómina elaborado por Solop ERP.

![Campo](/assets/img/docs/human-management/hum-human-image17.png)

Imagen 2. Campo Proceso Nómina

Seleccione en el campo **Socio del Negocio**, el socio del negocio empleado al cual se le cargará la incidencia.

En este campo encontrará todos los socios de negocios que tengan registrado la nómina que se está procesando, tome especial atención el empleado que seleccionará para que proceda a cargar su incidencia

Seleccione en el campo **Fecha**, la fecha en la que se le cargará la incidencia al socio del negocio empleado seleccionado.

Seleccione en el campo **Concepto Nómina**, la incidencia que se le cargará al socio de negocio empleado seleccionado.

En este campo se muestran todas las incidencias, sin importar el tipo de nómina con el que fue generado el documento proceso de nómina seleccionado.

Introduzca el valor de la incidencia que seleccionó en el campo que aparece a continuación.

Este campo se habilita para agregar valor de la incidencia que seleccionó. Existen incidencias cuyo valor es de tipo **Monto**, otras que son de tipo **Cantidad** y otras incidencias que de tipo **Fecha** en el campo que dice **Tipo de Columna** le indica el valor de la incidencia que seleccionó

Introduzca en el campo **Descripción**, una breve descripción de la incidencia que se le cargará al socio del negocio empleado.

Seleccione la opción **OK**, para que la incidencia sea cargada a la incidencia al proceso de nómina seleccionado.

Por último podrá visualizar la forma como queda generada la Incidencia lista para que sea procesada durante la nómina.

![Campo](/assets/img/docs/human-management/hum-human-image24.png)

Imagen 9. Incidencia Generada

## Pagos de Nómina

El presente material elaborado por Solop ERP pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de generar los pagos de nómina en Solop ERP.

Registro de Pagos de Nómina

### Registro de Pagos de Nómina

Luego de que usted completó su proceso de nómina debemos registrar los pagos que serán cancelados a sus empleados, para eso debemos seguir los pasos que se detallan a continuación.

Realice una **Selección de Pagos** siguiendo detalladamente los pasos que se indican en el documento Registro desde Nómina, luego de completar su selección de pago puede continuar con el siguiente requerimiento.

Genere los pagos de su nómina a traves de un formato txt en la ventana **Imprimir y Exportar Pagos** siguiendo el procedimiento que se detalla en el documento Registro de Imprimir / Exportar Pagos de Nómina, posterior a la descarga del archivo txt puede realizar el próximo proceso.

Proceda a realizar una **Transferencia Bancaria** donde reintegre el dinero que salio de su **Caja en Tránsito de Nómina** para el pago de su nómina, para ello debe completar el siguiente formulario que se detalla a continuación Transferencia Bancaria de Nómina.

Por último y para culminar el proceso de pago de nómina debe realizar un cierre de caja con la finalidad de conciliar los ingresos y egresos de nuestra **Caja en Tránsito de Nómina**, para ello debe cumplir los pasos que se detallan en el siguiente documento Cierre de Caja Nómina.

Una vez finalizado y completado cada uno de estos procesos se da por culminado el registro de pagos de nómina en Solop ERP.

## Reporte de Nómina

El presente material elaborado por Solop ERP pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de generar los reportes de nómina en Solop ERP.

Generar Reporte de Nómina

### Generar Reporte de Nómina

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Recursos Humanos y Nómina**, luego seleccione la carpeta **Nómina**, por último seleccione la carpeta **Reporte de Nómina**, para posteriormente seleccionar el **Reporte de Nómina**.

![Campo](/assets/img/docs/human-management/hum-human-image25.png)

Imagen 1. Menú de Solop ERP

Podrá visualizar en la ventana **Reporte de Nómina**, los diferentes campos que permiten generar el reporte de nómina de acuerdo a lo requerido por el usuario en su momento. Cabe destacar que estos campos son filtros los cuales nos permiten obtener la información más precisa del reporte que deseamos visualizar. No es obligatorio llenar todos campos, usted escogerá los que más se adapten a la información que usted desea obtener. A continuación se detallan cada uno de ellos

![Campo](/assets/img/docs/human-management/hum-human-image26.png)

Imagen 2. Ventana Reporte de Nómina

Seleccionar en el campo **Organización**, la organización desde la cual se va a generar el reporte de nómina.

Seleccionar en el campo **Contrato de Nómina**, el tipo de contrato por el cual se va a generar el reporte de nómina.

Seleccionar en el campo **Nómina**, la nómina a la cual pertenece el empleado y por la cual se va a generar el reporte de nómina.

Se debe seleccionar la nómina a la cual pertenece el empleado para generar el reporte de la misma.

Seleccionar en el campo **Proceso Nómina**, el proceso de nómina realizado previamente.

El número de documento del proceso de nómina lo encontrará en la ventana proceso de nómina en el campo que dice número de documento.

Seleccione en el campo **Departamento Nómina**, el departamento al cual pertenece el empleado y por el cual se va a generar el reporte de nómina.

Seleccione en el campo **Puesto Nómina**, el cargo o puesto que desempeña el empleado en la organización seleccionada anteriormente.

Seleccione en el campo **Estado del Empleado**, la condición o estatus del empleado dentro de la organización seleccionada anteriormente.

Seleccione en el campo **Socio del Negocio**, el empleado por el cual se va generar el reporte de nómina.

Seleccione en el campo **Fecha Contable**, el rango de fecha **Desde - Hasta** por el cual se va a generar el reporte de nómina.

Seleccionar en el campo **Estado del Documento**, el estado en el que se encuentra el documento de pago por el cual se va a generar el reporte de nómina.

Seleccionar en el campo **Configuración del Reporte de Nómina**, este campo es obligatorio llenarlo para obtener el reporte de Nómina, existe una gran cantidad de reportes de nóminas, los mismos están configurados dependiendo del tipo de nómina que necesite visualizar, por ejemplo la configuración de reporte de nómina llamada **Nómina Regular**, es el reporte que se utiliza cuando queremos ver los resultados de las nóminas regulares (Nómina Semanal, Nómina Semanal Mixta, Nómina Quincenal,Nómina Quincenal Mixta, Nómina Mensual y Nómina Mensual Mixta) de cada empleado de la organización seleccionada anteriormente.

Seleccionar en el campo **Plantilla de Reporte de Nómina** las diferentes formatos con los que se puede visualizar un reporte de Nómina.

Seleccionar la opción **OK**, ubicada en la parte inferior derecha de la ventana para finalmente generar el reporte de nómina en base a lo seleccionado en los diferentes campos que contiene dicha ventana **Reporte de Nómina**.

El reporte que se visualiza a continuación es un **Recibo de Pago**. Es una de los tipos de reporte que encontrará en Solop ERP.

![Campo](/assets/img/docs/human-management/hum-human-image40.png)

Imagen 16. Reporte de Nómina
