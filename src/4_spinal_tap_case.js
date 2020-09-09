// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
	const matchSpaceAndUnderScoreReqex = /[\s_]/g
	const matchLowerCaseWordFollewdByUpperCaseWord = /([a-z])([A-Z])/g
	const dash = "-"
	return str.replace(matchSpaceAndUnderScoreReqex, dash)
			  .replace(matchLowerCaseWordFollewdByUpperCaseWord, "$1-$2")
			  .toLowerCase();
}

module.exports = spinalCase;

