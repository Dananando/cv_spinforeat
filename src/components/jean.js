const searchBFF = (studentsList) => {
    const bff = 'Jean-BFF <3';
    let verificationCounter = 0;
    let isThereJean = false;
    const bffTable = [];
    let verificationBffTable = [];

    for (let i = 0; i < studentsList.length; i++) {
        if (studentsList[i] == bff || studentsList[i] === bff) {
            bffTable.push(studentsList[i]);
        } else {
            continue;
        }
    }

    verificationBffTable = bffTable.filter((element) => {
        if (element === bff) {
            return element;
        }
    });

    if (verificationBffTable.length) {
        verificationCounter++;
    } else {
        verificationCounter = 0;
    }

    if (verificationCounter > 0) {
        isThereJean = true;
    } else {
        isThereJean = false;
    }

    return isThereJean;
}