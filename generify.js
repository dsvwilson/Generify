/*
-------------------------------------------------------------------------------------------------------------------------------------------------
Adding arrays of messages for the final output.
*/

const db1 = [
    'You will have three kids this year!',
    'You will come across a new job this year!',
    'A lost partner will re-contact you this year!',
    'There will be no issues in the relationships of your children this year!',
    'Expect a large sum of money in your account this year!'
]

const db2 = [
    'I\'m afraid for the calendar. Its days are numbered.',
    'My wife said I should do lunges to stay in shape. That would be a big step forward.',
    'Why do fathers take an extra pair of socks when they go golfing?" "In case they get a hole in one!',
    'Singing in the shower is fun until you get soap in your mouth. Then it\'s a soap opera.',
    'What do a tick and the Eiffel Tower have in common?" "They\'re both Paris sites.'
]

const db3 = [
    'Anyone can be a millionaire, but to become a billionaire you need an astrologer.',
    'A physician without a knowledge of Astrology has no right to call himself a physician.',
    'Astrology reveals the will of the gods.',
    'Astrology is just a finger pointing at reality.',
    'We need not feel ashamed of flirting with the zodiac.  The zodiac is well worth flirting with.'
]

/*
-------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Function to generate a random number to be used to call individual array elements
const getARandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to call indvidual array elements randomly and enter them into a new array
function selectMessages(one, two, three) {
    const savedMessage = [];
    const random = getARandomNumber(0,6);

    savedMessage.push(one[random]);
    savedMessage.push(two[random]);
    savedMessage.push(three[random]);

    const result = savedMessage.toString(); // Calling .toString() method to convert the final array into a string     
    return `We have secret messages for you! One of those messages is a prayer, the second one is a dad's joke, and the third one is an astrology quote. Enjoy: ${result}!`;

};

// Printing the final result to the Console
console.log(selectMessages(db1, db2, db3));