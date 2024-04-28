function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Perform API request or any asynchronous operation here
        // For simplicity, we'll resolve the Promise immediately
        resolve("Response from API");
    });
}

export default getResponseFromAPI;
