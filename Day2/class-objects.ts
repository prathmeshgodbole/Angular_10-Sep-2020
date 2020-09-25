class Chip {
    manu: string
    current: number
    comm: string
}

class ESPChip extends Chip { // is a relation

    // 1.inheritance
    // 2.encapsulation
    // 3.abstraction
    // 4.polymorphisam

    private registers: number[] = [] // state

    public wifiComm(typ: boolean = true) { // default parameters
        // behaviour
        this.registers[0] = 1
        this.registers[1] = 2
    }

    bleComm(typ?: boolean) { // optional parameters
        // behaviour
        this.registers[4] = 1
        this.registers[5] = 2
    }

    switchOffOn() {

    }
}

class Arduno extends Chip {

}

var chip = new ESPChip() // encapsulation -> object -> ORV
chip.manu = 'asfs'

chip.bleComm()
chip.bleComm(true)

chip.wifiComm()
chip.wifiComm(true)

var ard = new Arduno()