const counters = document.querySelectorAll('.numbers');
const speed = 200;

counters.forEach(numbers => {

    const updateCount = () => {

        const target = +numbers.getAttribute('data-target');
        const count = +numbers.innerText;

        const inc = target / speed;

        if (count < target) {

            numbers.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 30);

        } else {

            count.innerText = target;
        }
    }
    updateCount();
});