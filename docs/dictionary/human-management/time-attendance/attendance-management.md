---
title: Gestión de Asistencias
category: Documentation
star: 9
sticky: 9
article: false
---

# Gestión de Asistencias

## Descripción

El formulario **Gestión de Asistencias** es el panel de control diario de las marcas de entrada y salida del personal de campo. Cada fila representa un **turno planificado** de un trabajador (una asignación del Planificador de Recursos para un cliente y contrato) y muestra, frente al horario planificado, la hora real de entrada, la hora real de salida y un **Estado** que resume en una sola etiqueta cómo va ese turno.

Las marcas llegan principalmente desde la aplicación móvil: cuando el trabajador marca su entrada o su salida en una visita, el sistema registra la hora, la ubicación y si la marca se hizo fuera de la zona permitida o sin conexión. Con esa información, el formulario calcula el estado del turno en tiempo real y permite a coordinadores y supervisores detectar ausencias, llegadas tarde, salidas anticipadas y turnos que requieren aprobación.

El estado no se guarda como un dato fijo: se **recalcula** cada vez que se consulta la grilla, según la hora actual y las marcas registradas hasta ese momento. Por eso un mismo turno cambia de estado a lo largo del día (por ejemplo, de *Próximo a iniciar* a *Pendiente de ingreso*, luego a *En turno* y finalmente a *A tiempo*).

## ¿Cuándo se utiliza?

Se utiliza cuando la organización necesita:

- Controlar en el día quién ya ingresó a su turno y quién todavía no marcó la entrada.
- Detectar ausencias injustificadas, llegadas tarde y salidas anticipadas.
- Identificar turnos que quedaron abiertos (con entrada pero sin salida).
- Revisar marcas realizadas fuera de la ubicación del cliente o fuera del horario permitido.
- Ver qué turnos requieren aprobación antes de ser procesados.
- Consultar la asistencia por trabajador, cliente, contrato o coordinadora en un rango de fechas.

## Acceso

**Desde el menú:** Manejo de Proyecto → Asunto → Gestión de Asistencia.

## Conceptos previos

Para interpretar correctamente los estados conviene tener presentes estos conceptos:

- **Turno planificado**
  Es la asignación del trabajador a un cliente y contrato para un día y un horario determinados, generada desde el Planificador de Recursos. En la grilla se ve como el texto *Plan.* debajo de las columnas Entrada y Salida (por ejemplo, *Plan.: 08:00* y *Plan.: 13:00*).

- **Marca de entrada y marca de salida**
  Cada turno admite una marca de entrada y una marca de salida. La primera marca registrada del turno es la **entrada**; la última es la **salida**. Las marcas se agrupan en un **lote de asistencia** por turno.

- **Tolerancia**
  Minutos permitidos antes y después de la hora planificada para que una marca se considere dentro de tiempo. Se aplica tanto a la entrada como a la salida.

- **Ventana de entrada**
  Período en el que el trabajador ya puede marcar su entrada: comienza en la hora planificada de inicio **menos** la tolerancia.

**Ejemplo de referencia usado en este documento:** turno de 07:00 a 15:00 con tolerancia de 15 minutos.

- Una entrada es válida entre 06:45 y 07:15.
- Una salida es válida entre 14:45 y 15:15.

## Filtros del formulario

La parte superior del formulario permite acotar la información de la grilla:

- **Buscar**
  Búsqueda libre por trabajador, cliente o contrato.

- **Selectores de estado, marca y planificación**
  Permiten mostrar solo los turnos de un estado determinado, solo los turnos **marcados**, **no marcados** o **todos**, y elegir si se ven los turnos **con planificación**, los trabajadores **sin planificación** o ambos (ver [Trabajadores sin turno asignado](#trabajadores-sin-turno-asignado)).

- **Cliente** y **Coordinadora**
  Filtran los turnos de un cliente o de una coordinadora específica.

- **Rango de fechas**
  Define los días a consultar. Por defecto muestra el día actual.

- **Refresco automático**
  Selector de intervalo (por ejemplo, *20 s*) con el que la grilla se actualiza sola. El botón de recarga fuerza una actualización inmediata.

### Filtros rápidos

Debajo de los filtros se muestran accesos rápidos con el contador de turnos que cumplen cada condición. Al pulsarlos se filtra la grilla:

| Filtro rápido | Qué muestra |
|---|---|
| **Pendientes por ingreso** | Turnos sin marca de entrada cuya ventana de entrada ya abrió. |
| **Pendientes por salida** | Turnos con entrada y sin marca de salida. |
| **Ausentes** | Turnos sin marca de entrada cuyo horario ya terminó. |
| **Fuera de tiempo** | Turnos con al menos una marca fuera de la tolerancia. |
| **Fuera de ubicación** | Turnos con al menos una marca realizada fuera de la zona permitida. |
| **Entrada Tarde** | Turnos con entrada posterior a la tolerancia. |
| **Salida anticipada** | Turnos con salida anterior a la tolerancia. |
| **Ausencias justificadas** | Turnos de trabajadores con licencia o permiso aprobado. |
| **Requiere aprobación** | Turnos cuyo lote de asistencia necesita aprobación (por ejemplo, por marcas fuera de ubicación). |

## Columnas de la grilla

- **Fecha**
  Día del turno.

- **Trabajador**
  Empleado asignado al turno.

- **Cliente** y **Contrato**
  Cliente y contrato de servicio donde se presta el turno.

- **Coordinadora**
  Responsable de la coordinación del contrato.

- **Entrada**
  Hora real de la marca de entrada (o "—" si no marcó) y, debajo, la hora planificada de inicio.

- **Salida**
  Hora real de la marca de salida (o "—" si no marcó) y, debajo, la hora planificada de fin.

- **Estado**
  Etiqueta que resume la situación del turno. Ver [Estados de la columna Estado](#estados-de-la-columna-estado).

- **Procesado**
  Indica si el lote de asistencia del turno ya fue procesado (**Sí**) o todavía no (**No**). Muestra "—" cuando el turno aún no tiene marcas.

## Estados de la columna Estado

La columna **Estado** puede mostrar 11 valores. El color indica el nivel de atención que requiere el turno:

- **Verde**: todo correcto.
- **Gris**: informativo, no requiere acción.
- **Naranja**: requiere revisión.

| Estado en pantalla | Color | Qué significa | Cuándo aparece |
|---|---|---|---|
| **Próximo a iniciar** | Gris | El turno todavía no comienza. | No hay marca y aún no abrió la ventana de entrada (por ejemplo, consulta a las 05:00). |
| **Pendiente de ingreso** | Naranja | El trabajador ya puede marcar la entrada y no lo hizo. | No hay marca, la ventana de entrada ya abrió (desde las 06:45) y el turno no terminó. |
| **Ausencia injustificada** | Naranja | El trabajador nunca marcó la entrada. | No hay marca de entrada y el turno ya terminó. También se muestra para un trabajador activo que no tiene ningún turno asignado ese día. |
| **Ausencia justificada** | Gris | El trabajador tiene licencia o permiso aprobado; no requiere marca. | Existe una licencia aprobada o una ausencia registrada para ese día. Tiene prioridad sobre cualquier otro estado. |
| **En turno** | Verde | Entró a tiempo y el turno sigue en curso. | Entrada dentro de la tolerancia y todavía sin salida (por ejemplo, entrada 07:05). |
| **En turno (entrada temprana)** | Naranja | Entró antes de lo permitido y el turno sigue en curso. | Entrada fuera de la tolerancia y antes de la hora planificada (por ejemplo, 06:30). |
| **En turno (entrada tarde)** | Naranja | Entró después de lo permitido y el turno sigue en curso. | Entrada fuera de la tolerancia y después de la hora planificada (por ejemplo, 07:25). |
| **A tiempo** | Verde | Turno completo, sin tardanzas ni salidas fuera de tolerancia. | Entrada y salida dentro de lo permitido. Una entrada temprana también cierra como *A tiempo*. |
| **Tarde** | Naranja | Turno completo, pero con entrada tarde. | Entrada fuera de la tolerancia después de la hora planificada y salida a tiempo (por ejemplo, 07:25 y 14:55). |
| **Salida anticipada** | Naranja | Salió antes de lo permitido. | Salida fuera de la tolerancia y antes de la hora planificada (por ejemplo, 14:30). |
| **Tiempo Excedido** | Naranja | Salió después de lo permitido, o no marcó la salida. | Salida fuera de la tolerancia después de la hora planificada (por ejemplo, 16:30). También cuando hay entrada, no hay salida y el turno ya terminó. |

## ¿En función de qué cambia el estado?

El sistema evalúa las condiciones en el siguiente orden y asigna el **primer** estado que corresponda:

### 1. Ausencia justificada

Si el trabajador tiene una licencia o permiso aprobado para ese día, el estado es **Ausencia justificada**, sin importar si hay marcas o no.

### 2. Sin marca de entrada

Depende de la hora en que se consulta la grilla:

- Antes de que abra la ventana de entrada → **Próximo a iniciar**.
- Con la ventana de entrada abierta y el turno todavía vigente → **Pendiente de ingreso**.
- Con el turno ya terminado → **Ausencia injustificada**.

### 3. Con marca de entrada y sin marca de salida

- Si el turno ya terminó → **Tiempo Excedido**.
- Si el turno sigue en curso, según la hora de entrada:
  - Entrada antes de la tolerancia → **En turno (entrada temprana)**.
  - Entrada después de la tolerancia → **En turno (entrada tarde)**.
  - Entrada dentro de la tolerancia → **En turno**.

### 4. Con marca de entrada y marca de salida

La **salida pesa más que la entrada**:

1. Salida después de la tolerancia → **Tiempo Excedido**.
2. Salida antes de la tolerancia → **Salida anticipada**.
3. Salida a tiempo y entrada tarde → **Tarde**.
4. En cualquier otro caso → **A tiempo**.

### Ciclo de vida típico de un turno

```
Próximo a iniciar
      │  (abre la ventana de entrada)
      ▼
Pendiente de ingreso ──(termina el turno sin marca)──► Ausencia injustificada
      │  (marca la entrada)
      ▼
En turno / En turno (entrada temprana) / En turno (entrada tarde)
      │                                      │
      │ (marca la salida)                    │ (termina el turno sin salida)
      ▼                                      ▼
A tiempo / Tarde / Salida anticipada /   Tiempo Excedido
Tiempo Excedido
```

El estado se actualiza solo a medida que avanza la hora y se registran nuevas marcas; no es necesario ejecutar ningún proceso.

## Ejemplos de uso

### Tabla de resultados según las marcas

Turno de 07:00 a 15:00 con tolerancia de 15 minutos:

| Entrada | Salida | Estado |
|---|---|---|
| — (consulta 05:00) | — | Próximo a iniciar |
| — (consulta 10:00) | — | Pendiente de ingreso |
| — (consulta 16:00) | — | Ausencia injustificada |
| 07:05 | — | En turno |
| 06:30 | — | En turno (entrada temprana) |
| 07:25 | — | En turno (entrada tarde) |
| 07:05 | 14:55 | A tiempo |
| 06:30 | 14:55 | A tiempo |
| 07:25 | 14:55 | Tarde |
| 07:05 | 14:30 | Salida anticipada |
| 07:25 | 14:30 | Salida anticipada (manda la salida) |
| 07:05 | 16:30 | Tiempo Excedido |
| 07:25 | 16:30 | Tiempo Excedido |

### Seguimiento de un turno durante el día

Una coordinadora revisa la grilla del día para un trabajador con turno de 09:00 a 10:00 y tolerancia de 15 minutos:

1. A las 08:30 el turno figura como **Próximo a iniciar**: todavía no abrió la ventana de entrada (08:45).
2. A las 08:50 el turno pasa a **Pendiente de ingreso** y aparece en el filtro rápido *Pendientes por ingreso*.
3. El trabajador marca la entrada desde la aplicación móvil a las 09:00. El turno pasa a **En turno**.
4. A las 10:20 el trabajador todavía no marcó la salida y el turno ya terminó: el estado cambia a **Tiempo Excedido**.
5. La coordinadora contacta al trabajador para confirmar la hora real de salida y regularizar la marca.

## Información adicional por fila

Como la columna Estado muestra un solo valor, otros detalles del turno se informan por separado y no se pierden:

- Si la **entrada** o la **salida** estuvo **fuera de tiempo**.
- Si alguna marca se realizó **fuera de ubicación** (fuera de la zona permitida del cliente).
- Si el lote de asistencia **requiere aprobación**.

Un turno puede figurar **A tiempo** y, al mismo tiempo, requerir aprobación por haber marcado fuera de la zona permitida. Para identificar estos casos, utilizar los filtros rápidos **Fuera de ubicación** y **Requiere aprobación**.

## Trabajadores sin turno asignado

Además de los turnos planificados, el formulario puede mostrar a los **trabajadores activos que no tienen ningún turno asignado** en el día consultado. Esto permite detectar personal que quedó sin planificar (por ejemplo, porque no se generaron las asignaciones de un contrato para ese día).

- Se consideran **activos** los empleados activos cuyo estado de empleado es *Activo* (o no tiene estado definido).
- Estas filas no tienen cliente, contrato ni horario planificado, y se muestran con estado **Ausencia injustificada**.
- Solo se generan para los días que el **Turno de Trabajo** del empleado indica como laborables. Si el empleado no tiene un turno de trabajo configurado, la fila se genera igual, porque el sistema no puede saber si ese día era de descanso.
- No se cruzan con licencias ni permisos: un trabajador sin turno asignado figura como *Ausencia injustificada* aunque tenga una licencia aprobada.
- No aparecen cuando se filtra por **Cliente** o **Contrato**, ya que no están vinculadas a ninguno.
- Para verlas, seleccionar la opción **sin planificación** (o **todos**) en el selector de planificación.

## Preguntas frecuentes

### ¿Por qué un turno figura "Tiempo Excedido" si el trabajador se retiró a horario?

Porque **no se registró la marca de salida**. Cuando hay marca de entrada, no hay marca de salida y el horario planificado ya terminó, el sistema no puede confirmar que el trabajador se retiró a tiempo y muestra **Tiempo Excedido**. Una vez registrada o regularizada la marca de salida, el estado se recalcula según la hora real.

### Un trabajador entró tarde y salió antes. ¿Por qué figura "Salida anticipada" y no "Tarde"?

Porque la **salida pesa más que la entrada**. Cuando el turno tiene ambas marcas, el sistema evalúa primero la salida: si está fuera de la tolerancia, ese es el estado. El detalle de la entrada fuera de tiempo se conserva en la información adicional de la fila y en el filtro rápido **Entrada Tarde**.

### ¿Por qué una entrada temprana termina como "A tiempo"?

Mientras el turno está en curso, la entrada temprana se informa como **En turno (entrada temprana)**. Una vez marcada la salida dentro de la tolerancia, el turno se considera cumplido y cierra como **A tiempo**, porque llegar antes no implica incumplimiento del horario. La marca fuera de tiempo sigue visible en la información adicional de la fila.

### Un trabajador tiene licencia aprobada pero igualmente marcó. ¿Qué estado se muestra?

**Ausencia justificada**. La licencia o el permiso aprobado tiene prioridad sobre cualquier otro estado, sin importar las marcas registradas.

### ¿Por qué aparece un trabajador como "Ausencia injustificada" sin cliente ni contrato?

Es un trabajador activo que **no tiene ningún turno asignado** ese día. Conviene revisar en el Planificador de Recursos si correspondía asignarlo. Ver [Trabajadores sin turno asignado](#trabajadores-sin-turno-asignado).

### ¿Hay que ejecutar algún proceso para que se actualice el estado?

No. El estado se calcula cada vez que se consulta la grilla, con la hora actual y las marcas registradas. El refresco automático actualiza la vista según el intervalo seleccionado.

## Consideraciones importantes

- El estado depende de la **hora de consulta**: el mismo turno puede mostrar estados distintos si se consulta a distintas horas del día.
- La **tolerancia** se aplica por igual antes y después de la hora planificada, tanto para la entrada como para la salida.
- Cada turno admite **una marca de entrada y una de salida**: la primera marca del turno se toma como entrada y la última como salida.
- Las marcas que pertenecen a **lotes de asistencia anulados** no se tienen en cuenta para calcular el estado.
- Las marcas realizadas **sin conexión** desde la aplicación móvil se sincronizan cuando el dispositivo recupera la conexión; hasta ese momento, el turno puede figurar como *Pendiente de ingreso* o *Tiempo Excedido*.
- Los días de descanso semanal se definen en el **Turno de Trabajo** del grupo de turnos del empleado; un día marcado como descanso no genera filas de trabajadores sin turno asignado.
- El filtro **Requiere aprobación** es independiente del estado: un turno *A tiempo* puede requerir aprobación por marcas fuera de ubicación.

## Ventanas relacionadas

- [Control de Asistencia](./)
- [Reportar Horas de Personal](report-personal-hours)
- [Solicitud de Permiso](../leave-management/leave-request)
- [Tipo de Permiso](../leave-management/leave-type)
- [Empleado](../employee/)
