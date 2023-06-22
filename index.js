// Code your solutions in this file
const names=['Guadalupe','Ollie','Aki'];
const event = "surprise";

function writeCards(names, occasion) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }
  return thankYouMessages;

}

const number = 11
function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}