import axios from 'axios';
// export default axios.create({
//     baseUrl: 'localhost:8080',
//     headers:{"ngrok-skip-browser-warning":"true"}
// });
export default axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 20000,
    headers: {"Content-type":"application/json" }
})

/* Explanantion:
axios.create({ ... }):
The axios.create method creates a custom Axios instance with specific configuration options.
This instance can be used to make HTTP requests to a specific API or server.
baseURL: 'http://localhost:8080':
The baseURL specifies the base URL for all requests made using this Axios instance.
In this case, the base URL is 'http://localhost:8080', which means that all requests will be sent to this address.
Typically, you’d replace 'http://localhost:8080' with the actual API endpoint you want to communicate with.
timeout: 20000:
The timeout option sets the maximum time (in milliseconds) that the Axios instance will wait for a response from the server.
If the server doesn’t respond within this time, the request will be considered failed.
In this example, the timeout is set to 20,000 milliseconds (20 seconds).
headers: {"Content-type":"application/json" }:
The headers object specifies additional headers to be included in the HTTP requests made by this Axios instance.
Headers are key-value pairs that provide additional information about the request.
In this case:
"Content-type": "application/json" sets the Content-Type header to indicate that the data being sent in the request body is in JSON format.
This is important because the server can then parse the data correctly.
The Content-Type header is essential when sending data via POST or PUT requests.
Putting It All Together:
When you use this custom Axios instance, it will automatically include the specified base URL, timeout, and headers in all requests.
For example, if you make a POST request using this instance, it will have the specified base URL, a timeout of 20 seconds, and the Content-Type header set to JSON.
Remember that this configuration allows you to create a consistent setup for making API requests throughout your application. It’s especially useful when you need to communicate with a specific API server, and you want to avoid repeating the same settings for every request.
*/