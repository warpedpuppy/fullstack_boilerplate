export default {
    async TestAPICall(str) {
        let res = await fetch(str);

        return await ((!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json())
    }
}