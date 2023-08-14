const calculator = document.querySelector('#tip-calculator')
const amount = document.querySelector('#amount')
const tip = document.querySelector('#tip')
const numberOfPeople = document.querySelector('#people')
const perPerson = document.querySelector('#per-person')

calculateTip = () => {
	let totalAmount = Number(amount.value)
	let tipPercentage = Number(tip.value) / 100
	let totalPeople = Number(numberOfPeople.value)
	let tipAmount = totalAmount * tipPercentage
	let totalToPay = totalAmount + tipAmount
	let totalToPayPerPerson = totalToPay / totalPeople
	console.log(totalToPay)
	console.log(totalToPayPerPerson)

	perPerson.textContent = `Each person owes CA$${totalToPayPerPerson.toFixed(2)}`
}
calculator.addEventListener('submit', event => {
	event.preventDefault()
	if (amount.value.length < 1 || tip.value.length < 1 || numberOfPeople.value.length < 1) {
		return
	}
	calculateTip()
})
