enum v {
    je, tu, il, nous, vous, ils
}
export class Verb {

    private verbInf = '';
    private verbConj: string[];

    constructor(verb: string, conjs: Array<string>) {
        this.verbInf = verb;
        this.verbConj = conjs;
    }

    public getVerbConjJE() {
        return this.verbConj[v.je];
    }

    public getVerbConjTU() {
        return this.verbConj[v.tu];
    }

    public getVerbConjIL() {
        return this.verbConj[v.il];
    }

    public getVerbConjNOUS() {
        return this.verbConj[v.nous];
    }

    public getVerbConjVOUS() {
        return this.verbConj[v.vous];
    }

    public getVerbConjILS() {
        return this.verbConj[v.ils];
    }

}
