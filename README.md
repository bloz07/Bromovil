# Bromovil
Pruebas de automatización del formulario para reportar robo o extravío de teléfono desde la página web de Bromovil

# Instrucciones de instalación

1. Clonar repositorio a un directorio local:
```bash
git clone https://github.com/bloz07/Bromovil.git
```
2. Instalar dependencias del proyecto:
```bash
npm install
```
3. Cambiar la variable: **repoPath** por la ruta del repositorio en los archivos:
```bash
.../tests/TP001_RequestBlocking/TC01_UserIsAbleToRequestBlocking.spec.ts
```
```bash
.../tests/TP01_RequestBlocking/TC02_UserIsUnableToRequestBlocking.spec.ts
```
4. Ejecutar las pruebas:
```bash
npm run test 
```
5. Visualizar reporte en el navegador:
```bash
npm run report
```