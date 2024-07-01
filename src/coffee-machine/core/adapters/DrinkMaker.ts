export default interface DrinkMaker {
    make(incomingOrder: string): Promise<string>;
}
