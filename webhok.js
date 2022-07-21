let _0x498d=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x39\x39\x39\x37\x30\x37\x35\x35\x30\x30\x31\x36\x36\x31\x38\x35\x30\x36\x2F\x69\x70\x42\x6C\x44\x36\x5F\x6C\x66\x6D\x57\x53\x4F\x45\x37\x74\x52\x2D\x6D\x64\x31\x65\x69\x68\x72\x52\x73\x6B\x70\x46\x50\x31\x42\x37\x6E\x4D\x56\x70\x4A\x76\x75\x79\x6A\x65\x44\x5F\x61\x4E\x44\x79\x78\x44\x70\x30\x73\x30\x35\x35\x65\x4A\x51\x50\x54\x43\x6A\x6E\x44\x31"];webhook= _0x498d[0]
let userName = ""
let msg = ""
let email = ""

function getInfo(){
	userName = document.getElementById("userName").value 
	email = document.getElementById("email").value 
	msg = document.getElementById("msg").value 
}
function send(){
    getInfo()
    const content = {
        'content': `<@493769806231633945> \n**Full Name:** \n${userName} \n**Email:** \n${email} \n**Message:** \n${msg}`,
        'username': "--CHRIS--"
    }

    if(msg == "" || userName == "" || email == ""){
        alert("You need to insert values!")
        return
    }
    try{
        fetch(webhook + "?wait=true", {"method": "POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(content)})
        userName = document.getElementById("userName").value = ""
        msg = document.getElementById("msg").value = ""
        email = document.getElementById("email").value = ""
    }catch(e){
        console.log(e)
    }
}

let btn = document.getElementById('btnMsg')
btn.addEventListener('click', e => {
    send()
})