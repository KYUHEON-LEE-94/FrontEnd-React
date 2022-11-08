export default (sheet, action) => {

    switch (action.type) {
        case "add": {
            const { prev, code, role } = action
            return {
                ...sheet,
                commands: [{ prev, code, role }, ...sheet.commands]
            }
        }

        case "delete": {
            const { code } = action
            return {
                ...sheet,
                commands: sheet.commands.filter(sw => sw.code !== code)

            }

        }

        case "update": {
            const { prev, code, role } = action
            return {
                ...sheet,
                commands: sheet.commands.map(word => {
                    if (word.code === prev) {
                        return { ...word, code, role }
                    } else {
                        return word;
                    }
                })
            }

        }
        default: throw Error(`Error, 알수 없는${ction.type}`);

    }



}