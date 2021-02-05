//Assign to variable
const myObj = { "id": "1234567890" } //No double quotes on keys (but you can)

//Object memeber access uses dot notation
myObj.id;

//Can also assign new values with dot notation
myObj.name = "counting";

const myObject2 = {
    stringKey: "My String",
    numKey: 42,
    boolKey: true,
    addFunction: (a, b) => (a + b),
    addFunction2: function(a, b) {
        return a + b;
    },
    arrKey: [0, true, "two"],
    nestedObjKey: {
        objectception: {
            objectception: {
                objectception: {

                }
            }
        }
    }
}

console.log(
    myObject2.addFunction(1, 1)
);