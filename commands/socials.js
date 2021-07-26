module.exports = {
    name: 'socials',
    description: 'show me where you are online',
    execute(message, args, socials) {
        let reply = "You can follow me on social media here: \n";

        if(args.length == 0){
            socials.forEach(sc => {
                reply += `${sc.title}: ${sc.url} \n`
            })
        }else{
            socials.forEach(sc => {
                if(args.includes(sc.title)){
                    reply += `${sc.title}: ${sc.url} \n`
                }
               
            })
        }

        message.channel.send(reply)
    }
}