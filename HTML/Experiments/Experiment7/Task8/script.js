let data = [];

    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(items => {
        data = items;
        display(data); 
    });

    function display(list) {
        let box = document.getElementById("products");
        box.innerHTML = ""; 

        for (let i = 0; i < list.length; i++) {
            let p = document.createElement("p");
            p.textContent = list[i].title + " — $" + list[i].price;
            box.appendChild(p);
        }
    }

    document.getElementById("search").addEventListener("input", function() {
        let text = this.value.toLowerCase();

        let filtered = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].title.toLowerCase().includes(text)) {
                filtered.push(data[i]);
            }
        }

        display(filtered); 
    });