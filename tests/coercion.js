
function expression(str) {
    console.log(`${str} \n> ${eval(str)}`);
}

expression(`"10" + 5`);
expression(`+"10" + 5`);
expression(`-"10" + 5`);
expression(`((+!+[]) + (+!+[]) + (+!+[]) + (+!+[]) + (+!+[]) + (+!+[]) + (+!+[]) + (+!+[]) + (+!+[]) + (+!+[])) + (+!+[]) + (+!+[]) + (+!+[]) + (+!+[]) + (+!+[])`)

expression(`({} + {})[3] + (![]+[])[3]`)