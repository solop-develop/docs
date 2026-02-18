---
title: Manejo de Errores al Publicar en Mercado Libre
category: Documentation
star: 9
sticky: 9
article: false
---

# Manejo de Errores al Publicar en Mercado Libre

## Descripción

El proceso de **Manejo de Errores** permite identificar, diagnosticar y resolver los problemas que pueden surgir durante la publicación de productos en Mercado Libre. Proporciona información detallada sobre las causas de los errores y las acciones correctivas.

## ¿Cuándo se utiliza?

Se utiliza cuando una publicación falla o presenta errores durante el proceso de sincronización con Mercado Libre.

Casos típicos:
- Publicación rechazada por Mercado Libre
- Producto con estado "No publicada"
- Mensajes de error durante el proceso de publicación

## Acceso

Integración Mercado Libre → Publicaciones → Consulta de Publicaciones

## Campos principales

### Información de Error

- **Estado de Publicación**
  Indica si la publicación fue exitosa o falló.

- **Mensaje de Error**
  Descripción del problema que impidió la publicación.

- **Fecha del Error**
  Momento en que ocurrió el problema.

## Flujo del proceso

### 1. Verificar el Estado de Publicación

Revisar si el producto ha sido publicado. Si no está publicado, el estado mostrará 'No publicada' con un mensaje de error.

![Estado de publicación](/assets/img/docs/mercado-libre/bc858f6db1df4f1fb2623a899ddca2d5.png)

### 2. Colocar el Producto en Publicar

Si el producto no está publicado, colocarlo en estado de 'Publicar' y revisar los mensajes que explican el motivo del fallo.

![Estado publicar](/assets/img/docs/mercado-libre/b63fe7f402c34e5cb3f7ce803a909ef0.png)

### 3. Identificar el Error

Revisar los mensajes de error que indican la razón de la no publicación.

![Mensajes de error](/assets/img/docs/mercado-libre/b63fe7f402c34e5cb3f7ce803a909ef0.png)

### Errores Comunes

| Error | Causa | Solución |
|-------|-------|----------|
| El producto no tiene cantidad disponible | Stock en 0 | Agregar stock al producto |
| No tiene la condición seleccionada | Falta definir nuevo/usado | Seleccionar condición del producto |
| Falta categoría | Categoría no asignada | Asignar categoría de Mercado Libre |
| Imágenes inválidas | Formato no soportado | Usar PNG, JPG o WEBP |
| Precio no definido | Producto sin precio | Establecer precio del producto |

### 4. Revisar Condiciones del Producto

Verificar que el producto tenga cantidad disponible, condición correcta seleccionada y todos los atributos obligatorios completados.

![Revisión de condiciones](/assets/img/docs/mercado-libre/b63fe7f402c34e5cb3f7ce803a909ef0.png)

## Consideraciones importantes

- Revisar todos los mensajes de error antes de proceder con correcciones
- No intentar publicar productos que no cumplan con los requisitos
- Mantener un registro de los errores comunes para resolverlos más rápidamente
- Revisar la disponibilidad de productos regularmente para evitar errores

## Ejemplo de uso

Para resolver un error de publicación:
1. Identificar el producto con estado "No publicada"
2. Leer el mensaje de error (ej. "Stock en 0")
3. Corregir el problema (agregar stock)
4. Cambiar estado a "Publicar"
5. Ejecutar proceso de publicación nuevamente
6. Verificar que la publicación sea exitosa

## Video Tutorial

<iframe src="https://www.loom.com/embed/dc8abb9a58f64457853dec3f02dce0c1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="width: 100%; height: 400px;"></iframe>

[Ver video en Loom](https://loom.com/share/dc8abb9a58f64457853dec3f02dce0c1)
