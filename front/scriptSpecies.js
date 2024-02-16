for(let i=1; i<5; i++){
fetch(`https://swapi.dev/api/species?page=${i}`)
.then(res => res.json())
.then(res => {
    for(item of res.results){
        item.eye_colors=item.eye_colors.split(', ');
        item.hair_colors=item.hair_colors.split(', ');
        item.skin_colors=item.skin_colors.split(', ');
        if(item.homeworld!=null){
            handle(item);
        };
        // fetch("http://localhost:3000/species/new", {
            //         method: "POST",
            //         mode: "cors",
            //         headers: {
                //             "Content-Type": "application/json",
                //         },
                //         body: JSON.stringify(item)
                // });
    }
})
}

function handle(obj){
    fetch(obj.homeworld)
    .then(res => res.json())
    .then(res => {
        fetch(`http://localhost:3000/planet/by_name/${res.name}`)
        .then(res => res.json())
        .then(res => {
            obj.homeworld=res.result._id
            return obj;
        })
        .then(() => {fetch("http://localhost:3000/species/new", {
                method: "POST",
                mode: "cors",
                headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(obj)
            });
        })
    })

}
