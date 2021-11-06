$(document).ready(function() {
    // $(".clickable").click(function() {
    //   $("image").toggle();
    //   $("p").toggle();
    // });

  
    
  });
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
   
  var element=document.getElementById("design");
  var listener=element.addEventListener('click',function(event){   

  }); 

  document.getElementById("demo").innerHTML = form.Name.call();

