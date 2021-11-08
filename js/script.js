
     document.getElementById("design_showing").addEventListener(
       "click",
        function () {
          //   document.getElementById("design_details").style.display = "block";
          if (
            document.getElementById("design_details").style.display == "none"
          ) {
            document.getElementById("design_details").style.display = "block";
         } else {
          document.getElementById("design_details").style.display = "none";
         }
        },
        false
      ); 
      document.getElementById("development_showing").addEventListener(
       "click",
        function () {
          //   document.getElementById("design_details").style.display = "block";
          if (
            document.getElementById("development_details").style.display == "none"
          ) {
            document.getElementById("development_details").style.display = "block";
         } else {
          document.getElementById("development_details").style.display = "none";
         }
        },
        false
      ); 
      document.getElementById("product_showing").addEventListener(
       "click",
        function () {
          //   document.getElementById("design_details").style.display = "block";
          if (
            document.getElementById("product_details").style.display == "none"
          ) {
            document.getElementById("product_details").style.display = "block";
         } else {
          document.getElementById("product_details").style.display = "none";
         }
        },
        false
      );
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



 

