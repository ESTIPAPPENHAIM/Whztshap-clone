function socketMain(socket){
    socket.on("connection", () => {
        console.log("A user connected");
});
};
module.exports = socketMain;