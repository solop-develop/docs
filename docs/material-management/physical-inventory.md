---
title: Inventario Físico
category: Documentation
star: 9
sticky: 9
article: false
---

# Inventario Físico

## Descripción

La ventana **Inventario Físico** permite registrar el conteo real de productos en existencia y ajustar las cantidades en el sistema para que coincidan con la realidad del almacén. El proceso reemplaza la cantidad registrada en el sistema por la cantidad realmente contada, generando los movimientos internos necesarios para dejar el inventario actualizado.

Este procedimiento es delicado y debe realizarse únicamente cuando exista una discrepancia comprobada entre las existencias físicas del almacén y los registros del sistema, por motivos como robo, hurto, error de registro u otras causas justificadas.

::: warning
Solop ERP recomienda que el ajuste de inventario físico sea autorizado y supervisado por los responsables del almacén, el área de contabilidad y la gerencia de la organización antes de ser procesado.
:::

## ¿Cuándo se utiliza?

Se utiliza cuando se necesita:

- Corregir diferencias entre el stock registrado en el sistema y el conteo físico real del almacén
- Registrar pérdidas de inventario por robo, hurto, merma u otras causas justificadas
- Actualizar las existencias tras realizar un conteo periódico o una auditoría de inventario

## Acceso

Menú: Gestión de Materiales → Inventario Físico

## Pestañas

### Conteo de Inventario

Encabezado del documento de inventario físico. Contiene los datos generales del ajuste:

- **Organización** — Organización para la cual se realiza el ajuste de inventario
- **Almacén** — Almacén donde se realizó el conteo físico y se detectó la discrepancia
- **Fecha del movimiento** — Fecha en que se realizó el conteo real en el almacén. Por defecto se carga la fecha del día actual
- **Tipo de documento** — Define el comportamiento del documento. Debe seleccionarse el tipo correspondiente a Inventario Físico
- **Descripción** — Descripción opcional del motivo o contexto del ajuste

### Línea de Conteo de Inventario

Pestaña donde se registra una línea por cada producto que requiere ajuste:

- **Producto** — Producto cuya cantidad se va a corregir
- **Ubicación** — Ubicación exacta dentro del almacén donde se encuentra el producto
- **Cantidad en libros** — Cantidad que el sistema tiene registrada para el producto a la fecha actual. Este campo es informativo y se carga automáticamente
- **Cantidad contada** — Cantidad real que existe físicamente en el almacén. Este es el valor que se ingresa manualmente

## Acciones disponibles

- **Completar**
  Procesa el documento y genera los movimientos de inventario necesarios para llevar la cantidad registrada en el sistema hasta la cantidad contada. Si la cantidad contada es menor, se genera un ajuste negativo; si es mayor, se genera un ajuste positivo.

## Registro Manual de Inventario Físico

Recomendado cuando se ajustan pocos productos. Para ajustes masivos, vea [Importación de Inventario Físico desde un Excel](#importacion-de-inventario-fisico-desde-un-excel).

### 1. Crear el encabezado del documento

Abrir la ventana **Inventario Físico** y crear un nuevo registro. Seleccionar la organización, el almacén donde se realizó el conteo y la fecha del movimiento. Confirmar que el tipo de documento es **Inventario Físico** y guardar el encabezado.

### 2. Agregar las líneas de productos

Ir a la pestaña **Línea de Conteo de Inventario** y agregar una línea por cada producto que se necesita ajustar. Para cada línea:

1. Seleccionar el **Producto**
2. Indicar la **Ubicación** dentro del almacén
3. El sistema carga automáticamente la **Cantidad en libros** (existencia actual según el sistema)
4. Ingresar la **Cantidad contada** (lo que realmente existe en el almacén)

Repetir este paso para todos los productos que requieran ajuste.

### 3. Completar el documento

Regresar a la pestaña principal **Conteo de Inventario** y seleccionar la acción **Completar**. El sistema genera automáticamente los movimientos necesarios para ajustar cada producto desde su cantidad en libros hasta la cantidad contada.

### 4. Verificar el ajuste

Para confirmar que el inventario quedó correctamente actualizado, ejecutar el reporte **Informe de Inventario Valorado** filtrando por la fecha en que se realizó el ajuste. El reporte mostrará las cantidades en existencia actualizadas para cada producto ajustado.

## Importación de Inventario Físico desde un Excel

Cuando se deben ajustar muchos productos, el inventario físico se puede importar desde un archivo Excel mediante el **Cargador de Archivos**. El procedimiento es el mismo en las instancias ZK y VUE; solo cambia la interfaz.

### Datos requeridos

- **Formato de importación:** *Importar Inventario*. Se instala con el archivo **ImportadorInventario.zip** (exportado por PackOut).
- **Archivo Excel** con las siguientes columnas, en este orden:

| # | Columna | Detalle |
|---|---------|---------|
| 1 | ID Organización | ID de la organización donde se importa |
| 2 | Código Almacén | Código del almacén |
| 3 | Fecha Movimiento | Formato `dd/MM/yyyy` |
| 4 | Código Ubicación | Código de la ubicación dentro del almacén |
| 5 | Código Producto | Código del producto |
| 6 | Cantidad Contada | Cantidad real contada |

Como guía se puede usar el archivo de ejemplo **Inventario.xlsx**:

- Hoja **Ejemplo-Inventario**: incluye la fila de encabezado que indica a qué corresponde cada columna.
- Hoja **Para-Subir**: sin fila de encabezado, lista para importar.

::: warning
El archivo que se sube al cargador **no debe incluir la fila de encabezado**.
:::

### Procedimiento

1. **Preparar el archivo.** Ordenar la información en el Excel con el orden de columnas indicado, tomando como guía **Inventario.xlsx**.
2. **Validar la ventana Importar Inventario.** Debe estar vacía. Si contiene datos, eliminarlos con el proceso **Borrar Importación**, seleccionando la tabla **I_Inventory_Importar Inventario**.
3. **Subir el archivo** con el **Cargador de Archivos**: seleccionar el archivo, el set de caracteres y el formato de importación **Importar Inventario**.
   - En Linux utilizar **ISO-8859-9**.
   - En Windows utilizar **UTF-8**.
4. **Validar la carga.** En la ventana **Importar Inventario** deben aparecer todas las líneas que indicó el cargador, es decir, la misma cantidad de filas del Excel (sin el encabezado). Verificar también que la información haya llegado correctamente.
5. **Ejecutar el proceso.** Seleccionar el icono **Proceso** (engranaje) y ejecutar **Importa Inventario** con los parámetros:
   - **Compañía:** por defecto, la compañía con la que se inició sesión
   - **Organización:** organización donde se está importando
   - **Ubicación:** ubicación donde se está importando
   - **Fecha de Movimiento:** por defecto, la fecha en que se ejecuta el proceso
6. **Revisar y completar.** El inventario creado queda registrado en el campo **Inventario Físico** de la ventana **Importar Inventario**. Abrirlo, validar los datos y ejecutar la acción **Completar**.

::: tip
El proceso de importación genera un Inventario Físico **por cada almacén** incluido en el archivo. Antes de completar cada documento, valide en la ventana **Inventario Físico** que los datos sean correctos.
:::

### Importación en ZK

Seguir el procedimiento anterior desde la interfaz ZK.

- Video: [Importación de inventario físico en ZK desde Excel](https://www.loom.com/share/dbd61416e5394712912341a7c30c8d46)

### Importación en VUE

Seguir el procedimiento anterior desde la interfaz VUE.

- Video: [Importación de inventario en VUE desde Excel](https://www.loom.com/share/283cf3330fc64a668bdf3508c5b92636)

## Consideraciones importantes

- La **Cantidad en libros** siempre refleja el estado del inventario al día actual, no a una fecha anterior. Por esta razón, si se necesita realizar un ajuste correspondiente a una fecha pasada (por ejemplo, del mes anterior), no es posible hacerlo directamente con este proceso. En ese caso, es necesario contactar al equipo de soporte de Solop ERP para que realice los ajustes correspondientes.
- Los ajustes de inventario afectan directamente las existencias del almacén seleccionado. Es fundamental verificar que el almacén y los productos sean los correctos antes de completar el documento.
- Se recomienda tener a la mano el conteo físico documentado y validado antes de ingresar los datos al sistema.
- Una vez completado el documento, los cambios no pueden revertirse directamente. Cualquier corrección posterior requiere generar un nuevo ajuste.

## Ejemplo de uso

Durante una revisión del almacén central, se detecta que un producto tiene 14 unidades registradas en el sistema pero físicamente solo hay 10 unidades:

1. Abrir la ventana **Inventario Físico** y crear un nuevo registro
2. Seleccionar el **almacén central** y confirmar que la fecha del movimiento corresponde al día del conteo
3. Seleccionar el tipo de documento **Inventario Físico** y guardar el encabezado
4. En la pestaña **Línea de Conteo de Inventario**, agregar una línea para el producto en cuestión
5. El sistema muestra automáticamente **Cantidad en libros: 14**
6. Ingresar **Cantidad contada: 10**
7. Guardar la línea y regresar al encabezado
8. Seleccionar la acción **Completar**
9. El sistema genera el movimiento de ajuste, reduciendo la existencia de 14 a 10 unidades
10. Verificar el resultado ejecutando el **Informe de Inventario Valorado** para la fecha del ajuste

## Verificación con reportes

Después de realizar el ajuste, se puede verificar el estado actualizado del inventario con los siguientes reportes:

- **Informe de Inventario Valorado** — Permite consultar el inventario a una fecha específica, ideal para validar que el ajuste se aplicó correctamente en la fecha del movimiento
- **Detalle de Almacenamiento Simple** — Muestra las cantidades actuales en existencia, reservadas y disponibles por producto y ubicación