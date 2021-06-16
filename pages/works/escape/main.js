var MARK = "EscapeChatV1.0"
var firstloaded;
var room;
var href = location.href
var link = href.slice(0, href.lastIndexOf('/'))+'/ws.html?'

var userName = 'FILT'+String(new Date().getTime())+String(parseInt(Math.random()*1000))

var ifr = document.createElement('iframe');
document.body.style.margin = "0"
ifr.hidden = true;
ifr.style.width = "0";
ifr.style.height = "0";
ifr.style.border = "none";

var ifrMain = document.createElement('iframe');
ifrMain.hidden = true;
ifrMain.style.width = window.innerWidth+'px';
ifrMain.style.height = window.innerHeight+'px';
ifrMain.style.border = "none";
ifrMain.style.position = "fixed";
ifrMain.style.top = "0"

document.body.appendChild(ifr)
document.body.appendChild(ifrMain)

var joinInput = $('#join-input')[0]
var joinButton = $('#join-button')[0]
var join = $('#join')[0]

window.onresize = () => {
	ifrMain.style.width = window.innerWidth+'px';
	ifrMain.style.height = window.innerHeight+'px';
	joinInput.style.top = window.innerHeight*0.4+'px';
	joinButton.style.top = window.innerHeight*0.5+'px';
}

window.onresize()

joinInput.onkeydown = (event) => {console.log(event.keyCode); if(event.keyCode==13)joinRoom()}

$("#join").fadeIn(700)

function joinRoom() {
	// let tempRoom = prompt('Room:', room);
	let tempRoom = joinInput.innerText
	if (tempRoom !== null) {
		joinButton.innerText = "Loading..."
		joinInput.readOnly = true
		room = MARK+tempRoom;
		ifr.src = link+room+'#'+userName;
		ifr.onload = () => {
			if (firstloaded) {
				return
			}
			firstloaded = true;
			loop = () => {
				if(ifr.contentWindow.USERCHECKED){
					let users = ifr.contentWindow.onlineUsers;
					let hostOnline = ifr.contentWindow.HOSTONLINE;
					if (!hostOnline) {
						join.hidden = true;
						userName = ifr.contentWindow.SYSTEMNAME;
						ifrMain.src = link+room+'#'+userName;
						ifrMain.hidden = false;
						ifr.srcdoc = null
					} else if (users.length < 4) {
						join.hidden = true;
						for (var i = 0; i < 4; i++) {
							if(users.indexOf(['A','B','C','D'][i])=='-1'){
								userName = ['A','B','C','D'][i]
								ifrMain.src = link+room+'#'+userName
								break
							}
						}
						ifrMain.hidden = false;
						ifr.srcdoc = null
					} else {
						// hadle 
					}
				}else{
					setTimeout(function() {
						loop();
					}, 500);
				}
			}
			loop();
		}
	}
}

function quitRoom() {
	joinButton.innerText = "join"
	joinInput.readOnly = false
}