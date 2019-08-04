// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// input -> string
// output -> string
var detectNetwork = function(cardNumber) {
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  if(
    ((Number(cardNumber.slice(0, 6)) >= 622126 && (Number(cardNumber.slice(0, 6))) <= 622925)
			&& (cardNumber.length >= 16 && cardNumber.length <= 19))
		||
		((Number(cardNumber.slice(0, 3)) >= 624 && (Number(cardNumber.slice(0, 3))) <= 626)
			&& (cardNumber.length >= 16 && cardNumber.length <= 19))
		||
		((Number(cardNumber.slice(0, 4)) >= 6282 && (Number(cardNumber.slice(0, 4))) <= 6288)
			&& (cardNumber.length >= 16 && cardNumber.length <= 19))

		) {return "China UnionPay";}

  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  if( (cardNumber.slice(0, 4) === '4903' || cardNumber.slice(0, 4) === '4905' || cardNumber.slice(0, 4) === '4911' || cardNumber.slice(0, 4) === '4936' || cardNumber.slice(0, 6) === '564182' || cardNumber.slice(0, 6) === '633110' || cardNumber.slice(0, 4) === '6333' || cardNumber.slice(0, 4) === '6759') && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)){
    return `Switch`;
  }
  // Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if((cardNumber.slice(0, 2) === '38' || cardNumber.slice(0, 2) === '39') && cardNumber.length === 14 ){
    return `Diner's Club`;
  }

  // American Express network always starts with a 34 or 37 and is 15 digits long
  if((cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37') && cardNumber.length === 15 ){
    return `American Express`;
  }

  // Visa network always has a prefix of 4 and a length of 13, 16, or 19.
  if(cardNumber.slice(0, 1) === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
    return `Visa`;
  }
  // MasterCard network always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  if((cardNumber.slice(0, 2) === '51' || cardNumber.slice(0, 2) === '52' || cardNumber.slice(0, 2) === '53' || cardNumber.slice(0, 2) === '54' || cardNumber.slice(0, 2) === '55') && cardNumber.length === 16){
    return `MasterCard`;
  }

  // Discover network always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if((cardNumber.slice(0, 4) === '6011' || cardNumber.slice(0, 3) === '644' || cardNumber.slice(0, 3) === '645' || cardNumber.slice(0, 3) === '646' || cardNumber.slice(0, 3) === '647' || cardNumber.slice(0, 3) === '648' || cardNumber.slice(0, 3) === '649' || cardNumber.slice(0, 2) === '65') && ( cardNumber.length === 16 || cardNumber.length === 19)){
    return `Discover`;
  }
  // Maestro network always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if((cardNumber.slice(0, 4) === '5018' || cardNumber.slice(0, 4) === '5020' || cardNumber.slice(0, 4) === '5038' || cardNumber.slice(0, 4) === '6304') && (cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19)){
    return `Maestro`;
  }

};



detectNetwork('501800000000');
detectNetwork('50180000000000');
detectNetwork('501800000000000');
detectNetwork('5018000000000000');
detectNetwork('50180000000000000');
detectNetwork('501800000000000000');
detectNetwork('5018000000000000000');

detectNetwork('502000000000');
detectNetwork('50200000000000');
detectNetwork('502000000000000');
detectNetwork('5020000000000000');
detectNetwork('50200000000000000');
detectNetwork('502000000000000000');
detectNetwork('5020000000000000000');

detectNetwork('503800000000');
detectNetwork('50380000000000');
detectNetwork('503800000000000');
detectNetwork('5038000000000000');
detectNetwork('50380000000000000');
detectNetwork('503800000000000000');
detectNetwork('5038000000000000000');

detectNetwork('630400000000');
detectNetwork('63040000000000');
detectNetwork('630400000000000');
detectNetwork('6304000000000000');
detectNetwork('63040000000000000');
detectNetwork('630400000000000000');
detectNetwork('6304000000000000000');


