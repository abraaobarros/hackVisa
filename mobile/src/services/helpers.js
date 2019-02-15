let getGreetingTime = (currentTime) => {
    if (!currentTime || !currentTime.isValid()) {
        return 'Hello';
    }
    const splitAfternoon = 12; // 24hr time to split the afternoon
    const splitEvening = 17; // 24hr time to split the evening
    const currentHour = parseFloat(currentTime.format('HH'));

    if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
        return 'Tarde';
    } else if (currentHour >= splitEvening) {
        return 'Noite';
    }
    return 'Manhã';
}
export {getGreetingTime}
