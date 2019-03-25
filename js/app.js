{
  // 1. declare = value
  // 2. var = value
  // 3. new = old
  // 4. decalre makes the variable, assign is to give a value to a variable, define is function based
  // 5. writing out the code you plan to do in english, helps plan
  // 6. 80 to 20
}

{
  let firstVariable = "Hello World";
  firstVariable = 1;
  let secondVariable = firstVariable;
  secondVariable = "Hi";
  //firstVariable is 1
  let yourName = "Ethan";
  yourname = "Hello, my name is " + yourName;
}

{
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = "Kevin";

  console.log(a < b);
  console.log(c > d);
  console.log("Name" == "Name");
  console.log(true != false);
  console.log(false || false || false || true);
  console.log(false == false);
  console.log(e == "Kevin");
  console.log((a != b) != c);
  console.log((a == a) != d);
  console.log(48 == "48");
}

{
  let animal = "cow";
  if (animal == "cow") {
    console.log("moooo");
  } else {
    console.log("Hey! You're not a cow!");
  }
}

{
  let age = 16;
  if (age >= 16) {
    console.log("Here are the keys");
  } else {
    console.log("Sorry, you are too young");
  }
}

//Section II

{
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  for (let i = 10; i <= 400; i++) {
    console.log(i);
  }
  for (let i = 12; i <= 4000; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}

{
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i + "<--- is an even number");
    }
  }
}

{
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      console.log(`I found a ${i}. High five!`);
    }
    if (i % 3 == 0) {
      console.log(`I found a ${i}. Three is a crowd`);
    }
  }
}

{
  let bank_account = 0;
  for (let i = 1; i <= 10; i++) {
    bank_account += i;
  }
  console.log(`Bank_account has \$${bank_account}`);
  bank_account = 0;
  for (let i = 1; i <= 100; i++) {
    bank_account += i * 2;
  }
  console.log(`Bank_account has \$${bank_account}`);
}

{
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}

{
  //1. elements
  //2. they keep the order they're placed in until manipulated
  //3. fingers on a hand
}

{
  let quotes = ["a", "b", "c"];
}

{
  //const randomThings = [1, 10, "Hello", true];
  //1. randomThings[0]
  //2. randomThings[2]="World"
  //3. console.log(randomThings[2])
}

{
  //1. ourClass[2]
  //2. ourClass[4]="Octocat"
  //3. ourClass.push("Cloud City")
}

{
  //1. .push("Egon");
  //2. .shift()
  //3. .unshift("Bob Marley")
  //4. .pop
  //5. Yes. Change contents. No.
}

{
  const i = 2;
  if (i < 100) {
    console.log("little number");
  } else {
    console.log("big number");
  }
}

{
  const i = 7;
  if (i < 5) {
    console.log("little number");
  } else if (i > 10) {
    console.log("big number");
  } else {
    console.log("monkey");
  }
}

{
  //done in a lab, we had to move her shoe in the first step
}

{
  //done in lab
}

{
  const printcool = name => {
    console.log(`${name} is cool`);
  };
}

{
  const calculateCube = num => {
    return num ** 3;
  };
  console.log(calculateCube(5));
}

{
  const isVowel = char => {
    if (char == "a" || char == e || char == "i" || char == "o" || char == "u") {
      return true;
    }
    return false;
  };
  console.log(isVowel("a"));
}

{
  const getTwoLengths = (str1, str2) => {
    return [str1.length, str2.length];
  };
  console.log(getTwoLengths("Hank", "Hippopopalous"));
}

{
  const getMultipleLengths = array => {
    let lens = [];
    for (let i = 0; i < array.length; i++) {
      lens.push(array[i].length);
    }
    return lens;
  };
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
}

{
  const maxOfThree = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  };
  console.log(maxOfThree(6, 9, 1));
}

{
  const printLongestWord = array => {
    let str = array[0];
    for (let i = 1; i < array.length; i++) {
      if (str.length < array[i].length) {
        str = array[i];
      }
    }
    return str;
  };
  console.log(
    printLongestWord([
      "BoJack",
      "Princess",
      "Diane",
      "a",
      "Max",
      "Peanutbutter",
      "big",
      "Todd"
    ])
  );
}

{
  const transmogrify = (num1, num2, num3) => {
    return (num1 * num2) ** num3;
  };
  console.log(transmogrify(5, 3, 2));
}

{
  const reverseWordOrder = str => {
    let str2 = "";
    let toReturn = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] != " ") {
        str2 += str[i];
      } else {
        toReturn = str2 + " " + toReturn;
        str2 = "";
      }
    }
    return str2 + " " + toReturn;
  };
  console.log(reverseWordOrder("Ishmael me Call"));
  console.log(reverseWordOrder("I use Lâncome on my comb"));
}

{
  const randomInt = (numFrom, numTo) => {
    return Math.floor(Math.random() * (numTo - numFrom) + numFrom);
  };
  const randomNum = (numFrom, numTo) => {
    return Math.random() * (numTo - numFrom) + numFrom;
  };
  const getRandomElement = array => {
    return array[randomInt(0, array.length)];
  };
  let quotes = ["a", "b", "c", "d", "e", "f"];

  console.log(randomInt(1, 10));
  console.log(randomInt(10, 100));
  console.log(randomNum(532, 13267));
  console.log(randomNum(1, 10));
  console.log(getRandomElement(quotes));
  //Technically the maximum is weighted significantly less than all others in the randomInt function.
  //Unsure how to address it, as either the min or max would be weighted (since it's 1.00-1.99=1 when floored, but maximum is the max, not max+.01 or anything
  //I say that, then after testing it I do get a maximum value. hmm
}

{
  const user = {
    name: "Tom",
    email: "a@a.a",
    age: 11,
    purchased: [],
    friend: {
      name: "Paul",
      age: 12,
      location: "LA",
      purchased: []
    }
  };

  user.email = "b@b.b";
  user.age++;
  user["location"] = "LA";
  user["purchased"].push("carbohydrates");
  user["purchased"].push("peace of mind");
  user["purchased"].push("merino jodhpurs");
  console.log(user["purchased"][2]);
  console.log(user.friend.name);
  console.log(user["friend"]["location"]);
  user.friend.age = 55;
  user["friend"]["purchased"].push("The One Ring");
  user["friend"]["purchased"].push("A latte");
  console.log(user.friend.purchased[1]);
  for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
  }
  for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
  }
  const updateUser = ()=>{
      user.age++;
      user.name.toUpperCase();
  }
  const oldAndLoud = (person)=>{
    person.age++;
    person.name.toUpperCase();
  }
  oldAndLoud(user);
}
