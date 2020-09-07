function destroyer(arr) {
	return arr.filter(item => ![...arguments].includes(item))
}

module.exports = destroyer;
