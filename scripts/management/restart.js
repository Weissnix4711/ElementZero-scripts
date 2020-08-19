/*
Restart server periodically to clear lag. Only useful for those using the MxOpCmd plugin.
Mostly a template / easy starting point for those new to scripting.

v1
*/

const system = server.registerSystem(0, 0);

let i = setInterval(() => {
    system.executeCommand(`kick @a Server is restarting to clear lag!`, () => {});
    system.executeCommand(`mxopcmd stop`, () => {});
}, 7200)

console.log("restart.js loaded");