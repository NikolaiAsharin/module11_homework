//Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

export function getPercents(percent, number) {
    if (percent < 0)
        return "Процент не может быть меньше нуля.";

    if (percent > 100)
        return "Процент не может быть больше 100.";

    if (number < 0)
        return "Ожидается положительное число.";

    return (number * percent) / 100;
}

