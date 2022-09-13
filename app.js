 function fun() {
        let hexArray = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


        let store = "";
        for (i = 0; i < 6; i++) {
            let randomarray = hexArray[Math.floor(Math.random() * hexArray.length)];

            store = store + randomarray;
            document.getElementById('hexcolor').innerHTML = "#" + store;
            document.querySelector('.container').style.background = "#" + store;

        }
    }