export const formatDate = (ev) => {
    const targetEl = ev.target;
    let value = targetEl.value;

    value = value.replace(/\D/g, '');

    if(value[0] > 3) {
        value = `0${value[0]}`
    }

    if(value.length == 2 && Number(value) > 31) {
        value = '31';
    }

    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }

    if(value[3] > 1) {
        value = value.slice(0, 3) + `0${value[3]}`;
    }

    if(value.length == 5 && Number(value.slice(3, 5) > 12)) {
        value = value.slice(0, 3) + '12';
    }

    if (value.length > 5) {
        value = value.slice(0, 5) + '/' + value.slice(5);
    }
    if(value.length == 10 && Number(value.slice(6)) > 2100) {
        value = value.slice(0, 6) + '2100';
    }

    if(value.length == 10 && Number(value.slice(6)) < 1970) {
        value = value.slice(0, 6) + '1970';
    }

    if (value.length > 10) {
        value = value.slice(0, 10);
    }

    targetEl.value = value;
}