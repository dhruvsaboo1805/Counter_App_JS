const CountValue = document.querySelector('#counter');

const Increment = () =>
{
    // get the value
    let value = parseInt(CountValue.innerText);

    // update the value
    value = value + 1;
    // set the value
    CountValue.innerText = value;
};

const Decrement = () =>
{
    // get the value
    let value = parseInt(CountValue.innerText);

    // update the value
    value = value - 1;
    // set the value
    CountValue.innerText = value;
}