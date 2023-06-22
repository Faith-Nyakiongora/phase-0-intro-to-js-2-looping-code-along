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

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}