let woodcount: number = 0; 
let woodconversion: unknown = 0;
let woodword: string = ' ';

const button = document.createElement('button');

button.innerText = "Harvest Wood";
button.id = "mainButton";
button.addEventListener('click', () => {
    if (document.getElementById('wood-count') != undefined) {
        woodcount++;
        woodconversion = woodcount;
        woodword = woodconversion as string;
        document.getElementById('wood-count')!.innerHTML = woodword;
    }
});

document.body.appendChild(button);