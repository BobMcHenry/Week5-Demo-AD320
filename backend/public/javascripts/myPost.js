function sendMyStuff() {
    let postOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: document.getElementById('id').value,
            name: document.getElementById('name').value
        })
    };
    console.log(postOptions);
    fetch("http://localhost:3000/users", postOptions)
        .then(res => res.text)
        .then(resText => console.log(resText));
}