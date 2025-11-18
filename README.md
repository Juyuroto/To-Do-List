# To-Do-List
### Archi code
```markdown
TO-DO-LIST/
├─ backend/
│  ├─ node_modules/
│  ├─ src/
│  │  ├─ config/
│  │  ├─ middleware/
│  │  ├─ routes/
│  │  ├─ app.js
│  │  └─ index.js
│  ├─ package.json
│  ├─ package-lock.json
│  └─ Dockerfile
├─ frontend/
│  ├─ node_modules/
│  ├─ public/
│  │  └─ logo.svg
│  ├─ src/
│  │  ├─ Context/
│  │  │  └─ AuthContext.jsx
│  │  ├─ log/
│  │  │  ├─ App.js
│  │  │  ├─ HomePage.jsx
│  │  │  ├─ Login.css
│  │  │  ├─ Login.jsx
│  │  │  └─ signup.jsx
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  ├─ ToDoList.jsx
│  │  └─ index.css
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

### Installation
#### Dans le folder backend
```bash
npm install
npm init -y
npm install express@5.1.0 body-parser@2.2.0 cors@2.8.5 dotenv@17.2.3 mysql@2.18.1
```
#### Dans le folder frontend

```bash
npm init -y
npm install react@^19.2.0 react-dom@^19.2.0 react-router-dom@^7.9.5
npm install --save-dev vite@^7.2.2 @vitejs/plugin-react@^5.1.0
npm run dev
```

#### Création du .env
```bash
touch .env
```

#### Dans le .env
```env
NODE_ENV= ????
PORT= ????

# MySQL
DB_HOST= ????
DB_USER= ????
DB_PASSWORD= ????
DB_NAME= ????

# Frontend
FRONT_PORT= ????

# phpMyAdmin
PMA_PORT= ????
```
