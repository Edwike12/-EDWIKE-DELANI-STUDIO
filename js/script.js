
    
  const Name = {
    Name: function() {
      return this.Name + " " + this.Message;
    }
  }
  const Email = {
    Email =""
  }
  const Message = {
    Message:"  we have received your message.Thank you for contacting us",
  }
   
  document.getElementById("demo").innerHTML = form.Name.call(); 



 

