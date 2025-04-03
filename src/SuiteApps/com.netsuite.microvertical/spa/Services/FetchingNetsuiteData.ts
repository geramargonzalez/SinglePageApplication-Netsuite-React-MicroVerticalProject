// import * as record from 'N/record';

async function fetchCustomer(): Promise<any[]> {
    const response = await fetch('/services/rest/query/v1/suiteql', {
        method: 'POST',
        headers: {Prefer: 'transient'},
        body: JSON.stringify({q: 'SELECT * FROM customer'}),
    });
    const responseJson = await response.json();
    // Return items array directly without using the mapper
    return responseJson.items;
}


export default {
    fetchCustomer
};
