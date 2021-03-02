module.exports = function toReadable (number) {
    let one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    let secondPart;
    let answer = [];
    if (number == 0) {
        answer.push('zero');
    } else if (number < 21) {
        answer.push(one[number])
    } else if (number < 100) {
        if (number.toString()[0] == 2) {
            answer.push(one[20])
        } else if (number.toString()[0] == 3) {
            answer.push(one[21])
        } else if (number.toString()[0] == 4) {
            answer.push(one[22])
        } else if (number.toString()[0] == 5) {
            answer.push(one[23])
        } else if (number.toString()[0] == 6) {
            answer.push(one[24])
        } else if (number.toString()[0] == 7) {
            answer.push(one[25])
        } else if (number.toString()[0] == 8) {
            answer.push(one[26])
        } else if (number.toString()[0] == 9) {
            answer.push(one[27])
        }
        if (+number.toString()[1] != 0) {
            answer.push(one[+number.toString()[1]])
        }
    } else {
        answer.push(one[number.toString()[0]], one[28]);
        secondPart = +(number.toString()[1] + number.toString()[2]);
        if (secondPart < 21) {
            answer.push(one[secondPart]);
            if (secondPart == 0) {
                answer.pop();
            }
        } else {
            if (secondPart.toString()[0] == 2) {
                answer.push(one[20])
            } else if (secondPart.toString()[0] == 3) {
                answer.push(one[21])
            } else if (secondPart.toString()[0] == 4) {
                answer.push(one[22])
            } else if (secondPart.toString()[0] == 5) {
                answer.push(one[23])
            } else if (secondPart.toString()[0] == 6) {
                answer.push(one[24])
            } else if (secondPart.toString()[0] == 7) {
                answer.push(one[25])
            } else if (secondPart.toString()[0] == 8) {
                answer.push(one[26])
            } else if (secondPart.toString()[0] == 9) {
                answer.push(one[27])
            }
            if (+secondPart.toString()[1] != 0) {
                answer.push(one[+secondPart.toString()[1]])
            }
        }
    }
    answer = answer.join(' ');
    return answer;
}
