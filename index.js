function calculateVAT(price) {
    if (typeof price !== 'number' || price < 0) {
        return "Invalid";
    }

    const vatRate = 7.5;
    const vatAmount = (price * vatRate) / 100;

    return vatAmount;
}



function validContact(contact) {
    if (typeof contact !== 'string') {
        return "Invalid";
    }

    if (contact.length !== 11) {
        return false;
    }

    if (!contact.startsWith("01")) {
        return false;
    }

    if (!/^\d+$/.test(contact)) {
        return false;
    }

    return true;
}




function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let passCount = 0;
    let failCount = 0;

    for (let mark of marks) {
        if (mark >= 50) {
            passCount++; 
        } else {
            failCount++; 
        }
    }

    return passCount > failCount;
}







function validProposal(person1, person2) {
    if (typeof person1 !== 'object' || typeof person2 !== 'object' || person1 === null || person2 === null) {
        return "Invalid";
    }

    if (
        !person1.hasOwnProperty('name') || !person1.hasOwnProperty('gender') || !person1.hasOwnProperty('age') ||
        !person2.hasOwnProperty('name') || !person2.hasOwnProperty('gender') || !person2.hasOwnProperty('age')
    ) {
        return "Invalid";
    }

    if (person1.gender === person2.gender) {
        return false;
    }

    if (Math.abs(person1.age - person2.age) > 7) {
        return false;
    }

    return true;
}








function calculateSleepTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    for (let time of times) {
        if (typeof time !== 'number' || isNaN(time)) {
            return "Invalid";
        }
    }

    const totalSeconds = times.reduce((sum, time) => sum + time, 0);

    const hour = Math.floor(totalSeconds / 3600); 
    const minute = Math.floor((totalSeconds % 3600) / 60); 
    const second = totalSeconds % 60;

    return { hour, minute, second };
}
