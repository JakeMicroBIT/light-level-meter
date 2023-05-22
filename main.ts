let reading = input.lightLevel()
led.plotBarGraph(
reading,
255
)
if (input.buttonIsPressed(Button.A)) {
    basic.showNumber(reading)
}
basic.forever(function () {
	
})
