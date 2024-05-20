import  {test} from '@playwright/test'
import path from 'path'
const repoPath = "/Users/maniak/Documents/Bromovil-repo/"
const files = path.join(repoPath,"resources")

test.beforeEach(async({page}) => {
  await page.goto('https://bromovil.com/')  
  await page.getByRole('dialog').getByRole('img').nth(1).click()
  await page.getByRole('link', { name: 'Reporte de robo o extravío' }).click() 
})

/* 
/* Comentado el paso para darle click al botón Enviar y revisar la respuesta
*/
test('SC 01 - User is unable to request phone blocking without being a customer', async ({page}) => {
  await page.getByPlaceholder('Ej: Luis Andres Corona').fill("Bárbara Lozada")
  await page.getByPlaceholder('Ej: ejemplo@ejemplo.com').fill("barbara.lozada94@gmail.com")
  await page.getByPlaceholder('Ej: 3318482390').fill("3313116979")
  await page.getByPlaceholder('a 17 digítos').fill("865295052967817")
  await page.locator('input[name="identification"]').setInputFiles(path.join(files,'id.jpeg'))
  await page.locator('input[name="billing"]').setInputFiles(path.join(files,'invoice.png'))
  await page.getByRole('combobox').selectOption('Bloquear')
  //await page.getByRole('button', { name: 'Enviar' }).click()
  //await page.getByRole('heading', { name: 'Listo' }).isVisible()
});

//Formulario vacío
test('SC 02 - User is unable to request phone blocking with empty form', async ({page}) => {
  await page.getByRole('button', { name: 'Enviar' }).click()
  await page.getByText('!').isVisible()
  await page.getByRole('heading', { name: 'Nombre requerido' }).isVisible()
});

//Se llenan todos los campos, excepto el nombre
test('SC 03 - User is unable to request phone blocking with empty name', async ({page}) => {
  await page.getByPlaceholder('Ej: ejemplo@ejemplo.com').fill("barbara.lozada94@gmail.com")
  await page.getByPlaceholder('Ej: 3318482390').fill("3313116979")
  await page.getByPlaceholder('a 17 digítos').fill("865295052967817")
  await page.locator('input[name="identification"]').setInputFiles(path.join(files,'id.jpeg'))
  await page.locator('input[name="billing"]').setInputFiles(path.join(files,'invoice.png'))
  await page.getByRole('combobox').selectOption('Bloquear')
  await page.getByRole('button', { name: 'Enviar' }).click()
  await page.getByText('!').isVisible()
  await page.getByRole('heading', { name: 'Nombre requerido' }).isVisible()
});

//Se llenan todos los campos, excepto el correo electrónico
test('SC 04 - User is unable to request phone blocking with empty email', async ({page}) => {
  await page.getByPlaceholder('Ej: Luis Andres Corona').fill("Bárbara Lozada")
  await page.getByPlaceholder('Ej: 3318482390').fill("3313116979")
  await page.getByPlaceholder('a 17 digítos').fill("865295052967817")
  await page.locator('input[name="identification"]').setInputFiles(path.join(files,'id.jpeg'))
  await page.locator('input[name="billing"]').setInputFiles(path.join(files,'invoice.png'))
  await page.getByRole('combobox').selectOption('Bloquear')
  await page.getByRole('button', { name: 'Enviar' }).click()
  await page.getByText('!').isVisible()
  await page.getByRole('heading', { name: 'Correo electrónico requerido' }).isVisible()
});

//Se llenan todos los campos, excepto el número celular
test('SC 05 - User is unable to request phone blocking with empty phone number', async ({page}) => {
  await page.getByPlaceholder('Ej: Luis Andres Corona').fill("Bárbara Lozada")
  await page.getByPlaceholder('Ej: ejemplo@ejemplo.com').fill("barbara.lozada94@gmail.com")
  await page.getByPlaceholder('a 17 digítos').fill("865295052967817")
  await page.locator('input[name="identification"]').setInputFiles(path.join(files,'id.jpeg'))
  await page.locator('input[name="billing"]').setInputFiles(path.join(files,'invoice.png'))
  await page.getByRole('combobox').selectOption('Bloquear')
  await page.getByRole('button', { name: 'Enviar' }).click()
  await page.getByText('!').isVisible()
  await page.getByRole('heading', { name: 'Número de teléfono requerido' }).isVisible()
});

//Se llenan todos los campos, excepto el IMEI
test('SC 06 - User is unable to request phone blocking with empty IMEI', async ({page}) => {
  await page.getByPlaceholder('Ej: Luis Andres Corona').fill("Bárbara Lozada")
  await page.getByPlaceholder('Ej: ejemplo@ejemplo.com').fill("barbara.lozada94@gmail.com")
  await page.getByPlaceholder('Ej: 3318482390').fill("3313116979")
  await page.locator('input[name="identification"]').setInputFiles(path.join(files,'id.jpeg'))
  await page.locator('input[name="billing"]').setInputFiles(path.join(files,'invoice.png'))
  await page.getByRole('combobox').selectOption('Bloquear')
  await page.getByRole('button', { name: 'Enviar' }).click()
  await page.getByText('!').isVisible()
  await page.getByRole('heading', { name: 'IMEI requerido' }).isVisible()
});

//Se llenan todos los campos, excepto la identificación
test('SC 07 - User is unable to request phone blocking with no ID', async ({page}) => {
  await page.getByPlaceholder('Ej: Luis Andres Corona').fill("Bárbara Lozada")
  await page.getByPlaceholder('Ej: ejemplo@ejemplo.com').fill("barbara.lozada94@gmail.com")
  await page.getByPlaceholder('Ej: 3318482390').fill("3313116979")
  await page.getByPlaceholder('a 17 digítos').fill("865295052967817")
  await page.locator('input[name="billing"]').setInputFiles(path.join(files,'invoice.png'))
  await page.getByRole('combobox').selectOption('Bloquear')
  await page.getByRole('button', { name: 'Enviar' }).click()
  await page.getByText('!').isVisible()
  await page.getByRole('heading', { name: 'IMEI requerido' }).isVisible()
});

//Se llenan todos los campos, excepto el ticket
test('SC 08 - User is unable to request phone blocking with no ticket', async ({page}) => {
  await page.getByPlaceholder('Ej: Luis Andres Corona').fill("Bárbara Lozada")
  await page.getByPlaceholder('Ej: ejemplo@ejemplo.com').fill("barbara.lozada94@gmail.com")
  await page.getByPlaceholder('Ej: 3318482390').fill("3313116979")
  await page.getByPlaceholder('a 17 digítos').fill("865295052967817")
  await page.locator('input[name="identification"]').setInputFiles(path.join(files,'id.jpeg'))
  await page.getByRole('combobox').selectOption('Bloquear')
  await page.getByRole('button', { name: 'Enviar' }).click()
  await page.getByText('!').isVisible()
  await page.getByRole('heading', { name: 'IMEI requerido' }).isVisible()
});

//IMEI con caracteres especiales
test('SC 12 - User is unable to request phone blocking with invalid IMEI', async ({page}) => {
  await page.getByPlaceholder('Ej: Luis Andres Corona').fill("Bárbara Lozada")
  await page.getByPlaceholder('Ej: ejemplo@ejemplo.com').fill("barbara.lozada94@gmail.com")
  await page.getByPlaceholder('Ej: 3318482390').fill("3313116979")
  await page.getByPlaceholder('a 17 digítos').fill("********")
  await page.locator('input[name="identification"]').setInputFiles(path.join(files,'id.jpeg'))
  await page.locator('input[name="billing"]').setInputFiles(path.join(files,'invoice.png'))
  await page.getByRole('combobox').selectOption('Bloquear')
  await page.getByRole('button', { name: 'Enviar' }).click()
  await page.getByText('!').isVisible()
  await page.getByRole('heading', { name: 'IMEI inválido' }).isVisible()
});

//Espacio en todos los campos
test('SC 15 - User is unable to request phone blocking with space in the fields form', async ({page}) => {
  await page.getByPlaceholder('Ej: Luis Andres Corona').fill(" ")
  await page.getByPlaceholder('Ej: ejemplo@ejemplo.com').fill(" ")
  await page.getByPlaceholder('Ej: 3318482390').fill(" ")
  await page.getByPlaceholder('a 17 digítos').fill(" ")
  await page.locator('input[name="identification"]').setInputFiles(path.join(files,'id.jpeg'))
  await page.locator('input[name="billing"]').setInputFiles(path.join(files,'invoice.png'))
  await page.getByRole('combobox').selectOption('Bloquear')
  await page.getByRole('button', { name: 'Enviar' }).click()
  await page.getByText('!').isVisible()
  await page.getByRole('heading', { name: 'Correo electrónico inválido' }).isVisible()
});