---
project_name: 2021_PPS_VOTAR
project_type: "academic-voting-system"
complexity: "medium"
technologies: "typescript, angular-8, html, css, javascript"
description: "Sistema VOT.AR — sistema de votación electrónica para circuitos electorales con gestión de roles (Votante, Auxiliar, Presidente, Fiscal, Funcionario), validación de padrón y carrusel de candidatos."
status: "academic-graduated"
role_match: "Frontend Angular Developer, SPA Developer"
---

# 📌 2021_PPS_VOTAR

## 🎯 Descripción

**VOT.AR** - Sistema de votación electrónica para circuitos electorales.

**Descripción corta:** Sistema de votación electrónica para circuitos electorales con gestión de roles (Votante, Auxiliar, Presidente, Fiscal, Funcionario), validación de padrón y carrusel de candidatos.

## 🛠️ Tecnologías

- **Frontend**: Angular 8 (SPA pura)
  - `@angular/core`: ~8.2.4
  - `@angular/common`: ~8.2.4
  - `@angular/router`: ~8.2.4
  - `@angular/material`: ^8.2.3
  - `@ng-bootstrap/ng-bootstrap`: ^5.1.4
  - `angular-file-saver`: ^1.1.3
- **Tests**: Protractor (E2E tests en carpeta `e2e/`)
- **Build**: Angular CLI
- **Deploy**: GitHub Pages (`Inpollola.github.io/2021_PPS_VOTAR`)

## 📁 Estructura Principal

```
2021_PPS_VOTAR/
├── CLAUDE.md              ← Este archivo (memoria del proyecto)
├── .claude/               ← Configuración y tools de Claude
│   ├── settings.json      ← Permisos y modelo
│   ├── skills/            ← Skills instaladas
│   ├── commands/          ← Slash commands custom
│   ├── hooks/             ← PostToolUse.sh, SessionStart.sh
│   ├── agents/            ← Subagentes especializados
│   └── rules/             ← Reglas por path
├── src/                   ← Fuentes Angular
├── e2e/                   ← Tests E2E con Protractor
├── docs/                  ← Build de producción estático
├── Screenshots/           ← Capturas de pantalla
├── karma.conf.js          ← Config de tests
├── angular.json           ← Config Angular
├── package.json           ← Dependencias
├── .editorconfig          ← Configuración editor
└── README.md              ← Documentación original
```

## 🔍 Stack Detectado

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Angular | 8.2.x | Framework principal |
| TypeScript | - | Lenguaje principal |
| Material Design | 8.2.3 | UI Components |
| ng-bootstrap | 5.1.4 | Components Bootstrap |
| Protractor | - | E2E Testing |

## 📊 Estado del Proyecto

- **Complejidad**: Media
- **Madurez**: Académica / Finalizada
- **Commits**: 271
- **Infraestructura**: Deploy estático (GitHub Pages)
- **Base de datos**: Sin BD externa (estado en memoria en Angular)

## 🚀 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar tests locales
ng test

# Ejecutar tests E2E
ng e2e

# Build para producción
ng build

# Deploy a GitHub Pages
ng deploy

# Servidor de desarrollo
ng serve
```

## 💡 Puntos Clave para el Desarrollador

1. **Proyecto académico de tamaño mediano** (271 commits)
2. **SPA pura** - toda la lógica de negocio en Angular (sin backend)
3. **Sin base de datos externa** - estado gestionado en memoria
4. **Tests E2E** - usa Protractor, hay una carpeta `e2e/` completa
5. **Deploy estático** - listo para GitHub Pages
6. **Roles en el sistema**:
   - Votante
   - Auxiliar
   - Presidente
   - Fiscal
   - Funcionario

## ⚠️ Consideraciones

- Angular 8 es antiguo (2019) - no usar librerías que requieran versiones recientes
- No hay backend - toda la lógica del lado del cliente
- Considera el estado de las dependencias (`angular.json`, `package-lock.json`)

---
*Memoria de proyecto generada por Claude*