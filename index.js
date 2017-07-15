const Discord = require("discord.js");
const Client = new Discord.Client();
const weather = require("weather-js");
const Wiki = require("wikijs");
const token = "MzMyMTkwNzMxMjIzNjk1MzYw.DD_Y7g.LEZg-fb3tiZ_xTMbkyRokVp4pwI";
var yt = require("./youtube_plugin");
var youtube_plugin = new yt();
var AuthDetails = require("./auth.json");

var prefix = ",";
var mention = "<@332190731223695360>";
var memberCount = Client.users.size;
var servercount = Client.guilds.size;

Client.on("ready", () => {
    var memberCount = Client.users.size;
    var servercount = Client.guilds.size;
    Client.user.setGame(',help | '+ servercount +' servers | '+ memberCount +' members');
    var servers = Client.guilds.array().map(g => g.name).join(',');
    console.log("--------------------------------------");
console.log('[!]Connexion en cours... \n[!]Veuillez Patienter! \n[!]Les évenements sont après ! :)  \n[!]Les préfix actuels:  ' + prefix + "\n[!]Mentions = " + mention + "\n[!]Nombre de membres: " + memberCount + "\n[!]Nombre de serveurs: " + servercount);
});

Client.on('message', message => {
    if(message.content.startsWith(',setnick') && message.author.id === "290937316338302977") {
    message.delete(message.author);
	Client.user.setUsername(message.content.substr(9));
} else if(message.content.startsWith(',Setnick') && message.author.id === "290937316338302977") {
    message.delete(message.author);
	Client.user.setUsername(message.content.substr(9));
} else if (message.content === ",help") {
	let m = " ";
	m += 'Je suis un bot en développement, pour le moment je peux faire ceci : \n\n';
    m += '```diff\nUtile : \n\n';
    m += '+ ,help : Affiche ce message \n';
    m += '+ ,ping : Renvoit un "pong" pour savoir si le bot est en état de marche \n';
    m += '+ ,info : Donne quelques infos (aka infos useless) sur le bot \n';
    m += "+ ,owner : Te dit c'est qui le grand maître ... Au risque de te faire tchiper``` \n";
    m += '```diff\nRecherche : \n\n'
    m += '+ ,weather : Donne la méteo selon la recherche (usage : ,weather ville pays) \n';
    m += '+ ,wiki [recherche] : Recherche une page wikipédia (Béta) \n';
    m += '+ ,yt [recherche] : Recherche une vidéo sur youtube (Béta)``` \n';
    m += '```diff\nLes BG :\n\n';
    m += '+ ,Xinov : Le BG \n';
    m += '+ ,Quenntinne : Un Autre BG \n';
    m += '+ ,Santaro : Encore un autre BG ``` \n';
    m += '```diff\nSpécial :\n\n';
    m += "+ ,tchong : TCHONG !";
    m += '+ ,say : Repéte un message donné (créateur seulement)';
    m += '+ ,setnick : Change le pseudo du bot sur tous les serveurs connectés (2 fois par heure) (créateur seulement) \n';
    m += '+ ,die : Eteinds le bot completement (créateur seulement)``` \n\n';
    m += "```diff\nLes randoms :\n\n";
    m += "+ ,totoro : Un random ``` \n\n";
    m += "```diff\nLes Sous-merdes :\n\n";
    m += "- ,loutre : Une sous-merde ``` \n";
    m += '--------------------------------------------------------------------';
	message.author.sendMessage(m).catch(console.log);
    message.reply("Je t'ai envoyé un mp, si tu ne l'as pas reçu, regarde si tu as activé les mp des membres dans les options discord (Paramètres utilisateur>Privacy and safety>Cocher 'Allow direct messages from server members') !");
} else if (message.content === ",Help") {
	let m = " ";
	m += 'Je suis un bot en développement, pour le moment je peux faire ceci : \n\n';
    m += '```diff\nUtile : \n\n';
    m += '+ ,help : Affiche ce message \n';
    m += '+ ,ping : Renvoit un "pong" pour savoir si le bot est en état de marche \n';
    m += '+ ,info : Donne quelques infos (aka infos useless) sur le bot \n';
    m += "+ ,owner : Te dit c'est qui le grand maître ... Au risque de te faire tchiper``` \n";
    m += '```diff\nRecherche : \n\n'
    m += '+ ,weather : Donne la méteo selon la recherche (usage : ,weather ville pays) \n';
    m += '+ ,wiki [recherche] : Recherche une page wikipédia (Béta) \n';
    m += '+ ,yt [recherche] : Recherche une vidéo sur youtube (Béta)``` \n';
    m += '```diff\nLes BG :\n\n';
    m += '+ ,Xinov : Le BG \n';
    m += '+ ,Quenntinne : Un Autre BG \n';
    m += '+ ,Santaro : Encore un autre BG ``` \n';
    m += '```diff\nSpécial :\n\n';
    m += "+ ,tchong : TCHONG !";
    m += '+ ,say : Repéte un message donné (créateur seulement)';
    m += '+ ,setnick : Change le pseudo du bot sur tous les serveurs connectés (2 fois par heure) (créateur seulement) \n';
    m += '+ ,die : Eteinds le bot completement (créateur seulement)``` \n\n';
    m += "```diff\nLes randoms :\n\n";
    m += "+ ,totoro : Un random ``` \n\n";
    m += "```diff\nLes Sous-merdes :\n\n";
    m += "- ,loutre : Une sous-merde ``` \n";
    m += '--------------------------------------------------------------------';
	message.author.sendMessage(m).catch(console.log);
    message.reply("Je t'ai envoyé un mp, si tu ne l'as pas reçu, regarde si tu as activé les mp des membres dans les options discord (Paramètres utilisateur>Privacy and safety>Cocher 'Allow direct messages from server members') !");
} else if (message.content === ",info") {
    message.delete(message.author);
    var memberCount = Client.users.size;
    var servercount = Client.guilds.size;
	let p = " ";
    p += 'Je suis en compagnie de '+ memberCount +' membres\n';
	p += 'Je suis présent dans '+ servercount +' serveurs\n';
	message.channel.sendMessage(p).catch(console.log); 
} else if (message.content === ",Info") {
    message.delete(message.author);
    var memberCount = Client.users.size;
    var servercount = Client.guilds.size;
	let p = " ";
    p += 'Je suis en compagnie de '+ memberCount +' membres\n';
	p += 'Je suis présent dans '+ servercount +' serveurs\n';
	message.channel.sendMessage(p).catch(console.log); 
} else if (message.content === ",ping") {
    message.reply("Pong ! J'ai pas crash !");
} else if (message.content === ",Ping") {
    message.reply("Pong ! J'ai pas crash !");
} else if (message.content === ",die" && message.author.id === "290937316338302977") {
    message.delete(message.author);
 
    client.destroy( err => {
        console.error( err );
    });
} else if (message.content === ",Die" && message.author.id === "290937316338302977") {
    message.delete(message.author);
 
    client.destroy( err => {
        console.error( err );
    });
} else if (message.content.startsWith(",weather")){
    var location = message.content.substr(8);
    var unit = "C";
    
    try {
        weather.find({search: location, degreeType: unit}, function(err, data) {
            if(err) {
                console.log(Date.now(), "DANGER", "Je ne trouve pas d'informations correspondant à votre recherche" + location);
                message.reply("\n" + "Je ne trouve pas d'informations correspondant à votre recherche" + location);
            } else {
                data = data[0];
               console.log("**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitations.");
               message.reply("\n" + "**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitations.");
            }
        });
    } catch(err) {
        console.log(Date.now(), "ERREUR", "Weather.JS a rencontré une erreur");
        message.reply("Je ne sais pas ce qui vient de se passer :(");
        }
    } else if (message.content.startsWith(",Weather")){
    var location = message.content.substr(8);
    var unit = "C";
    
    try {
        weather.find({search: location, degreeType: unit}, function(err, data) {
            if(err) {
                console.log(Date.now(), "DANGER", "Je ne trouve pas d'informations correspondant à votre recherche" + location);
                message.reply("\n" + "Je ne trouve pas d'informations correspondant à votre recherche" + location);
            } else {
                data = data[0];
               console.log("**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitations.");
               message.reply("\n" + "**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitations.");
            }
        });
    } catch(err) {
        console.log(Date.now(), "ERREUR", "Weather.JS a rencontré une erreur");
        message.reply("Je ne sais pas ce qui vient de se passer :(");
        }
    }
else if (message.content === ",vtfy") {
    message.delete(message.author);
    if (message.author.id === "290937316338302977") {
    message.channel.sendMessage("Va te faire foutre Yorfi !");
}
} else if (message.content === ",Xinov") {
    if(!message.author.bot) {
message.channel.sendMessage("<@290937316338302977> : Ce mec c'est le gars le plus BG d'la planête ! :o");
}
} else if (message.content === ",xinov") {
    if(!message.author.bot) {
    message.channel.sendMessage("<@290937316338302977> : Ce mec c'est le gars le plus BG d'la planête ! :o");
}
} else if (message.content === ",Quenntinne") {
    if(!message.author.bot) {
    message.channel.sendMessage("<@201708053102460928> : Rohlala, ce gars là, t'es obliger de mettre des lunettes anti reflets tellement il brille :O!");
}
} else if (message.content === ",quenntinne") {
    if(!message.author.bot) {
    message.channel.sendMessage("<@201708053102460928> : Rohlala, ce gars là, t'es obliger de mettre des lunettes anti reflets tellement il brille :O!");
}
}
else if (message.content.startsWith(",wiki")){
            if(!message.content.substr(5)) {
                console.log(Date.now(), "DANGER", "Vous devez fournir un terme de recherche");
                message.reply("Vous devez fournir un terme de recherche");
                return;
            }
            var wiki = new Wiki.default();
            wiki.search(message.content.substr(5)).then(function(data) {
                if(data.results.length==0) {
                    console.log(Date.now(), "DANGER","Wikipedia ne trouve pas ce que vous avez demandé : " + message.content.substr(5));
                    message.reply("Je ne trouve rien qui correspond à ce que vous cherchez ...");
                    return;
                }
                wiki.page(data.results[0]).then(function(page) {
                    page.summary().then(function(summary) {
                        if(summary.indexOf(" may refer to:") > -1 || summary.indexOf(" may stand for:") > -1) {
                            var options = summary.split("\n").slice(1);
                            var info = "Selectionez une option parmis celles-ci :";
                            for(var i=0; i<options.length; i++) {
                                info += "\n\t" + i + ") " + options[i];
                            }
                            message.reply(info);
                            selectMenu(message.channel, message.author.id, function(i) {
                                commands.wiki.process(Client, message, options[i].substring(0, options[i].indexOf(",")));
                            }, options.length-1);
                        } else {
                            var sumText = summary.split("\n");
                            var count = 0;
                            var continuation = function() {
                                var paragraph = sumText.shift();
                                if(paragraph && count<3) {
                                    count++;
                                    message.reply(message.channel, paragraph, continuation);
                                }
                            };
                            message.reply("**Trouvé " + page.raw.fullurl + "**", continuation);
                        }
                    });
                });
            }, function(err) {
                console.log(Date.now(), "ERREUR","Impossible de se connecter à Wikipédia");
                message.reply("J'ai rencontré un problème ...");
            });
        
} else if (message.content.startsWith(",Wiki")){
            if(!message.content.substr(5)) {
                console.log(Date.now(), "DANGER", "Vous devez fournir un terme de recherche");
                message.reply("Vous devez fournir un terme de recherche");
                return;
            }
            var wiki = new Wiki.default();
            wiki.search(message.content.substr(5)).then(function(data) {
                if(data.results.length==0) {
                    console.log(Date.now(), "DANGER","Wikipedia ne trouve pas ce que vous avez demandé : " + message.content.substr(5));
                    message.reply("Je ne trouve rien qui correspond à ce que vous cherchez ...");
                    return;
                }
                wiki.page(data.results[0]).then(function(page) {
                    page.summary().then(function(summary) {
                        if(summary.indexOf(" may refer to:") > -1 || summary.indexOf(" may stand for:") > -1) {
                            var options = summary.split("\n").slice(1);
                            var info = "Selectionez une option parmis celles-ci :";
                            for(var i=0; i<options.length; i++) {
                                info += "\n\t" + i + ") " + options[i];
                            }
                            message.reply(info);
                            selectMenu(message.channel, message.author.id, function(i) {
                                commands.wiki.process(Client, message, options[i].substring(0, options[i].indexOf(",")));
                            }, options.length-1);
                        } else {
                            var sumText = summary.split("\n");
                            var count = 0;
                            var continuation = function() {
                                var paragraph = sumText.shift();
                                if(paragraph && count<3) {
                                    count++;
                                    message.reply(message.channel, paragraph, continuation);
                                }
                            };
                            message.reply("**Trouvé " + page.raw.fullurl + "**", continuation);
                        }
                    });
                });
            }, function(err) {
                console.log(Date.now(), "ERREUR","Impossible de se connecter à Wikipédia");
                message.reply("J'ai rencontré un problème ...");
            });
        
} else if (message.content.startsWith(',yt')){
youtube_plugin.respond(message.content, message.channel , Client);
} else if (message.content === ",Santaro") {
    if(!message.author.bot) {
    message.channel.sendMessage("<@281109906298241024> : Ah ouais ... Nan mais khey ... Lui, tu peux pas le décrire tellement il est lumineux !");
}
} else if (message.content === ",santaro") {
    if(!message.author.bot) {
    message.channel.sendMessage("<@281109906298241024> : Ah ouais ... Nan mais khey ... Lui, tu peux pas le décrire tellement il est lumineux !");
}
} else if (message.content === ",Asurix" && message.author.id === "205427219093258240") {
    message.channel.sendMessage("Si t'as pas compris qui je suis, tu vas là dessus : https://elicodex.wordpress.com/2016/01/31/cest-quoi-etre-bigenre/");
} else if (message.content === ",asurix" && message.author.id === "205427219093258240") {
    message.channel.sendMessage("Si t'as pas compris qui je suis, tu vas là dessus : https://elicodex.wordpress.com/2016/01/31/cest-quoi-etre-bigenre/");
} else if (message.content.startsWith(',Yt')){
youtube_plugin.respond(message.content, message.channel , Client);
} else if (message.content.startsWith(',YT')){
youtube_plugin.respond(message.content, message.channel , Client);
} else if (message.content === ",owner") {
    if (message.author.id === "290937316338302977") {
            message.channel.sendMessage("Tu connais pas le grand maître ?\nOh ! Mais, c'est vous ! Je suis profondement désolé !");
    } else {
    message.reply("Tu connais pas le grand maître ?\n***Tchip***\nC'est <@290937316338302977> bien sûr !");
}
} else if (message.content === ",Owner") {
    if (message.author.id === "290937316338302977") {
            message.channel.sendMessage("Tu connais pas le grand maître ?\nOh ! Mais, c'est vous ! Je suis profondement désolé !");
    } else {
    message.reply("Tu connais pas le grand maître ?\n***Tchip***\nC'est <@290937316338302977> bien sûr !");
}
} else if (message.content.startsWith(',say')){
    if (message.author.id === "290937316338302977") {
    message.delete(message.author);
    var reply2 = message.content.substr(4);
    message.channel.sendMessage(reply2);
}
} else if (message.content.startsWith(',Say')){
    if (message.author.id === "290937316338302977") {
    message.delete(message.author);
    var reply2 = message.content.substr(4);
    message.channel.sendMessage(reply2);
}
} else if (message.content === ",loutre") {
    if(!message.author.bot) {
    message.channel.sendMessage("<@193869956214030336> : sse nez ho gramar nazy ki kasse lé kouy !!!!");
}
} else if (message.content === ",Loutre") {
    if(!message.author.bot) {
    message.channel.sendMessage("<@193869956214030336> : sse nez ho gramar nazy ki kasse lé kouy !!!!");
}
} else if (message.content === ",totoro") {
    if(!message.author.bot) {
    message.channel.sendMessage("<@236134926385283073> :\nTu mélanges\nET PAF\nÇA FAIT DES CHOCAPIC");
}
} else if (message.content === ",Totoro") {
    if(!message.author.bot) {
    message.channel.sendMessage("<@236134926385283073> :\nTu mélanges\nET PAF\nÇA FAIT DES CHOCAPIC");
}
} else if (message.content === ",tchong") {
    if(!message.author.bot) {
    message.channel.sendMessage("TCHONG\nSA GROSSE MERE LA **** AVEC SA GROSSE ****** QUI S'AFFICHE COMME CA");
}
} else if (message.content === ",Tchong") {
    if(!message.author.bot) {
    message.channel.sendMessage("TCHONG\nSA GROSSE MERE LA **** AVEC SA GROSSE ****** QUI S'AFFICHE COMME CA");
}
}
});

Client.login(token)