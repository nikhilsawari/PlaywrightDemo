import {expect, test, request, APIRequestContext} from "@playwright/test";

let respNewContext2;
test.beforeAll("Before block", async()=> {
    respNewContext2 = await request.newContext({baseURL: "https://restful-booker.herokuapp.com"})
})

test("Http get test", async ({request})=> {
    const  responce = await request.get("https://restful-booker.herokuapp.com/booking");
    console.log(await responce.text());
})

test("Http get test with new context", async({})=> {
    const respNewContext =  await request.newContext({baseURL: "https://restful-booker.herokuapp.com"});
    console.log(respNewContext)

    const responce1 = respNewContext.get("/booking");
    // console.log((await responce1).text());
    console.log((await responce1).json());
})

test("Http get test 2", async ({})=> {
    const responce2 = await respNewContext2.get("/booking")
    console.log(await responce2.json());
})

test("Http get test with header", async ({request})=> {
    const  responce = await request.get("https://restful-booker.herokuapp.com/booking/2", 
        {headers: {Accept: "application/json"}
    });
    console.log(await responce.json());
})

test("Http get test with header 2", async ({request})=> {
    const  responce = await request.get("https://restful-booker.herokuapp.com/booking/2", 
        {headers: {Accept: "application/json"}
    });
    console.log(await responce.json());
})

test("Http get test with header 3", async ({request})=> {
    const  responce = await request.get("https://restful-booker.herokuapp.com/booking", 
        {
            params: {
                firstname: 'Mary',
                lastname: 'Smith'
            }
        })
    console.log(await responce.json());
})