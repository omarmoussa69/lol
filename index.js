const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
const prefix = '!';
client.on("messageCreate", message => {
    const args = message.content.trim().split(/ +/g);
  const cmd = args[0].slice(prefix.length).toLowerCase(); // case INsensitive, without prefix
  if(message.author.id == "1026836649507827752") return;
 


  if (cmd === "سعر") { 
    if(!args[1]) return message.channel.send("يرجى ادخال عددالعملات")
    if(isNaN(args[1])) return message.channel.send("يرجى ادخال عددالعملات")
  
    let pricenotaxbef = args[1]*4700
    let pricenotax = pricenotaxbef.toString()
  
    let credits = Number(pricenotaxbef)
    let calculated = Math.ceil(credits*0.052631579)
    let result = credits+calculated;
  
    message.reply(`سعر عدد **${args[1]}** عملة صافي : **${pricenotax}**$\n التحويل بالضرائب : **${result}**$`)
    message.channel.send("في حالة الموافقة على السعر، يرجى التحويل على الحساب الآتي و ارفاق اثبات للتحويل، و بعد ذلك قم بكتابة `!تم`")
    message.channel.send("`yousssef01`")
message.channel.send("`c " + message.author.id + " " + result + "`")
  }
})
client.on("messageCreate", message => {
    const args = message.content.trim().split(/ +/g);
  const cmd = args[0].slice(prefix.length).toLowerCase(); // case INsensitive, without prefix
  if(message.author.id == "1026836649507827752") return;
  

  if (cmd === "تم") { 
    if(message.channel.name == "pending") return;
    message.channel.send(`برجاء انتظار أحد افراد الادارة للتأكيد و تحويل المبلغ.\n<@&1014590125029724171>`)
    message.channel.setName("pending")
  }
})

client.on("channelCreate", (channel) => {
    channel.send("نحن نقوم بشراء عملات سويت والت فقط لا غير، سعر العملة 4.7k")
    channel.send("لمعرفة سعر العملات، يرجى كتابة `!سعر (عدد العملات)`\nمثال : !سعر 15")
    channel.send(" تحذير : ممنوع المنشن لأي فرد من الادارة، في حالة استخدام المنشن سيعرضك ذلك للحظر.")
})
client.on("messageCreate", message => {
    const args = message.content.trim().split(/ +/g);
  const cmd = args[0].slice(prefix.length).toLowerCase(); // case INsensitive, without prefix
  if(message.author.id == "1026836649507827752") return;
  

  if (cmd === "done") { 
    if(message.channel.name !== "pending") return;
    message.channel.setName("done")
    

  }
})
client.login("NzA4ODE1NDEwMzkyNDY1NDI4.G7nWkO.lXQ5AIbbyFSAwtiH0wH7wwWBUantS7X75nQz1w")