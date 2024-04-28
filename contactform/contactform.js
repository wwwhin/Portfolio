var name1 = document.getElementById('name');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var message = document.getElementById('message');
var form = document.getElementById('form');
var sub = document.getElementById('sub');
var error = document.getElementById('error');



sub.addEventListener('click', (e)=>{
  e.preventDefault()
  if(name1.value.length > 3){
    if(email.value.length > 7){
      if(subject.value.length > 4){
        if(message.value.length > 9){
          form.onsubmit()
          error.innerHTML = ""
        }else{
          error.innerHTML = 'Message must contain 10 digits'
        }
      }else{
        error.innerHTML = 'Subject must contain at least 5 digits'
      }
    }else{
      error.innerHTML = 'Email must contain at least 8 digits'
    }
  }else{
    error.innerHTML = 'Name must contain at least 4 digits'
  }
})



