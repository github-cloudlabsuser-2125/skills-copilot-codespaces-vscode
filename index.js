const data = [
    [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 }
    ],
    [
        { id: 3, name: 'Bob', age: 35 },
        { id: 4, name: 'Alice', age: 28 }
    ]
];

const names = data.flatMap(innerArray => innerArray.map(item => item.name));

console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice']