const scope = {
  exerciseA() {
    let personA = 'Paul'
    let personB = 'Ben'
    let personC = 'Tom'

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }
      function beautifyPerson() {
        // Log A: personB
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }
      personC = personA;
      // Log C: personB
    }
    changePerson();
    // Log D: personC
    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
      ];
    return result;

    // Annotation:
    // We declare a variable named 'personA' and assign it to 'Paul'. We declare a variable named 'personB' and assign it to 'Ben'. We declare a variable named 'personC' and assign it to 'Tom'. Then we declare a function named 'changePerson'. We invoke the function 'changePerson'. We run a conditional and check if the variable 'personA' is equal to 'Paul'. Because that evaluates to 'true' we look for a variable named 'person'. It doesn't exist locally or in its parent scope, so it is declared in the global and assigned to 'CardiB'. We invoke the function named 'beautifyPerson', which was hoisted at the invokation of 'changePerson'. We then log the value of 'personB' as 'Ben'. Next we run the conditional and check to see if the variable 'personB' includes the letter 'B'. That evaluates to 'true' so we reassign the variable 'personB' to the value of 'person'. Next we reassign the variable 'personC' to the value of 'personB'. We log the value of 'personC' as 'CardiB'. The function 'beautifyPerson' is resolved and next we reassign the variable 'personC' to the value of 'personA'. Then we log the value of 'personB' as 'CardiB'. The function 'changePerson' is resolved. Finally we log the variable 'personC' as 'Paul'.
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }
      // Log A: number
      function newNumber() {
        number = 64;
        // Log B: number
      }
      newNumber();
      // Log C: number
    }
    numberFunction();
    // Log D: number
    const result = [
    { 'A': 75 },
    { 'B': 64 },
    { 'C': 64 },
    { 'D': 30 }
    ];
    return result;

    // Annotation:
    // We declare a global variable named 'number' and give it a value of '30'. Then we declare a function named 'numberFunction'. We invoke 'numberFunction' and declare a functional variable named 'number' with a value of '75'. Then we declare a function named 'newNumber'. We go back up to the conditional and check to see if the variable 'number' is equal to '75'. The parent scope has a variable of that value so it evaluates to 'true'. Within that conditional we declare a local variable named 'number' and give it a value of '28'. Next we log the value of 'number' as '75' since we are back in the functional scope. We have already acknowledged the function declaration for 'newNumber' so we move down to the line where we invoke it. Within 'newNumber' we reassign the parent variable of 'number' to '64'. We then log the variable 'number' as '64'. The function 'newNumber' is resolved so next we log the functional variable 'number' as '64'. The function 'numberFunction' is resolved. We then log the global variable 'number' as '30'.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }
      // Log A: greeting
      function newPhrase() {
        greeting = 'Hey';
        // Log B: greeting
      }
      newPhrase();
      // Log C: greeting
    }
    greetingFunction();
    // Log D: greeting
    const result = [
    { 'A': 'Yo' },
    { 'B': 'Hey' },
    { 'C': 'Hey' },
    { 'D': 'Hello' }
    ];
    return result;

    // Annotation:
    // We declare a global variable named 'greeting' and assign it to 'Hello'. We declare a function named 'greetingFunction'. We then move down several lines to invoke the function 'greetingFunction'. Within the function we declare a functional variable named 'greeting' and assign it to 'Yo'. Then we hit a conditional where we check if the variable 'greeting' is equal to 'Yo'. It evaluates to 'true' as the parent scope has a variable set to that value. In the conditianal we declare a variable named 'greeting' and set it to 'Howdy'. Next we log the functional variable of 'greeting' as 'Yo'. We declare a function named 'newPhrase'. We invoke it and reassign the functional variable 'greeting' in its parent scope to 'Hey'. Then we log the functional variable 'greeting' as 'Hey'. The 'newPhrase' function is resolved and we log the functional variable 'greeting' as 'Hey'. The 'greetingFunction' function is resolved. Finally we log the global variable 'greeting' as 'Hello'. 
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      }

      newGreeting();

      // Log C: greeting
    }

    greetingGenerator();

    // Log D: greeting

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }
        // Log A: name
      }
      // Log B: name
    }
    // Log C: name
    sayName();
    // Log D: name
    const result = [
    { 'C': 'Brittany' },
    { 'A': 'Nathaniel' },
    { 'B': 'Nathaniel'},
    { 'D': 'Brittany'}
    ];
    return result;

    // Annotation:
    // First we declare a global variable named 'name', and assign it to 'Brittany'. Then we declare a function named 'sayName'. Next we log the value of 'name' as 'Brittany'. Then we invoke 'sayName'. Within the function we declare a functionally scoped variable named 'name' and assign it to 'Pam'. We check the conditional and find it to evaluate to 'true', so we reassign the functional variable 'name' to 'Nathaniel'. We check the next conditional and find it to evaluate to 'true'. We declare a block scope variable named 'name' and assign it to 'Brittany'. Then we log 'name' as 'Nathaniel'. Then we log the functional variable of 'name' as 'Nathaniel'. The function 'sayName' is resolved, so we move on to log the global variable as 'Brittany'.
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog
      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }
      function rollOver() {
        // Log B: dog
        dog = 'Biscuit';
        // Log C: dog
      }
      rollOver();
      // Log D: dog
    }
    petDog();
    // Log E: dog
    const result = [
    { 'A': 'Spot' },
    { 'B': 'Spot' },
    { 'C': 'Biscuit' },
    { 'D': 'Biscuit' },
    { 'E': 'Biscuit' }
    ];
    return result;

    // Annotation:
    // We declare a variable named 'dog' and assign it to 'Spot'. Then we declare a function called 'perDog'. Next we invoke that function and immediately log 'dog' as 'Spot'. Then we check the conditional and it evaluates to 'true'. Inside we declare a block scoped variable named 'dog' and assign it to 'Fluffy'. Then we declare a function named 'rollOver'. We next invoke that function and immediately log 'dog' as 'Spot'. We reassign the variable 'dog' to 'Biscuit'. Then we log 'dog' as 'Biscuit'. The function 'rollOver' is resolved, so we log 'dog' as 'Biscuit'. Then the function 'petDog' is resolved, so we log 'dog' as 'Biscuit'.
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {
      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }
        // Log B: fruit
      }
      // Log C: fruit
    }
    eatFruit()
    // Log D: fruit

    const result = [
    { 'A': 'mango' },
    { 'B': 'mango' },
    { 'C': 'mango' },
    { 'D': 'apple' }
    ];
    return result;

    // Annotation:
    // We declare a global variable named 'fruit' and assign it to 'apple'. Then we declare a function named 'eatFruit'. Next we invoke 'eatFruit'. We evaluate the conditional to 'true', so we declare a leaky variable named 'fruit' and assign it to 'mango'. The next conditional evaluates to 'true', so we log the parent variable 'fruit' as 'mango'. Then we log 'fruit' as 'mango'. Then we log 'fruit' as 'mango', since the variable declared as 'mango' was declared with a var. The function 'eatFruit' is resolved, so we log the global variable 'fruit' as 'apple'.
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;
      // Log A: num
      if (num < 5) {
        const num = 9;

        fn2(num)

        const newNum = num;
        // Log B: newNum
      }
      newNum = num;
      // Log C: newNum
    }
    const fn2 = function(num){
      // Log D: num
      num = num + 1;
      // Log E: num
    }
    fn1();

    const result = [
      { 'A': 4 },
      { 'D': 9 },
      { 'E': 10 },
      { 'B': 10 },
      { 'C': 6 }
      ];
    return result;

    // Annotation:
    // We declare a global variable called 'num' and assign it to '6'. Then we declare a function called 'fn1'. Next we decare a function called 'fn2'. Then we invoke 'fn1'. Within 'fn1' we declare a functional variable named 'num' and assign it to '4'. We log the functional variable as '4'. We check the conditional and find it to evaluate to 'true', so we declare a block scoped variable named 'num' and assign it to '9'. We declare another block scope variable. Then in that conditional we invoke 'fn2' and pass in the block scope variable 'num'. Within 'fn2', we log the value of 'num' as '9'. Then we reassign the variable 'num' to 'num + 1'. Next we log the value of 'num' as '10'. The funciton 'fn2' is resolved, so back inside the conditional we assign the value of 'newNum' to the value of 'num'. We log the variable 'newNum' as '10'. Then we create a global variable called 'newNum' and assign it to the value of the global variable 'num'. We log the value of as '6'. The function 'fn1' is resolved. 
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();
      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }
      // Log C: hunger
    };
    eatSnack();
    hunger += 5;
    // Log D: hunger
    eatSnack();
    // Log E: hunger

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // We declare a global variable named 'hunger' and assign it to the value of '100'. We declare a function called 'eatSnack'. We invoke 'eatSnack'. Within 'eatSnack' we reassign the value of 'hunger' to 'minus equals 25'. Next we declare a function named 'gorgeYourself'. We log 'hunger' as '75'. We invoke 'gorgeYourself' and inside declare a functional variable named 'hunger' and assign it to '0'. We log 'hunger' as '0'. The function 'gorgeYourself' is resolved and we log 'hunger' as '75'. 
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    }

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = "National Treasure"
      }

      shesTheManReference();
    }

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
        if (num > 5) {
           num = 7;
        }
        // Log A: num
    }

    foo();

    // Log B: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {
      // Log A: instructor
      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }
      // Log B: instructor
      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }
      rename();
      // Log D: instructor
    }
    // Log E: instructor
    changeInstructor();
    // Log F: instructor

    const result = [
      { 'E': 'Pam' },
      { 'A': 'Pam' },
      { 'B': 'Pam' },
      { 'C': 'Louisa' },
      { 'D': 'Louisa' },
      { 'F': 'Pam' }
      ]
    return result;

    // Annotation:
    // At line 430 we declare a global variable named 'instructor' and assign it to 'Pam'. Then we declare a function named 'changeInstructor'. Next we move down to line 447 and log the 'instructor' as 'Pam'. At the next line we invoke the function 'changeInstructor'. In that function we log 'instructor', which does not exist in the local scope, so we look to the global scope to find the value of 'Pam'. Next we run through the conditional. We check to see if 'instructor' is equal to 'Brittany'; it is not, so we declare a block variable named 'instructor' and assign it to 'Brittany'. Then we log 'instructor' which is globally defined as 'Pam'. The next line we declare a function named 'rename'. We then invoke 'rename' and create a functional variable of 'instructor' and assign it to 'Louisa'. Then we log 'instructor' as 'Louisa'. The 'rename' function is resolved and we log the functional 'instructor' variable as 'Louisa'. The 'changeInstructor' function is resolved and we log the global variable 'instructor' as 'Pam.'
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [ 
      { 'B': 'flipflop' },
      { 'A': 'undefined' },
      { 'C': 'flipflop' }
    ];
    return result;

    // Annotation:
    // On line 469 we declare a global variable named 'shoe' and assign it to 'flipflop'. Then on line 471 we declare a function named 'putOnShoe'. Then at line 476 we log the value of 'shoe' as 'flipflop'. At line 477 we invoke the function named 'putOnShoe' and declare a variable named 'shoe' to the functional scope. Then we log 'shoe' as undefined because we have not yet assigned a value to the functional variable named 'shoe'. Then we assign the value of 'boot' to the functional variable of 'shoe'. The function is resolved and we move on to line 478, where we log the value of 'shoe' as 'flipflop'.
  }
}

module.exports = scope;