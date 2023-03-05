
#  Front-Back Aplicacion de medidas de vinos

Esta pequeña aplicacion permite a los usuarios registrarse y loguearse para emitir medidas de vinos que se muestran en una tabla general de todas las mesuras de todos los usuarios.
## Ejecucion
Clonar el repositorio

```bash
  git clone https://github.com/ycansam/measurements-front-back
```
Dirigirse al directorio del proyecto
```bash
  cd measurements-front-back
```
### Modo de desarrollo
Ejecutar los comandos que hay en la carpeta tables-sql en su controlador de mysql.
Cambiar los datos de acceso a la base de datos, user y password en caso de ser distintos.

```bash
cd server/src/database.ts
```
```javascript
const DevelopmentDbProps = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'wine_measurements',
}

const TestingDbProps = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'wine_measurements_testing',
}
```

#### Desarrollo Frontend
Para ejecutar la aplicación en modo de desarrollo, abra una terminal y ejecute los siguientes comandos:
```bash
npm install
npm start
```
Para ejecutar la aplicación en modo de testing:
```bash
npm install
npm test
```

#### Desarrollo Backend
Para ejecutar la aplicación en modo de desarrollo, abra una terminal y ejecute los siguientes comandos:
```bash
npm install
npm run dev
```
Para ejecutar la aplicación en modo de testing:
```bash
npm install
npm run test
```

