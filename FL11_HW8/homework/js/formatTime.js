function formatTime(value) {
    const day = Math.floor(value / 1440),
        hour = Math.floor(value % 1440 / 60),
        minutes = value % 1440 % 60;

    return `${day} day(s) ${hour} hour(s) ${minutes} minute(s).`;
}

formatTime(120);
formatTime(59);
formatTime(3601);
