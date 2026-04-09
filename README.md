# To-Do-List

Simple et efficace — crée, organise et suis tes tâches en un glisser-déposer.

## Aperçu

### Page vide
![Page vide](screenshot/1.png)

### Todo créée
![Todo créée](screenshot/2.png)

### Drag & drop
![Drag & drop](screenshot/3.png)

## Archi code
```markdown
To-Do-List/
├─ backend/
│  ├─ config/
│  │  └─ config.go
│  ├─ database/
│  │  └─ init.sql
│  ├─ handlers/
│  │  └─ todo.handler.go
│  ├─ models/
│  │  └─ todo.model.go
│  ├─ router/
│  │  └─ router.go
│  ├─ Dockerfile
│  ├─ go.mod
│  ├─ go.sum
│  └─ main.go
├─ frontend/
│  ├─ public/
│  │  └─ logo.svg
│  ├─ src/
│  │  ├─ assets/
│  │  │  ├─ css/
│  │  │  │  ├─ App.css
│  │  │  │  └─ index.css
│  │  │  └─ icons/
│  │  │     └─ *.svg
│  │  ├─ components/
│  │  │  └─ *.jsx
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ package.json
│  ├─ dockerfile
│  ├─ vite.config.js
│  ├─ index.html
│  └─ eslint.config.js
├─ .env
├─ .gitignore
├─ docker-compose.yml
└─ README.md
```

## Stack technique

- **Backend** — Go + Gin
- **Frontend** — React + Vite + @hello-pangea/dnd
- **Base de données** — PostgreSQL
- **Orchestration** — Docker + Docker Compose

## Lancement

```bash
docker compose up --build
```

Frontend : `http://localhost:5030`
Backend : `http://localhost:5031`

## Test API

Base URL: `http://localhost:5031`

:id = l'id de la task (ex: 1)

### GET `URL`/todos
Récupère toutes les todos.

### GET `URL`/todos/:id
Récupère une todo par son id.

### POST `URL`/todos
Crée une nouvelle todo.
```json
{
    "title": "Ma todo",
    "description": "Ma description",
    "status": "todo"
}
```

### PUT `URL`/todos/:id
Modifie une todo existante.
```json
{
    "title": "Titre modifié",
    "description": "Description modifiée",
    "status": "in_progress"
}
```

### DELETE `URL`/todos/:id
Supprime une todo par son id.