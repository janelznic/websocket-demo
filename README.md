# WebSocket Demo

WebSocket API providing continuous two-way connection between client and server. Unlike HTTP, WebSocket provides full-duplex communication. Additionally, WebSocket enables streams of messages on top of TCP. Messages can be sent and received on both ends.

This demo is designed to interchange data between **server** and two client endpoints: **broadcaster** and **receiver**.

API: https://developer.mozilla.org/cs/docs/Web/API/WebSockets_API


## Screenshot
![Screenshot 2019-09-06 09 37 44](https://user-images.githubusercontent.com/1569401/64410212-d474cf00-d08a-11e9-9497-96d52680363a.png)


## Requirements
 * [Node.js](http://nodejs.org/)


## Installation
```bash
npm install
npm start
open http://localhost:8080/
```


## Environment
* Client address `ws://localhost:8080/` (HTTP)
* Server `ws://localhost:8081/` (WebSockets)


## License
MIT © Jan Elznic – [Homepage](https://janelznic.cz) – [Github](https://github.com/janelznic) – [GitLab](https://gitlab.elznic.net/janelznic) – [LinkedIn](https://linkedin.com/in/janelznic/)
