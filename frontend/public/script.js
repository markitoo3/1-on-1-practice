const loadEvent = async () => {
    const response = await fetch("/kiskutya");
    const responseJson = await response.json();
    console.log(responseJson);
    console.log(responseJson.kiskutya);
}

window.addEventListener("load", loadEvent);