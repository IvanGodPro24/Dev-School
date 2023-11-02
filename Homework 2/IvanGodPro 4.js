function unpackSausages(truck) {

    let output = ""
    let count = 0

    for (let box of truck) {
        for (let package of box) {
            let last = package.charAt(package.length-1)
            let first = package.charAt(0)
            if (package.length == 6 && last == "]" && first == "[" ) {
                let contents = package.substr(1, package.length-2)
                let individual = contents.split("")
                let is_good = individual.every(a => a === contents[0])

                if (!is_good)
                    continue

                if (count != 4) {
                    output += individual.join(" ")
                    output += " "
                }
                count = (count + 1) % 5
            }
        }
    }
    return output.substr(0, output.length-1)
}
