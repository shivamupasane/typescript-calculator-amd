export class CalculatorMethods {
    public add (...param: number[]) {
        let sum = 0;
for(const item of param) {
sum += item;
}
return sum;
    }
}