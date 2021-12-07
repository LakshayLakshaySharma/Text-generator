const text = [
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam viverra orci sagittis eu volutpat odio. Enim ut tellus elementum sagittis vitae. Gravida neque convallis a cras semper auctor. Amet facilisis magna etiam tempor orci eu lobortis elementum. Vel orci porta non pulvinar neque. Non consectetur a erat nam at lectus. Lacinia at quis risus sed vulputate odio ut enim. Orci eu lobortis elementum nibh tellus molestie nunc. Volutpat odio facilisis mauris sit amet massa vitae. Adipiscing diam donec adipiscing tristique risus. Dictum non consectetur a erat nam at. Quis viverra nibh cras pulvinar mattis. Proin libero nunc consequat interdum varius sit. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Ut porttitor leo a diam.",
   
   "Scelerisque eu ultrices vitae auctor eu augue ut lectus. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Amet est placerat in egestas erat imperdiet. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Nec feugiat nisl pretium fusce id velit. Neque vitae tempus quam pellentesque nec nam aliquam. Diam maecenas ultricies mi eget mauris pharetra. Ornare arcu dui vivamus arcu felis bibendum. Viverra justo nec ultrices dui sapien. At tempor commodo ullamcorper a.",
   
   "Cursus in hac habitasse platea. Ut sem viverra aliquet eget sit amet tellus cras. Amet dictum sit amet justo donec enim. Sed turpis tincidunt id aliquet. Nunc sed id semper risus. Nulla at volutpat diam ut venenatis. Pretium nibh ipsum consequat nisl. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tortor dignissim convallis aenean et tortor at risus. Mi sit amet mauris commodo quis imperdiet. Felis eget nunc lobortis mattis. Augue ut lectus arcu bibendum at varius vel pharetra. Et tortor consequat id porta nibh venenatis cras sed. Cras pulvinar mattis nunc sed blandit libero volutpat. Cursus metus aliquam eleifend mi. Vel risus commodo viverra maecenas accumsan. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Quisque non tellus orci ac auctor augue mauris augue. Arcu vitae elementum curabitur vitae.",
   
   "Feugiat pretium nibh ipsum consequat. Congue eu consequat ac felis. Pretium viverra suspendisse potenti nullam ac tortor vitae. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. A pellentesque sit amet porttitor eget dolor. Lacus laoreet non curabitur gravida arcu ac tortor. Augue interdum velit euismod in pellentesque massa placerat duis. Mauris commodo quis imperdiet massa tincidunt. Sagittis eu volutpat odio facilisis. Sed cras ornare arcu dui. Lectus nulla at volutpat diam ut venenatis tellus.",
   
   "Diam phasellus vestibulum lorem sed risus. Id aliquet risus feugiat in ante metus dictum at tempor. Faucibus a pellentesque sit amet porttitor eget. Pretium viverra suspendisse potenti nullam ac tortor. Dolor sed viverra ipsum nunc aliquet. Eget nulla facilisi etiam dignissim. Varius morbi enim nunc faucibus a pellentesque sit amet. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Lacus viverra vitae congue eu consequat ac felis donec et. Aliquam sem et tortor consequat. Eu sem integer vitae justo eget magna fermentum. Neque vitae tempus quam pellentesque nec nam.",
   ];
   
   const form = document.querySelector(".form");
   const amount = document.getElementById("amount");
   const article = document.querySelector(".article");
   
   
   form.addEventListener("submit", function(e){
     e.preventDefault();
   
     const value = parseInt(amount.value);
     const random = Math.floor(Math.random() * text.length);
   
     if(isNaN(value) || value < 0 || value > 5){
       article.innerHTML = `<p class = "article"> ${text[random]}</p>`
     } else {
       let tempText = text.slice(0, value);
       tempText = tempText.map(function(item){
         return `<p class = "article"> ${item}</p>`;
       }).join("");
       article.innerHTML = tempText;
     }
   })
   
   