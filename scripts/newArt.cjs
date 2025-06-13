const fs = require("fs");
const path = require("path");

const slug = process.argv[2];

if (!slug) {
  console.error("Proporcina un nombre para el Post ");
  process.exit(1);
}

const title = slug
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const date = new Date().toISOString().split("T")[0];

// Ruta del nuevo folder
const folderPath = path.join(__dirname, "../src/content/blog", slug);

// Ruta del archivo Markdown dentro del folder
const filePath = path.join(folderPath, "index.md");

const content = `---
title: "${title}"
description: "Descripción del post"
image: "./cards.png"
imageAlt: "Descripción alternativa de la imagen"
date: ${date}
draft: true
tags: ["", ""]
categories: [""]
author: ""
---

# ${title}

`;

if (fs.existsSync(folderPath)) {
  console.error("❌ Ya existe una carpeta con ese nombre. Elige otro nombre.");
  process.exit(1);
}

// Crear carpeta
fs.mkdirSync(folderPath, { recursive: true });

// Crear archivo Markdown
fs.writeFileSync(filePath, content);

console.log(`✅ Carpeta y archivo creados en: ${folderPath}`);
