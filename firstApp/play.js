const fetchData = () => {
    const myPromise = new Promise((myResolve, myReject) => {
        setTimeout(() => {
            myResolve('Done');
        }, 1500);
    });
    return myPromise;
}

fetchData().then(textReceived => {
    console.log(textReceived);
    return fetchData();
}).then(textReceived => {
    console.log(textReceived);
});