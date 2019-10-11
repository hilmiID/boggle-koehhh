const { fromEvent, merge } = rxjs;
const { map, switchMap, tap } = rxjs.operators;

// import { validateTetangga } from './validate-tetangga';


const words = document.querySelectorAll('.word-baris>.word');
const actions = document.querySelectorAll('.panel-command>button');

console.log(words);
console.log(actions);
const one$ = fromEvent(words[0], 'click').pipe(
    map((v) => { return { senderIndex: 0, letter: words[0].textContent, position: { x: 0, y: 0 } } }))
const two$ = fromEvent(words[1], 'click').pipe(
    map((v) => { return { senderIndex: 1, letter: words[1].textContent, position: { x: 1, y: 0 } } }))
const three$ = fromEvent(words[2], 'click').pipe(
    map((v) => { return { senderIndex: 2, letter: words[2].textContent, position: { x: 2, y: 0 } } }));
const four$ = fromEvent(words[3], 'click').pipe(
    map((v) => { return { senderIndex: 3, letter: words[3].textContent, position: { x: 3, y: 0 } } }));
const five$ = fromEvent(words[4], 'click').pipe(
    map((v) => { return { senderIndex: 4, letter: words[4].textContent, position: { x: 0, y: 1 } } }));
const six$ = fromEvent(words[5], 'click').pipe(
    map((v) => { return { senderIndex: 5, letter: words[5].textContent, position: { x: 1, y: 1 } } }));
const seven$ = fromEvent(words[6], 'click').pipe(
    map((v) => { return { senderIndex: 6, letter: words[6].textContent, position: { x: 2, y: 1 } } }));
const eight$ = fromEvent(words[7], 'click').pipe(
    map((v) => { return { senderIndex: 7, letter: words[7].textContent, position: { x: 3, y: 1 } } }));
const nine$ = fromEvent(words[8], 'click').pipe(
    map((v) => { return { senderIndex: 8, letter: words[8].textContent, position: { x: 0, y: 2 } } }));
const ten$ = fromEvent(words[9], 'click').pipe(
    map((v) => { return { senderIndex: 9, letter: words[9].textContent, position: { x: 1, y: 2 } } }));
const eleven$ = fromEvent(words[10], 'click').pipe(
    map((v) => { return { senderIndex: 10, letter: words[10].textContent, position: { x: 2, y: 2 } } }));
const twelve$ = fromEvent(words[11], 'click').pipe(
    map((v) => { return { senderIndex: 11, letter: words[11].textContent, position: { x: 3, y: 2 } } }));
const thirteen$ = fromEvent(words[12], 'click').pipe(
    map((v) => { return { senderIndex: 12, letter: words[12].textContent, position: { x: 0, y: 3 } } }));
const fourteen$ = fromEvent(words[13], 'click').pipe(
    map((v) => { return { senderIndex: 13, letter: words[13].textContent, position: { x: 1, y: 3 } } }));
const fifteen$ = fromEvent(words[14], 'click').pipe(
    map((v) => { return { senderIndex: 14, letter: words[14].textContent, position: { x: 2, y: 3 } } }));
const sixteen$ = fromEvent(words[15], 'click').pipe(
    map((v) => { return { senderIndex: 15, letter: words[15].textContent, position: { x: 3, y: 3 } } }));

const check$ = fromEvent(actions[0], 'click').pipe(map(v => 'check'));
const clean$ = fromEvent(actions[1], 'click').pipe(map(v => 'clean'));
const next$ = fromEvent(actions[2], 'click').pipe(map(v => 'next'));

const screen = document.querySelector('.panel-validation');
console.log(screen);
const listResultPanel = document.querySelector('.panel-list');

const words$ = merge(
    one$, two$, three$, four$, five$, six$, seven$, eight$,
    nine$, ten$, eleven$, twelve$, thirteen$, fourteen$, fifteen$, sixteen$
)
const actions$ = merge(check$, clean$, next$);

let input = "";
let lastPos = null;
let listValidResult = [];
let score = 0;


words$.subscribe((v) => {
    if (lastPos) {
        // check valid tetangga;
        validasiTetangga({ letter: v.letter, initialPosition: { x: v.position.x, y: v.position.y }, beforePosition: lastPos })
            .then((res) => {
                if (res) {
                    lastPos = v.position;
                    input += v.letter;
                    screen.textContent = input;
                    console.log(input, lastPos);
                    words[v.senderIndex].classList.add("active");
                }
            })
    } else {
        lastPos = v.position;
        input += v.letter;
        screen.textContent = input;
        console.log(input, lastPos);
        words[v.senderIndex].classList.add("active");
    }

})

actions$.subscribe((v) => {
    console.log(v);
    switch (v) {
        case 'check':
            // check to validation-result
            // checkResult(v);
            // if valid then :
            listValidResult.push(input);
            score++;
            input = "";
            lastPos = null;
            screen.textContent = "";
            listResultPanel.textContent = listValidResult;
            console.log("haha");
            break;
        case 'clean':
            clean();
            break;
        case 'next':
            next();
            break;
    }
})

function clean() {
    input = "";
    lastPos = null;
    listValidResult = [];
    score = 0;
    screen.textContent = "";
    listResultPanel.textContent = "";
}