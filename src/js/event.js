const { fromEvent, merge } = rxjs;
const { map, switchMap, tap } = rxjs.operators;

// import { validateTetangga } from './validate-tetangga';


const words = document.querySelectorAll('.word-baris>.word');
const actions = document.querySelectorAll('.panel-command>button');

console.log(words);
console.log(actions);

const one$ = fromEvent(words[0], 'click').pipe(
    map((v) => { return { letter: words[0].textContent, position: { x: 0, y: 0 } } }))
const two$ = fromEvent(words[1], 'click').pipe(
    map((v) => { return { letter: words[1].textContent, position: { x: 1, y: 0 } } }))
const three$ = fromEvent(words[2], 'click').pipe(
    map((v) => { return { letter: words[2].textContent, position: { x: 2, y: 0 } } }));
const four$ = fromEvent(words[3], 'click').pipe(
    map((v) => { return { letter: words[3].textContent, position: { x: 3, y: 0 } } }));
const five$ = fromEvent(words[4], 'click').pipe(
    map((v) => { return { letter: words[4].textContent, position: { x: 0, y: 1 } } }));
const six$ = fromEvent(words[5], 'click').pipe(
    map((v) => { return { letter: words[5].textContent, position: { x: 1, y: 1 } } }));
const seven$ = fromEvent(words[6], 'click').pipe(
    map((v) => { return { letter: words[6].textContent, position: { x: 2, y: 1 } } }));
const eight$ = fromEvent(words[7], 'click').pipe(
    map((v) => { return { letter: words[7].textContent, position: { x: 3, y: 1 } } }));
const nine$ = fromEvent(words[8], 'click').pipe(
    map((v) => { return { letter: words[8].textContent, position: { x: 0, y: 2 } } }));
const ten$ = fromEvent(words[9], 'click').pipe(
    map((v) => { return { letter: words[9].textContent, position: { x: 1, y: 2 } } }));
const eleven$ = fromEvent(words[10], 'click').pipe(
    map((v) => { return { letter: words[10].textContent, position: { x: 2, y: 2 } } }));
const twelve$ = fromEvent(words[11], 'click').pipe(
    map((v) => { return { letter: words[11].textContent, position: { x: 3, y: 2 } } }));
const thirteen$ = fromEvent(words[12], 'click').pipe(
    map((v) => { return { letter: words[12].textContent, position: { x: 0, y: 3 } } }));
const fourteen$ = fromEvent(words[13], 'click').pipe(
    map((v) => { return { letter: words[13].textContent, position: { x: 1, y: 3 } } }));
const fifteen$ = fromEvent(words[14], 'click').pipe(
    map((v) => { return { letter: words[14].textContent, position: { x: 2, y: 3 } } }));
const sixteen$ = fromEvent(words[15], 'click').pipe(
    map((v) => { return { letter: words[15].textContent, position: { x: 3, y: 3 } } }));

const check$ = fromEvent(actions[0], 'click').pipe(map(v => 'check'));
const clean$ = fromEvent(actions[1], 'click').pipe(map(v => 'clean'));
const next$ = fromEvent(actions[2], 'click').pipe(map(v => 'next'));

const screen = document.querySelector('.panel-validation>h1');
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
    }
    lastPos = v.position;
    input += v.letter;
    screen.textContent = input;
    console.log(input, lastPos);
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