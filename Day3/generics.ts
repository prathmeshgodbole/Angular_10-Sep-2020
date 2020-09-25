import { Animal } from "./animal";

const mobiles: Array<string> = new Array<string>()
mobiles.push('tiger')
mobiles.push('monkey')
mobiles.push('goons')
mobiles.push('cat')

mobiles.forEach(function (el: string) {
    console.log(el)
})

mobiles.forEach(el => console.log(el))
