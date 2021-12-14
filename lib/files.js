import fs from 'fs'
import templates from '../templates/index.js'
import { snakeCaseToCamel } from './utils.js'

const directoryExists = (filePath) => {
  return fs.existsSync(filePath)
}

const mkdir = (dirName) => {
  return fs.mkdirSync(dirName, { recursive: true })
}

const prepareDirectory = (dirPath) => {
  if (!directoryExists(dirPath)) {
    mkdir(dirPath)
  }
}

const read = (file, cb) => {
  fs.readFile(file, 'utf8', function (err, data) {
    if (!err) {
      cb(data.toString())
    } else {
      console.log('webpack.config.js not found')
    }
  })
}

const write = (file, content) => {
  fs.writeFile(file, content, err => {
    if (err) {
      console.error(err)
    }
  })
}

export const pageDirExist = (pageName) => {
  return directoryExists(`app/pages/${pageName}`)
}

export const componentDirExist = (pageName) => {
  return directoryExists(`app/components/${pageName}`)
}

export const generateClient = (clientName) => {
  const clientFolder = 'app/client/'
  prepareDirectory(clientFolder)

  fs.writeFileSync(`${clientFolder}${clientName}.tsx`, templates.client({ name: clientName }))
}

export const generatePage = (pageName, { skipClient, skipTests, skipImport }) => {
  const pageFolder = `app/pages/${pageName}/`
  const { upper: upperName, lower: lowerName } = snakeCaseToCamel(pageName)
  prepareDirectory(pageFolder)

  fs.writeFileSync(`${pageFolder}controller.tsx`, templates.controller({ name: upperName }))
  fs.writeFileSync(`${pageFolder}index.ts`, templates.pageIndex)
  fs.writeFileSync(`${pageFolder}${pageName}.scss`, '')
  fs.writeFileSync(`${pageFolder}view.tsx`, templates.view({ name: lowerName }))
  if (!skipTests) {
    fs.writeFileSync(`${pageFolder}view.spec.tsx`, templates.pageSpec({ name: upperName }))
  }
  if (!skipClient) {
    generateClient(pageName)
  }
  if (!skipImport && !skipClient) {
    updateWebpackConfig(lowerName, pageName)
  }
}

export const generateComponent = (componentName, { skipTests }) => {
  const componentFolder = `app/components/${componentName}/`
  const { upper: upperName } = snakeCaseToCamel(componentName)
  prepareDirectory(componentFolder)

  fs.writeFileSync(`${componentFolder}${upperName}.tsx`, templates.component({ name: upperName }))
  if (!skipTests) {
    fs.writeFileSync(`${componentFolder}${upperName}.spec.tsx`, templates.componentSpec({ name: upperName }))
  }
}

export const generate = ({ schematic, name, options }) => {
  if (schematic === 'page') {
    generatePage(name, options)
  }
  if (schematic === 'component') {
    generateComponent(name, options)
  }
}

const updateWebpackConfig = (name, clientName) => {
  read('./webpack.config.js', (data) => {
    const content = data.replace('const entrypoints = {', `const entrypoints = {\n  ${name}: './app/client/${clientName}.tsx',`)
    write('./webpack.config.js', content)
  })
}
