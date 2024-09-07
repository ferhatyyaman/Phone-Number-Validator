function validatePhoneNumber(phoneNumber) {

    const spaceRemove = phoneNumber.split(' ').join('');


    for (let char of spaceRemove) {
        if (char < '0' || char > '9') {
            return { isValid: false, message: 'Telefon numarası yalnızca rakamlardan oluşmalıdır.' };
        }
    }

    if (spaceRemove.length !== 11) {
        return { isValid: false, message: 'Telefon numarası 11 haneli olmalıdır.' };
    }

    if (!spaceRemove.startsWith('05')) {
        return { isValid: false, message: 'Telefon numarası 05 ile başlamalıdır.' };
    }

    return { isValid: true, message: 'Geçerli telefon numarası.' };
}

exports = validatePhoneNumber;
