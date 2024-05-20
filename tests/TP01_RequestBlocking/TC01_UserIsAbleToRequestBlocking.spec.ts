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
/* Necesito datos de un cliente real para este escenario.
/* Comentado el paso para darle click al botón Enviar y revisar la respuesta
*/
test('SC 01 - Customer is able to request phone blocking', async ({page}) => {
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