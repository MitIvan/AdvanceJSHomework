class Animal {
    constructor(name, type, age, size){
      this.name = name
      this.type = type
      this.age = age
      this.size = size
      this.isEaten = false
    }
  
     eat(inputAnimal){
      if(inputAnimal instanceof Animal){
        if(inputAnimal.type === 'herbivore' && this.type === 'herbivore'){
           console.log(`${inputAnimal.name} is a herbivore and does not eat other animals`)
        } else if(this.type !=='herbivore') {
              if(inputAnimal.size  > this.size * 2){
                  console.log(`${this.name} tried to eat ${inputAnimal.name} but ${inputAnimal.name} was too large.`)
              }else {
                inputAnimal.isEaten = true 
              console.log(`${this.name} ate ${inputAnimal.name}`)
              }
          } 
    }else {
        console.log(`${this.name} is eating ${inputAnimal}.`)
      }
    }
  }
  
  
  
  let dog = new Animal('Cerberus', 'carnivore', 4 , 5)
  
  let cat = new Animal ('Garfield', 'omnivore', 4 , 30)

  dog.eat(cat)
  
  