var myJson;
var list_huruf;
var list_hasil;
var index_list = 0;
const wrapper = document.querySelector('.angka');

var generateNumberButton = () => {
    let huruf = list_huruf[index_list];
    wrapper.classList.add('angka');

    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }

    for(let x1 of huruf){
        for(let x2 of x1){
            const number = document.createElement('button');
            number.textContent = x2;

            number.onclick = () => {
                clickNumber(number.textContent);
            }

            wrapper.appendChild(number);
        }
    }
    document.body.appendChild(wrapper);
}

var loadJSON = () => {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './assets/db.json', true);
    xobj.onreadystatechange = () => {
        if(xobj.readyState == 4 && xobj.status == '200') {
            myJson = JSON.parse(xobj.responseText);
            use1set();
        }
    };
    xobj.send(null)
}

var use1set = () => {
    list_huruf = myJson.list.list_huruf;
    list_hasil = myJson.list.list_hasil;
    generateNumberButton();
    console.log(list_huruf.length);
}

var next = () => {
    if(index_list < list_huruf.length-1){
        index_list += 1;
    }
    generateNumberButton();
}

loadJSON();
