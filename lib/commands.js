import { showLog, askOverwrite, askSchematicName } from './swing.js'
import { formatName } from './utils.js'
import * as files from './files.js'

export const generate = async (schematic, inputName, options) => {
  const { name } = inputName ? { name: inputName } : await askSchematicName()
  const formattedName = formatName(name)
  if (files[`${schematic}DirExist`](formattedName)) {
    showLog(`${formattedName} already exist on ${schematic} folder.`, 'error')
    const { overwrite } = await askOverwrite()
    if (overwrite) {
      files.generate({ schematic, name: formattedName, options })
      showLog(`${schematic} generated`, 'success')
    } else {
      showLog(`${schematic} not generated`, 'error')
    }
  } else {
    files.generate({ schematic, name: formattedName, options })
    showLog(`${schematic} generated`, 'success')
  }
}

export default {
  generate
}
