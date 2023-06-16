import { getPercents } from "../percents";

describe("Проверка рассчёта процента от числа", () => {
    it("20% от 100 = 20", () => expect(getPercents(20, 100)).toBe(20));
    it("10% от 30 = 3", () => expect(getPercents(10, 30)).toBe(3));
    it("5% от 50 = 2.5", () => expect(getPercents(5, 50)).toBe(2.5));
    it("0% от 10 = 0", () => expect(getPercents(0, 10)).toBe(0));
    it("-5% от 50 = error", () => expect(getPercents(-5, 50)).toBe("Процент не может быть меньше нуля."));
    it("20% от -100 = error", () => expect(getPercents(20, -100)).toBe("Ожидается положительное число."));
    it("150% от 30 = error", () => expect(getPercents(150, 30)).toBe("Процент не может быть больше 100."));
});