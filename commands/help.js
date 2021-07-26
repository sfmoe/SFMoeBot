module.exports = {
    name: 'help',
    description: 'display a list of commands',
    execute(message, args) {
        let reply = "Currently there is only one command available: !socials.\n If you want only a specific social link then eg: !social instagram";
        message.channel.send(reply)
    }
}