# API RESTfull

## Create Product

method: POST

endpoint: /api/products

body:

```json
{
  "title": "Producto 1",
  "price": 100
}
```

response:

```json
{
  "id": 1,
  "title": "Producto 1",
  "price": 100
}
```

status: 201

## Error Create Product

method: POST

endpoint: /api/products

body:

```json
{
  "title": "Producto 1"
}
```

response:

```json
{
  "error": "El campo price es requerido"
}
```

status: 422

## Testing

### Install dependencies

```shell
npm install -D jest supertest
```

### Run tests

```shell
npm test
```

### package.json

```json
{
  "scripts": {
    ...
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  },
  "devDependencies": {
    "jest": "^26.6.3",
    "supertest": "^6.1.3"
  }
}
```
## Deploy en Vercel

La API fue desplegada en Vercel.

URL base:

https://entrega-final26134.vercel.app

### Rutas principales

- GET `/`
- GET `/up`
- GET `/api/products`
- GET `/api/products/:id`
- POST `/api/products`
- PUT `/api/products/:id`
- DELETE `/api/products/:id`
- POST `/api/auth/login`

Para desplegar una API Express en Vercel se creó la carpeta `api` con el archivo `api/index.js`, que exporta la aplicación Express:

```js
import app from "../app.js";

export default app;
