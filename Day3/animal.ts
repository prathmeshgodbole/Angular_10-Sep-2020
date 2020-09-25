export class Animal implements GPSListener {

    private leg: number = 4 // state

    eat() { } // behaviour

    run() {
        this.leg = this.leg + 1
    }

    walk() { }

    onLocation() {

    }
}

export interface GPSListener {
    onLocation(): void
}