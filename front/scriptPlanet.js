for(let i=1; i<7; i++){
    fetch(`https://swapi.dev/api/planets?page=${i}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
    ;    for(item of res.results){
            let data = JSON.stringify(item);
            console.log(data);
            fetch("http://localhost:3000/planet/new", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data
            })
        }
    })
    }