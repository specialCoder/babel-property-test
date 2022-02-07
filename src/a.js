const b = {
    test:'my',
    // findName: () => {
    //     const b = [];
    //     return b.findLast(({ name = ''} = {}) => {
    //         return name.includes('name');
    //     })
    // },
    sayName:(name)=> {
        return `hello, ${name}`
    }
};

// const result = [1, 2, 3, 4, 5].copyWithin(0, 3)

// const instance = new Promise((resolve, reject) => {
//   resolve(123)
// })

// const name = b.findName();

const {test, ...other} = b;

export default {
    ...other, 
    // name, 
    // result, 
    // instance
};