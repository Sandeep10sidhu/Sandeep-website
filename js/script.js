
const firebaseConfig = {
apiKey: "AIzaSyBVKNSNhlmbdz_G6mK_VpGHOyW0H2m8O4A",
authDomain: "form-1c188.firebaseapp.com",
databaseURL: "https://form-1c188-default-rtdb.firebaseio.com",
projectId: "form-1c188",
storageBucket: "form-1c188.appspot.com",
messagingSenderId: "479488609814",
appId: "1:479488609814:web:5b530f733932a099efaf37"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var FormDB = firebase.database().ref("Form");

document.getElementById("feedback-form").addEventListener('submit', submitform);


function submitform(e){
    e.preventDefault();

    var name = getElementval("name");
    var emailid = getElementval("email");
    var msgContent = getElementval("message");

saveMessages(name, emailid, msgContent);
}

const saveMessages = (name, emailid, msgContent) =>{
    var newForm = FormDB.push();
    
    newForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    })


};

const getElementval = (id) => {
    return document.getElementById(id).value;
};