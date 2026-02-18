---
title: Configuración de N8N para Publicaciones en Mercado Libre
category: Documentation
star: 9
sticky: 9
article: false
---

# Configuración de N8N para Publicaciones en Mercado Libre

## Descripción

El proceso de **Configuración de N8N** permite establecer la conexión entre Solop ERP y Mercado Libre a través de flujos de trabajo automatizados. Esta configuración es fundamental para habilitar la publicación y actualización de productos en el marketplace.

## ¿Cuándo se utiliza?

Se utiliza cuando se requiere configurar por primera vez la integración con Mercado Libre o cuando se necesita actualizar la URL del webhook.

Casos típicos:
- Configuración inicial de la integración con Mercado Libre
- Actualización de URLs de conexión
- Verificación del funcionamiento del flujo de trabajo

## Acceso

Integración Mercado Libre → Configuración → N8N

## Flujo del proceso

### 1. Acceder a N8N

Iniciar sesión en N8N y localizar el flujo de trabajo relacionado con Mercado Libre.

![Acceso a N8N](/assets/img/docs/mercado-libre/e208feddbdf64e568f38f8400c8eaf9f.png)

### 2. Copiar la URL de prueba

Hacer clic derecho en el flujo de trabajo y seleccionar 'Copiar URL de pruebas'.

![Copiar URL de prueba](/assets/img/docs/mercado-libre/40705692e66548829ac6001ba296abec.png)

### 3. Pegar y guardar la URL

Abrir la ventana de configuración del web hub, pegar la URL copiada en el campo correspondiente y guardar los cambios.

![Configuración del webhook](/assets/img/docs/mercado-libre/36a1ed066e824c9b83dc0e93bab36f5b.png)

### 4. Ejecutar el flujo de trabajo

Asegurarse de que la publicación está lista para ser enviada y ejecutar el flujo de trabajo para verificar su funcionamiento.

![Ejecución del flujo](/assets/img/docs/mercado-libre/093e673309994691b695b0fadca5d8cf.png)

### 5. Manejar publicaciones y actualizaciones

Si se necesita crear una nueva publicación, seguir el flujo de creación. Para actualizaciones, asegurarse de que los cambios de estado se manejen correctamente.

![Manejo de publicaciones](/assets/img/docs/mercado-libre/4545533d8a2249dc99dccc2f4d12867b.png)

### 6. Cambiar estado de publicación

Si es necesario pausar o cerrar una publicación, utilizar el flujo correspondiente para inactivar la publicación.

![Cambio de estado](/assets/img/docs/mercado-libre/a8e45213a9db410abaededa4886bbd9b.png)

## Consideraciones importantes

- Verificar que la URL copiada sea correcta antes de pegarla en la configuración
- Confirmar que el flujo de trabajo esté funcionando correctamente antes de realizar cambios en producción
- Mantener un registro de las URLs de prueba para facilitar futuras configuraciones
- Realizar pruebas periódicas del flujo de trabajo para asegurar su correcto funcionamiento

## Video Tutorial

<iframe src="https://www.loom.com/embed/c3a30f19e469484390fdea6c9d040dec" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="width: 100%; height: 400px;"></iframe>

[Ver video en Loom](https://loom.com/share/c3a30f19e469484390fdea6c9d040dec)
