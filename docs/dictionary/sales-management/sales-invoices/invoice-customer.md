---
title: Documentos por Cobrar
category: Documentation
star: 9
sticky: 9
article: false
---

# Documentos por Cobrar

## Descripción

La ventana **Documentos por Cobrar** es donde se registran y consultan todos los documentos de venta que generan o modifican una **cuenta por cobrar** con un cliente: facturas, notas de crédito y notas de débito. Cada documento tiene un ciclo de vida (Borrador → Completo) y, al completarse, impacta en el saldo del cliente, en la contabilidad y, si la organización emite comprobantes fiscales electrónicos, en el envío del CFE al proveedor de facturación electrónica.

Los documentos pueden cargarse manualmente o generarse a partir de otros documentos: una **orden de venta**, una **entrega** o los procesos de generación masiva de facturas. Desde la misma ventana se puede seguir todo lo que pasa con el documento después de emitido: los cobros y notas de crédito que lo cancelan (pestaña **Facturas Pagadas**), las facturas que cancela una nota de crédito (pestaña **Facturas a Asignar**) y el resultado del envío del comprobante electrónico (pestaña **Bitácora de Documento Electrónico**).

El **Tipo de Documento** define el comportamiento de cada registro: si es una factura o una nota de crédito, la secuencia de numeración que usa, el tipo de comprobante fiscal que se emite y si genera o no movimientos de inventario asociados.

## ¿Cuándo se utiliza?

Se utiliza cuando la organización necesita:

- Emitir una factura de venta a un cliente, ya sea manual o a partir de una orden de venta o una entrega.
- Emitir una **nota de crédito** para anular total o parcialmente una factura, o para acreditar un concepto (descuento, bonificación, devolución) y, si corresponde, asignarla automáticamente a la factura que corrige.
- Emitir una **nota de débito** para cobrar un concepto adicional a una factura ya emitida.
- Consultar el estado de un documento: si está completo, contabilizado, pagado o en disputa.
- Revisar qué cobros o notas de crédito cancelaron una factura y por qué monto.
- Verificar si el comprobante fiscal electrónico fue aceptado y consultar los mensajes de respuesta del proveedor de facturación electrónica.

## Acceso

Menú: Gestión de Ventas → Facturas de Venta → Documentos por Cobrar

También se puede llegar a un documento específico desde la orden de venta, la entrega o el cobro relacionado, usando el **Acercador** (Zoom Across).

## Pestañas

### Factura

Factura del Cliente. La pestaña Factura define los parámetros de una factura generada para un tercero. Constituye una cuenta por recibir (CXR).

#### Campos principales

| Campo | Descripción | Tipo | Obligatorio |
|---|---|---|---|
| Tipo de Documento Destino | Tipo de documento destino para la factura | Texto | No |
| No. del Documento | Número de secuencia del documento | Texto | No |
| Socio del Negocio | Identifica al socio del negocio (cliente) | Texto | No |
| Fecha de Facturación | Fecha impresa en la factura | Texto | No |
| Orden | Orden de venta asociada | Texto | No |
| Dirección del Socio | Dirección del socio del negocio | Texto | No |
| Fecha Contable | Fecha contable del documento | Texto | No |
| Descripción | Descripción corta opcional del registro | Texto | No |
| Moneda | Moneda para el procesamiento del documento | Texto | No |
| Presupuesto de Proyecto | Presupuesto del proyecto asociado | Texto | No |
| Lista de Precios | Lista de precios utilizada | Texto | No |
| Agente Comercial | Representante de ventas asignado | Texto | No |
| Regla de Pago | Forma en que se realizará el pago | Texto | No |
| Término de Pago | Condiciones de pago acordadas | Texto | No |
| Documento Enviado | Indica si el documento fue enviado al proveedor fiscal | Texto | No |
| Imprimir Recibo de Factura | Imprime el recibo de la factura | Texto | No |
| Comentario Fiscal | Comentario fiscal asociado al documento | Texto | No |
| Crear Desde Orden/Recibo | Crear líneas desde una orden o recibo existente | Texto | No |
| Tipo de Conversión | Tipo de conversión de moneda | Texto | No |
| Tipo de ADM | Tipo de autorización de devolución | Texto | No |
| Tipo de Documento | Tipo de documento | Texto | No |
| Referencia de Orden | Referencia externa de la orden | Texto | No |
| Total de Líneas | Suma total de las líneas | Monto | No |
| Gran Total | Monto total del documento incluyendo impuestos | Monto | No |
| En Disputa | Indica si el documento está en disputa | Texto | No |
| Campaña | Campaña de marketing asociada | Texto | No |
| Proyecto | Proyecto financiero asociado | Texto | No |
| Actividad | Actividad de negocio asociada | Texto | No |
| Organización de la Transacción | Organización que ejecuta la transacción | Texto | No |
| Lista de Usuario 1 | Elemento definido por el usuario #1 | Texto | No |
| Lista de Usuario 2 | Elemento definido por el usuario #2 | Texto | No |
| Lista de Usuario 3 | Elemento definido por el usuario #3 | Texto | No |
| Lista de Usuario 4 | Elemento definido por el usuario #4 | Texto | No |
| Estado del Documento | Estado actual del documento | Texto | No |
| Procesar Factura | Ejecuta el procesamiento del documento | Texto | No |
| Pagado | Indica si la factura ha sido pagada | Texto | No |
| Contabilizado | Estado de contabilización del documento | Texto | No |

### Línea de la Factura

Línea de Factura del Cliente. La pestaña Línea de Factura define el ítem individual o cargos adicionales de una factura.

#### Campos principales

| Campo | Descripción | Tipo | Obligatorio |
|---|---|---|---|
| No. de Línea | Número de línea del documento | Texto | No |
| Producto | Producto, servicio o artículo | Texto | No |
| Cargo | Cargos adicionales | Texto | No |
| Línea de Contrato | Línea de contrato de servicio asociada | Texto | No |
| Descripción | Descripción del ítem | Texto | No |
| Cantidad | Cantidad ingresada | Texto | No |
| Precio | Precio ingresado por unidad | Texto | No |
| Impuesto | Monto del impuesto | Texto | No |
| UM | Unidad de medida | Texto | No |
| Impuesto Aplicado | Tipo de impuesto aplicado a la línea | Texto | No |
| Total de Línea | Total de la línea incluyendo impuestos | Texto | No |
| Precio Unitario | Precio actual del producto | Texto | No |
| Precio de Lista | Precio de lista del producto | Texto | No |
| Descuento % | Porcentaje de descuento aplicado | Texto | No |
| Actividad | Actividad de negocio asociada | Texto | No |
| Neto de Línea | Monto neto de la línea | Texto | No |
| Línea de Orden de Salida | Línea de orden de salida asociada | Texto | No |
| Línea del Proyecto | Línea del proyecto asociada | Texto | No |

### Impuesto de la Factura

Impuesto de Factura del Cliente. La pestaña Impuesto de Factura despliega el impuesto total por pagar basado en las líneas de la factura.

#### Campos principales

| Campo | Descripción | Tipo | Obligatorio |
|---|---|---|---|
| Impuesto | Tipo de impuesto aplicado | Texto | No |
| Monto del Impuesto | Monto total del impuesto | Texto | No |
| Monto Base del Impuesto | Monto base sobre el cual se calcula el impuesto | Texto | No |
| Precio Incluye Impuesto | Indica si el precio incluye impuesto | Texto | No |

### Bitácora de Documento Electrónico

Bitácora de documento electrónico y envío.

#### Campos principales

| Campo | Descripción | Tipo | Obligatorio |
|---|---|---|---|
| Identificador | Identificador del documento electrónico | Texto | No |
| Serie | Serie del documento electrónico | Texto | No |
| Número de Serie | Número de serie del documento | Texto | No |
| Número Inicial | Número inicial del rango | Texto | No |
| Número Final | Número final del rango | Texto | No |
| Código de Seguridad | Código de seguridad del documento | Texto | No |
| Hash | Hash de verificación del documento | Texto | No |
| No. de Referencia | Número de referencia del procesamiento | Texto | No |
| Código de Mensaje | Código de mensaje de respuesta | Texto | No |
| Descripción del Mensaje | Descripción del mensaje de respuesta | Texto | No |
| URL de Descarga | URL para descarga del documento | Texto | No |
| Código QR | Código QR del documento | Texto | No |
| Fecha de Vencimiento | Fecha de vencimiento del documento | Texto | No |
| Resolución | Resolución asociada al documento | Texto | No |
| Nota | Nota adicional | Texto | No |
| Información Adicional | Información complementaria del documento | Texto | No |
| Código de Estado | Código de estado del procesamiento | Texto | No |

### Bitácora de Envío a Shopping

Bitácora de envío a Shopping. Muestra la bitácora de los intentos de envío al servicio de shopping para declaración.

#### Campos principales

| Campo | Descripción | Tipo | Obligatorio |
|---|---|---|---|
| Conexión Shopping | Conexión al servicio de shopping | Texto | No |
| Error | Indica si hubo un error en el envío | Texto | No |
| No. de Referencia | Número de referencia del envío | Texto | No |
| Mensaje de Error | Descripción del error ocurrido | Texto | No |

### Facturas Pagadas

Asignación de la Factura a los Pagos o al Efectivo.

#### Campos principales

| Campo | Descripción | Tipo | Obligatorio |
|---|---|---|---|
| Asignación | Encabezado de la asignación | Texto | No |
| Fecha de la Transacción | Fecha de la transacción | Texto | No |
| Pago | Pago asociado | Texto | No |
| Línea de Caja | Línea del diario de caja | Texto | No |
| Monto | Monto asignado | Texto | No |
| Monto de Descuento | Monto del descuento aplicado | Texto | No |
| Monto de Ajuste | Monto del ajuste por diferencia | Texto | No |
| Sobre/Sub Pago | Monto de sobre o sub pago | Texto | No |

### Facturas a Asignar

Facturas que una nota de crédito referencia y contra las que se asignará **automáticamente** al completarse. Se carga sola al usar **Crear Desde** o **Copiar Líneas**, y debe cargarse a mano en las notas de crédito creadas desde cero. La información se organiza en:

- **Documento de Referencia** (obligatorio)
  Factura con la que se quiere cruzar la nota de crédito.

- **Monto a Asignar** (obligatorio)
  Importe de la factura que se cancela con la nota de crédito. No puede ser mayor al total de la nota de crédito.

- **Factura**
  Nota de crédito a la que pertenece el registro. Se completa automáticamente.

- **Solo Referencia**
  Si está marcado, la factura solo se informa como referencia en el comprobante fiscal electrónico (CFE), sin generar asignación.

::: warning
Si el **Monto a Asignar** supera el total de la nota de crédito, el documento no se completa. Ver [¿Cómo hago una nota de crédito a un cliente por un concepto que no figura en la factura?](../../../frequently-asked-questions/billing#¿como-hago-una-nota-de-credito-a-un-cliente-por-un-concepto-que-no-figura-en-la-factura)

En notas de crédito parciales creadas con **Crear Desde**, la cantidad parcial debe indicarse dentro del formulario y no después en la línea, ya que el **Monto a Asignar** no se recalcula. Ver [¿Por qué me da error una nota de crédito parcial hecha con Crear Desde?](../../../frequently-asked-questions/billing#¿por-que-me-da-error-una-nota-de-credito-parcial-hecha-con-crear-desde)
:::

## Nota de crédito con asignación automática

Una nota de crédito puede cruzarse con la factura que corrige en el mismo momento en que se completa, sin tener que hacer luego una asignación manual. Para eso, la factura debe estar cargada en la pestaña **Facturas a Asignar** con su monto.

::: tip
El campo **Factura Asignada** del encabezado solo deja **asociada** la factura a la nota de crédito. Lo que dispara la asignación al completar es el registro de la pestaña **Facturas a Asignar** (documento de referencia y monto).
:::

### 1. Crear la nota de crédito a partir de la factura

Ubicar la factura que se quiere corregir y usar **Copiar Registro**. Verificar en el nuevo registro:

- **Socio del Negocio**: el mismo cliente de la factura.
- **Tipo de Documento**: un tipo de **Nota de Crédito**.
- **Factura Asignada**: la factura que se está corrigiendo.

Guardar el registro. El sistema asigna el **No. del Documento**.

### 2. Cargar la línea

En la pestaña **Línea de la Factura**, ingresar el producto o cargo que se acredita (por ejemplo, el mismo producto de la factura original), con su cantidad y precio. Guardar.

### 3. Indicar la factura a asignar

En la pestaña **Facturas a Asignar**, crear (o revisar, si ya se cargó sola) un registro con:

- **Documento de Referencia**: la factura con la que se cruza la nota de crédito.
- **Monto a Asignar**: el importe que se cancela de esa factura.

Guardar el registro.

### 4. Completar la nota de crédito

Volver a la pestaña **Factura** y ejecutar **Completar**. Al pasar a estado *Completo*, el sistema genera automáticamente la asignación entre la nota de crédito y la factura por el **Monto a Asignar** indicado.

### 5. Verificar la asignación

Desde la nota de crédito, usar el **Acercador** (Zoom Across) y abrir **Consulta de Asignación**. Allí aparece la asignación *Factura – Nota de Crédito* creada automáticamente. El saldo pendiente de la factura se reduce en el monto asignado.

### Ejemplo de uso

Un cliente recibió una factura y corresponde acreditarle 40.500:

1. Abrir la factura y ejecutar **Copiar Registro**.
2. Cambiar el **Tipo de Documento** a nota de crédito e indicar la factura en **Factura Asignada**. Guardar.
3. En **Línea de la Factura**, cargar el mismo producto de la factura por un total de 40.500. Guardar.
4. En **Facturas a Asignar**, indicar la factura como **Documento de Referencia** y 40.500 como **Monto a Asignar**. Guardar.
5. Completar la nota de crédito.
6. En **Acercador → Consulta de Asignación**, confirmar que la nota de crédito quedó asignada contra la factura por 40.500.

## Preguntas frecuentes

### Completé la nota de crédito pero no quedó asignada a la factura. ¿Por qué?

Lo más habitual es que la factura se haya indicado solo en el campo **Factura Asignada** del encabezado y no en la pestaña **Facturas a Asignar**. El campo del encabezado asocia la factura, pero no genera la asignación. Como la nota de crédito ya está completa, la forma de cruzarla es hacer la asignación manual desde [Asignación de Pagos](../../balance-management/allocation/payment-allocation).

También conviene revisar que el registro de **Facturas a Asignar** no tenga marcado **Solo Referencia**, ya que en ese caso la factura solo se informa en el CFE y no se asigna.

### ¿Puedo asignar una sola nota de crédito a más de una factura?

Sí. En la pestaña **Facturas a Asignar** se puede cargar un registro por cada factura, cada uno con su **Monto a Asignar**. La suma de los montos no puede superar el total de la nota de crédito.

### ¿Tengo que cargar la pestaña Facturas a Asignar si creé la nota de crédito con Crear Desde?

No. **Crear Desde** y **Copiar Líneas** cargan la pestaña automáticamente. Igualmente conviene revisarla antes de completar para confirmar la factura y el monto.

## Consideraciones importantes

- La asignación automática se genera **al completar** la nota de crédito. Los cambios hechos en **Facturas a Asignar** después de completar no generan una nueva asignación.
- El **Monto a Asignar** puede ser parcial: la factura queda con saldo pendiente por la diferencia.
- La nota de crédito y la factura deben ser del mismo **Socio del Negocio**.
- Para deshacer una asignación hecha por error, usar [Consulta de Asignación](../../balance-management/allocation/view-allocation).

## Ventanas relacionadas

- [Asignación de Pagos](../../balance-management/allocation/payment-allocation)
- [Consulta de Asignación](../../balance-management/allocation/view-allocation)
- [Nota de Crédito Genérica sin Referenciar Facturas](../../electronic-billing/credit-note-without-invoice-reference)
