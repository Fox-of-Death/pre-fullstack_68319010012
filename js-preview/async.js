//จำลองการรับข้อมูล server
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function demo() {
    console.log("1) Start loading...");
    await wait(2000);
    console.log("2) loading complete");
    await getUsers();
    await posts();
}

async function getUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const users = await response.json();
        console.log(`Get data ${users.length}`);
        users.forEach((u) => console.log(u.id, u.name, "-", u.email));
    } catch (error) {
        console.error("Error Found :", error.message);
    }
};

async function posts() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const postData = await response.json();
        console.log(`Get data ${postData.length}`);
        postData.forEach((u) => console.log(u.userId, u.id, u.title, u.body));
    } catch (error) {
        console.error("Error Found :", error.message);
    }
};

demo();
console.log("3) Show Data");