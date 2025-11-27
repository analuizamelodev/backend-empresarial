"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const PORT = process.env.PORT ?? 3333;
server_1.server.listen(Number(PORT), () => {
    console.log(`Server running on port ${PORT}`);
});
