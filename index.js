function showError(errorMessage) {
    let msgElem = document.getElementById('response');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;

}

function validateName_f(name_f) {
    if (!name_f.value) {
        return 1;
    } else if (name_f.value.indexOf('\'') !== -1 || name_f.value.indexOf('\"') !== -1) {
        return 2;
    }
    return 0;
}

function validateName_l(name_l) {
    if (!name_l.value) {
        return 3;
    } else if (name_l.value.indexOf('\'') !== -1 || name_l.value.indexOf('\"') !== -1) {
        return 4;
    }
    return 0;
}

function validateBirthday(birthday) {
    if (!birthday.value) {
        return 5;
    }
    else if (birthday.value.search("[0-9]{2}/[0-9]{2}/[0-9]{4}")) {
        return 6;
    }
    else {
        let birthdayTemp = birthday.value.toString();
        let tempBirthdayArr = birthdayTemp.split('/');
        let year = +tempBirthdayArr[2],
            month = tempBirthdayArr[0] - 1, // WHY THEY start numerate from 0??????
            day = +tempBirthdayArr[1];

        let dateChoose = new Date(year, month, day);
        let dateNow = new Date();
        let datePrevious = new Date(1905, 1);

        return (datePrevious < dateChoose && dateChoose < dateNow) ? 0 : 7;
    }
}

function validateSex(sex) {
    if (!sex.value) {
        return 8;
    }
    return 0;
}

function validateCountry(country) {
    if (country.value === "Choose county") {
        return 9;
    }
    return 0;
}

function validateEmail(email) {
    if (!email.value) {
        return 10;
    } else if (email.value.search("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")) {
        return 11;
    }
    return 0;
}

function validatePassword(password) {
    if (!password.value) {
        return 12;
    }
    return 0;
}

function validateAddress(address) {
    if (!address.value) {
        return 13;
    } else if (address.value.indexOf('\'') !== -1 || address.value.indexOf('\"') !== -1) {
        return 14;
    }
    return 0;
}

function validate(form) {
    let elems = form.elements;
    let errorMassage = validateName_f(elems.name_f) || validateName_l(elems.name_l) ||
        validateBirthday(elems.birthday) || validateSex(elems.sex) || validateCountry(elems.country) ||
        validateEmail(elems.email) || validatePassword(elems.password) || validateAddress(elems.address);

    const pls = "Please, enter ",
        plsDont = "Please, don't use (' or \") in ",
        correct = "correct ",
        correctForm = "correct format ",
        nameF = "First name!",
        nameL = "Last name!",
        birth = "Birthday!",
        address = "Address!";


    switch (errorMassage) {
        case 1:
            showError(pls + nameF);
            break;
        case 2:
            showError(plsDont + nameF);
            break;
        case 3:
            showError(pls + nameL);
            break;
        case 4:
            showError(plsDont + nameL);
            break;
        case 5:
            showError(pls + birth);
            break;
        case 6:
            showError(pls + correctForm + birth);
            break;
        case 7:
            showError(pls + correct + birth);
            break;
        case 8:
            showError(pls + "Sex!");
            break;
        case 9:
            showError(pls + "Country!");
            break;
        case 10:
            showError(pls + "Email!");
            break;
        case 11:
            showError(pls + correct + "Email!");
            break;
        case 12:
            showError(pls + "Password!");
            break;
        case 13:
            showError(pls + address);
            break;
        case 14:
            showError(plsDont + address);
            break;
        case 0:
            showError("");
            break;
    }
}