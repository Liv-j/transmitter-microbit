// adds "." if the A button is pressed
input.onButtonPressed(Button.A, function () {
    inputstring = "" + inputstring + "."
})
// inputstring = ""
function Transmitter (transstring: string) {
    if (statemachine == 0) {
        radio.sendString(inputstring)
        statemachine = 1
    } else {
        // resent to reciever 
        if (inputstring == transstring) {
            basic.showIcon(IconNames.Yes)
            basic.pause(2000)
            basic.clearScreen()
            inputstring = ""
            statemachine = 0
        } else {
            radio.sendString(inputstring)
            statemachine = 0
        }
    }
}
// Transmit the morse code
input.onButtonPressed(Button.AB, function () {
    Transmitter(inputstring)
})
radio.onReceivedString(function (receivedString) {
    if (statemachine == 1) {
        Transmitter(receivedString)
    }
})
// adds "-" if the B button is pressed
input.onButtonPressed(Button.B, function () {
    inputstring = "" + inputstring + "-"
})
// clear message if the microbit is shaked
input.onGesture(Gesture.Shake, function () {
    inputstring = ""
})
let inputstring = ""
let statemachine = 0
statemachine = 0
radio.setGroup(1)
