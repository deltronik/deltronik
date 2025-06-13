---
title: "Hardware"
description: "El hardware es el conjunto de componentes físicos y tangibles que forman parte de un sistema informático."
image: "./cards.png"
imageAlt: "Descripción alternativa de la imagen"
date: 2025-06-12
draft: false
tags: ["introducción", "hardware"]
categories: ["pre-requisitos"]
author: "danh"
---
# Hardware

## Equipo físico y componentes tangibles de un sistema informático

Si bien no es un tema que debamos ver en profundidad,no de momento al menos no por el objetivo que perseguimos, nunca esta de mas saber que como trabajan los componentes fisicos de nuestro computador.

Para todas aquellas personas que no tienen nociones con lo que es internamente una computadora y dejando de lado el chiste de caja magica, un computador necesita esencialmente un CPU para hacer el trabajo, una memoria o MEMORY para almacenar instrucciones y datos, tambien facilitar las entradas/salidas de información se esten procesando mediante las INTERFASES y un conjunto de canales o BUSES que permita la transmición de información entre las diversas partes ya mencionadas.

### Unidad Central de Procesos (CPU)

A veces llamado solo "procesador" controla el resto de los componentes, determina cuando una intrucción se debe ejecutar, hace lectura o escritura de la memoria y hace llamadas o envia datos a los elementos de entrada/salida. Este necesita tambien de componentes internos para operar como se es debido, superficialmente hablando podemos nombrar:

- La unidad de aitmétca lógica o **ALU** → se encarga de realizar todas las operaciones aritméticas como tambien las comparaciones lógicas

- El reloj, clock, para sincronizar el proceso de información

- Direccioneamiento, **ADDRESSING**, para controlar el direccionamiento de memoria

- Control de Entrada/Salida o **I/O CONTROL**, controlan los procesos de entrada y salida

### MEMORIA

Podemos catalogar dos tipos de memorias basados en la permanencia de información, es decir, primeramente una memoria de almacenamiento interno que requiere un suministro constante de energia y segundo una memoria con permanencia de la infomación aun despues de perder el suministro de energia denominadas permanentes

- **RAMDOM ACCESS MEMORY** → Simplemente llamadas como Memorias de RAM, siempre y cuando mantengan un suministro de energia constante son capaces de resguardar la información, esto es asi ya que que es una memoria de acceso rapido que solo guarda la información, por asi decirlo, de la sesión actual. Es una memoria del tipo escritura y lectura en la cual él puede manejar toda la información de los programas y datos que estos generen

- **READ ONLY MEMORY** → Tecnicamente llamada Memoria de ROM pero coloquialmente es tu disco duro, es fija, predefinida y de tipo permanente. 

### BUSES

Uno puede pensar que es una forma muy pretenciosa de llamas a los cables que transmiten información pero nada seria util sin ellos. Podemos interpretar tres sistemas de buses diferentes:

- **DATABUS** → Para transmitir datos internamente

- **ADDRESS BUS** → Para transmición de las diferentes direcciones de memoria

- **CONTROL BUSS** → Para transmición de comandos internos de control

### INTERFASES

Las interfases entre usuario y maquina corresponden a los dispositivos que ingresan información para ser procesadas o a los dispositivos que exponen la información ya procesada mediante algun medio al usuario, por ejemplo:

#### Elementos de entradas

- Teclados → No creo que deba explicarte que es un teclado, pero puedo nombrarte algunas de las teclas principales como Enter, Teclas cursoras, Teclas funcionales (programables), Teclas de control y Alt, Tecla Esc, Tecla de retroceso, Tecla Shiff, Teclas Caps lock, Numeríco, etc...

- Lectoras de caracteres ópticos →  escaneres especiales que reconocen caracteres (OCR).

- Dispositivos de voz →  microfono para los amigos, convierte las señales acusticas en claves digitales.

- Tarjeta digitalizadora →  Un escaner para digitalizar documentos, dibujos, planos, etc...

- Mouse →  Controla la 'flechita' que vez en pantalla, envia un conjunto de coordenadas al cpu para represantar el cursos en pantalla.

#### Elementos de Salidas

- Monitor → Presenta la información de forma visual y en tiempo real

- Impresoras → Pueden ser impresoras de matriz de punto, de lineas, margaritas, láser, de inyección, plotter, etc.

###### Fuentes

-  [https://es.wikipedia.org/teclados](https://es.wikipedia.org/wiki/Teclado_(inform%C3%A1tica))

- Enciclopedia de la Micro Computación Teoria y Practica
