//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : CypherX
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972

//----------------------[ CYPHER-X ]----------------------//

const fs = require('fs')
//File System module - because even bots need to read and write💁‍♂️
const { color } = require('./lib/color')
//Colouring console because plain text is quite boring😑
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAE1QslowJMmw8gQAACQJAAAKAAAAY3JlZHMuanNvbq1V2Y6jRhT9l3pta8y+WGopbLYBY7y0FxzlgaXAZVZDAcYjP+Uj8pCnfEbyNZGSD4lwd2cmmklPRwpPRVHce+6955z6CLIcVdCEHRh9BEWJGhfDfom7AoIRkOswhCUYgMDFLhiBTt2uOmXDNWruEHU9XOnnGTVs1CbStEum2LOVU8Sw3jRZ+whuA1DUXoL8NwKeV4WJ95q8apC7lY5oujfRQc*ZtTPTapJT6N0i1ErfO0XVI7j1EV1UoizSiiNMYekmJuwWLirfB9+ctYaUX2XLsbcHeq5WrJ8s*FDa0BczLKHsP6W0Z2uiGVvvg++fGcOupNOG85e2dnYeFjHNk3Gzo9rZfOvk6wR5c+PBuizbZ*gVijIY6AHMMMLdu*suzdLadCbDU+ubdlJKR+1y4sPpbNLM60xMg4VD+KmIVS7O3wd8yw*3eWFbl3JSRl5kr8uGsQ6brNo70vmMGWPO6poVO*CJ+Rz4onzlSvxf+n6ewfYID3a89WjS0k8IT4SLcG3taIWXvqYlBatLluPRFPM++K7QkmN97e3lgtProPHUMNgFfhZNZSs55HZllva+IhdVKnyC7+K6fJPcSbYXiNmTaDc8E8MZUsLhUrPn6WQvnWqbI3z1YcdfbbKbaOaC56hpV+TXzFked9oUykZOXCfe1jXEdtpSl70RrFGhRo*3imLY6QEYkbcBKGGEKly6GOVZv0fRxAC4QbOGfgnxvb0AHSc8uaT1i1tkq8WwIFTu4lj+Tt88BJ2abOcHRQpPBlOn0iMYgKLMfVhVMJiiCudlZ8GqciNYgdH390n1RZcwzTE0UABGQKRogiQYguUE4bvqQ3t0ceUWxYcMYjAAYZmnFgQjXNZwAO4*MApDcmNO4GieHqsSp7EiJTC0IIxlVmF5sS8xfU76hFJYYTctwIjkGZ7lKJYWb4P*BwctEYJC0aQgUzJPSwxFaLJMiGNVpcc0zdFv42DI*wsHz9KkSDAUQ3CErKoSS*CMyGsUTRKsqkjMN3BQtx8GIIMX*KynngU0OQAhKiu8yeoiyd3gVWyvH13fz+sMr7vMV*oFLMHos22IMcqiqq+sztzSP6IGKn0dYBS6SQX*Jh4sYfBay4uZKnnQ64FTpoylORPQY+8DfdGbkch82Z7keTIiS7McxYkCy4hif7DfH4DM7WOBP3*7SdpJ+vr3X3+2pJlu*vHjL32PXtD3yQKIXZRUYAQUiy8ulaBoxjUqKm0ykZxIUiIJfKr2Vc3PahEv4nKRrtrzPm6PhOAn1dk7bpeh7Z2FJ1hE82Y7FMbUPqCix68EASNgbJzCOxWukljmnptXsqkf0ofCO8YL2No7q92cAy70NqJuBMNmzNqmTFPGepZqpqBvxyqUh9Fw2QhPTgA38Ii3xHwm9dIfgAA2yIf*SDan5mePqpf7dsLI00NiOLZtlR0UWzP2RE5i6VXCoZWmzU*FTNgaLjZNc6Jtq*WV4bqhcfB89YoEfvMQoyK46gTvSi8+c*e55OV+QS8OgO6vIYJ3u36ZyDfn+gy8px9xG3wW4+UC+BcTlUM*3Khs7JsJa+nBYmp4ZspsN9NryjUafXZUjwyHcpDQQQ5uvQ6KxMVhXqa9rWdBmd9pU+Z1z2c9C*M3kimyrr9WnrgVlj5p5Gs2xD+fWpR5MXWrIxiBxS5m5Z7vnVQUa+ziV8UB6f64Hbj9BVBLAQIUAxQAAAgIAE1QslowJMmw8gQAACQJAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAABoFAAAAAA==' 
// You know the drill. Put your CypherX session id here. Should look like: XPLOADER-BOT:~ (don't forget that, it's crucial!)

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || '亗AWAIS๛MALIKメ' 
// Pick a name for the bot. Default is "CypherX" — but who doesn’t love a cool bot name?

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '923010405688' 
// Your personal contact number. If you want to call Tylor, this is the number. 👀

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || '亗AWAIS๛MALIKメ' 
// Set your name, currently it's the mastermind's. The one and only... Tylor. (Don't ask how I got here, it's a mystery.)

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "亗AWAIS๛MALIKメ" 
// Time to decide the name for your sticker pack. This will appear every time you create a sticker. "Cypher" is the default because... well, why not?

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "亗AWAIS๛MALIKメ" 
// Who's the artist behind those epic stickers? You, of course! Unless you're just using the default name "X" – mystery vibes!

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
// The bot is time-traveling. Set the timezone correctly. Trust us, you don't want the bot to get confused. 🕒

//--------------[ POSTGRES DATABASE ]----------------//

global.postgresqls = process.env.DATABASE_URL || "";
// Your database URL. If you're using panel, no need to fill, if you're using Heroku, this will be automatically filled. Let the magic happen!

//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg---"
// Where does the journey end? Maybe an Instagram link? Or WhatsApp link🤔 Or maybe just a placeholder. Who knows? 👀

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "©CypherX is on fire!🔥"
// Add a watermark finished tasks because... every masterpiece needs a signature.

//---------------------[ REPLIES ]-----------------------//
global.mess = { 
  done: '✅ *Mission Accomplished!* All systems go, CypherX finished the task!',
  success: '🎉 *BOOM! Success!* CypherX is too cool for this world. We did it!',
  owner: '🚫 *Hold up!* This command is for the big boss only. You’re not the boss of me!',
  group: '👥 *Join the club!* This feature is exclusive to group chats!',
  admin: '🔒 *Admin powers required!* Make me an admin, and I’ll unlock this magic for you.',
  notadmin: '⚠️ *Not Quite There Yet!* You gotta be the admin to wield this feature. Better start begging!',
//new
  error: '🤖 *Oopsie!* Something went wrong. Maybe try again? Or blame the developer. Your call!',
  wait: '⏳ *Hold your horses!* I’m working on it... (No, seriously, I’m not slacking off.)',
  nolink: '🔗 *Link not found!* Did you forget to include it, or are you just testing me?',
  notext: '🤔 *No query detected!* Did you forget to include it, or are you just testing me?',
  ban: '🚨 *Banned!* You’ve been banished to the shadow realm. (Don’t worry, it’s not permanent... probably.)',
  unban: '🎈 *Unbanned!* Welcome back! We missed you... kind of.'
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! Or I’ll send CypherX after you... 😈 */

//😹😹🙆‍♂️
// botz = m (Not to be confused with 'The bot'... he's cooler.)
// isOwner = 🤔 (But only on special days... we keep it mysterious)
// isCypherAdmin = 🗿 (Admin powers are granted by CypherX, no exceptions!)


//--------------------[ WATCHER ]-----------------------//
// Who’s watching the watchers? 🤔
// Let’s keep track of any changes like a hawk in a top hat. 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red')) 
  delete require.cache[file]
  require(file)
})

//----------------------[ CYPHER-X ]----------------------//
// CypherX is like a cat. It might ignore you, but it knows what you’re up to. 🐱
// It only responds when it feels like it. It’s the true master of mystery.
// Please proceed with caution. Our code doesn’t bite, but it might give you an awkward look.
// Tylor? If you’ve found this, you’ve unlocked a secret... but only if you truly understand it.
