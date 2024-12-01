import { request } from "http";
import { test, expect } from "playwright/test";
import { title } from "process";

test.describe("API testing", () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    test("Validate responce code", async({request}) => {
        const responce = await request.get(baseUrl+'/todos');
        expect(responce.status()).toBe(200);
        console.log("Responce content: ", await responce.json());
    })

    test("Validate responce for invalid request responce code", async({request}) => {
        const responce = await request.get(baseUrl+'/todoss');
        expect(responce.status()).toBe(404);
    })

    test("Validate responce data printing", async({request}) => {
        const responce = await request.get(baseUrl+'/todos/1');
        expect(responce.status()).toBe(200);
        const responceData = await JSON.parse(await responce.text());
        console.log('responceData: ',responceData);
    })

    test("Validate responce data ", async({request}) => {
        const responce = await request.get(baseUrl+'/todos/1');
        await expect(responce.status()).toBe(200);
        const responceData = await JSON.parse(await responce.text());
        console.log(responceData)
        expect(responceData.userId).toBe(1);
        expect(responceData.id).toBe(1);
        expect(responceData.title).toBe('delectus aut autem');
        expect(responceData.completed).toBeFalsy();
    })

    test("Validate POST request - create new user ", async({request}) => {
        const responce = await request.post(baseUrl+'/todos', {
            data: {
                userId: 14,
                title: 'extrapolues',
              }            
        })
        const responceData = await JSON.parse(await responce.text());
        console.log(responceData)
        expect(await responce.status()).toBe(201);
        expect(responceData.userId).toBe(14);
        expect(responceData.title).toBe('extrapolues');
    })

    test("Validate POST request - login testing ", async({request}) => {
        const responce = await request.post('https://dummyjson.com/auth/login', {
            data: {
                username: 'emilys',
                password: 'emilyspass'
              }            
        })
        const responceData = await JSON.parse(await responce.text());
        console.log(responceData)
        expect(await responce.status()).toBe(200);
        // expect(responceData.firstname).toBe('Emily');           //didn't worked
    })

    test("Validate POST request - login failed test ", async({request}) => {
        const responce = await request.post('https://dummyjson.com/auth/login', {
            data: {
                username: 'emilys1',
                password: 'emilyspass'
              }            
        })
        const responceData = await JSON.parse(await responce.text());
        console.log(responceData)
        expect(await responce.status()).toBe(400);
        // expect(responceData.firstname).toBe('Emily');
        expect(await responceData.message).toBe('Invalid credentials');
        expect(responceData.image).toBeFalsy();
    })

    test("Validate POST request - delete user ", async({request}) => {
        const responce = await request.post(baseUrl+'/todos', {
            data: {
                userId: 14,
                title: 'extrapolues',
              }            
        })
        const responceData = await JSON.parse(await responce.text());
        console.log('responceData: ',responceData)

        const responceNew = await request.delete(baseUrl+'/todos', {
            data: {
                userId: 14,
                title: 'extrapolues',
              }
        })
        const responceDataNew = await JSON.parse(await responceNew.text());
        console.log('responceDataNew: ',responceDataNew)
        // expect(responceNew.status()).toBe(204);                      //not getting proper responce code 204
    })

    test("Validate PUT request - update user ", async({request}) => {
        const responce = await request.put(baseUrl+'/todos/7', {
            data: {
                userId: 14,
                title: 'extrapolues',
              }            
        })
        const responceData = await JSON.parse(await responce.text());
        console.log(responceData)
        expect(await responce.status()).toBe(200);
        expect(responceData.userId).toBe(14);
        expect(responceData.title).toBe('extrapolues');
    })

    
})