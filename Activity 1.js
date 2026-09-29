class Animal {
  eat() { 
    return "This animal is eating.";
  }

  sleep() { 
    return "This animal is sleeping.";
  }
}

class Dog extends Animal {
  bark() { 
    return "Woof! Woof!";
  }

  fetch() { 
    return "The dog is fetching the ball.";
  }
}

const myDog = new Dog();

console.log(myDog.eat());   
console.log(myDog.sleep()); 
console.log(myDog.bark());  
console.log(myDog.fetch()); 