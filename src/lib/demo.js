  import namor from 'namor';

  function newPerson(num) {
    const sexAssigner = Math.random();
    return {
      id: num,
      firstName: namor.generate({ words: 1, numbers: 0 }),
      lastName: namor.generate({ words: 1, numbers: 0 }),
      sex:
        sexAssigner > 0.75
          ? 'prefer not to say'
          : sexAssigner > 0.25
          ? 'male'
          : 'female',
      age: Math.floor(Math.random() * 110),
      occupation: namor.generate({ words: 1, numbers: 0 }),
    };
  }

  let userDefinedNum = 50;

  let data = [];

  for (let i = 0; i < userDefinedNum; i++) {
    let newP = newPerson(i);
    data.push(newP);
    
  }

  export const get = () => {
    return {
      body: {
        data,
      }
    }
  }