//Assign to variable
const myObj = { id: "1234567890" } //No double quotes on keys (but you can)


//Object memeber access uses dot notation
myObj.id;
myObj["id"];
// console.log(myObj)

//Can also assign new values with dot notation
myObj.name = "counting";
// console.log(myObj)

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

let profile = {
    user: {
        userName: "MyName",
        userId: 8675309
    },
    photos: {
        profilePhoto: "myphoto.jpg",
        albums: [{
            photoUrl: "http://myphotos.com/myphoto1.jpg",
            albumName: "My sweet pics"
        }]
    },
    friends: [{}, {}]
}

profile.user.userName
profile.photos.profilePhoto


console.log(
    myObject2.nestedObjKey
);