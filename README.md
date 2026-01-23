# 🐾 AdoptMe Backend API

API REST desarrollada en **Node.js + Express + MongoDB**, orientada a la gestión de usuarios, mascotas y adopciones.  
El proyecto se encuentra **dockerizado**, cuenta con **tests funcionales**, y documentación interactiva mediante **Swagger (OpenAPI)**.

---

## 📌 Características principales

- API REST modular  
- Persistencia con MongoDB (Mongoose)  
- Arquitectura por capas (routes, controllers, services, models, DTOs)  
- Tests funcionales con Mocha, Chai y Supertest  
- Documentación Swagger  
- Dockerfile optimizado  
- Imagen Docker publicada en DockerHub  

---

## 🐳 Imagen Docker

La imagen del proyecto se encuentra disponible públicamente en DockerHub:

🔗 **DockerHub Repository**  
https://hub.docker.com/r/gastonmagrassi/backendgastonmagrassi

Tags disponibles:
- `latest`
- `1.0.0`

---

## 🚀 Ejecutar el proyecto con Docker

### 1️⃣ Requisitos
- Docker instalado
- Archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=4000
URLMONGO=mongodb+srv://<usuario>:<password>@<cluster>
DBNAME=adoptme
JWT_SECRET=secret
```

---

### 2️⃣ Ejecutar el contenedor

```bash
docker run --rm -p 4000:4000 --env-file .env gastonmagrassi/backendgastonmagrassi:latest
```

---

### 3️⃣ Accesos disponibles

- API base  
  http://localhost:4000

- Documentación Swagger  
  http://localhost:4000/api/docs

---

## 📚 Documentación Swagger

La API se encuentra documentada mediante **Swagger (OpenAPI)**.

Incluye:
- Endpoints
- Parámetros
- Request bodies
- Respuestas de éxito y error
- Ejemplos

📍 Acceso:  
`/api/docs`

---

## 🧪 Tests funcionales

Se desarrollaron **tests funcionales completos** para todos los endpoints del router:

### `adoption.router.js`

Los tests cubren:
- Obtención de adopciones
- Búsqueda por ID
- Usuario inexistente
- Mascota inexistente
- Adopción exitosa
- Mascota ya adoptada

### Ejecutar tests localmente

```bash
npm test
```

---

## 📡 Endpoints de la API

### 👤 Users

| Método | Ruta | Descripción |
|------|------|-------------|
| GET | `/api/users` | Obtener todos los usuarios |
| GET | `/api/users/:uid` | Obtener usuario por ID |
| PUT | `/api/users/:uid` | Actualizar usuario |
| DELETE | `/api/users/:uid` | Eliminar usuario |

---

### 🐶 Pets

| Método | Ruta | Descripción |
|------|------|-------------|
| GET | `/api/pets` | Obtener todas las mascotas |
| POST | `/api/pets` | Crear mascota |
| POST | `/api/pets/withimage` | Crear mascota con imagen |
| PUT | `/api/pets/:pid` | Actualizar mascota |
| DELETE | `/api/pets/:pid` | Eliminar mascota |

---

### ❤️ Adoptions

| Método | Ruta | Descripción |
|------|------|-------------|
| GET | `/api/adoptions` | Obtener todas las adopciones |
| GET | `/api/adoptions/:aid` | Obtener adopción por ID |
| POST | `/api/adoptions/:uid/:pid` | Adoptar mascota |

---

### 🔐 Sessions

| Método | Ruta | Descripción |
|------|------|-------------|
| POST | `/api/sessions/register` | Registro de usuario |
| POST | `/api/sessions/login` | Login de usuario |
| GET | `/api/sessions/current` | Usuario autenticado actual |

---

### 🧪 Mocks

| Método | Ruta | Descripción |
|------|------|-------------|
| GET | `/api/mocks/users` | Generar usuarios mock |
| GET | `/api/mocks/pets` | Generar mascotas mock |
| POST | `/api/mocks/generateData` | Insertar mocks en DB |

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- Swagger (OpenAPI)
- Mocha
- Chai
- Supertest
- Faker.js

---

## 👤 Autor

**Gastón Magrassi**  
Proyecto Final – Backend  
Coderhouse
