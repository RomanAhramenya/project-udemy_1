document.addEventListener('DOMContentLoaded',()=>{
const Tabs = document.querySelectorAll('.tabheader__item'),
        TabsContent = document.querySelectorAll('.tabcontent'),
      TabsParents = document.querySelector(".tabheader__items");

      function removeContent(){
          TabsContent.forEach(item=>{
              item.style.display = "none";
          });

          Tabs.forEach(item=>{
            item.classList.remove('tabheader__item_active');
          });
      }

      function addContent(i=0){
          TabsContent[i].style.display = "block";
          Tabs[i].classList.add('tabheader__item_active');
      }
      TabsParents.addEventListener("click",(e)=>{
        if(e.target && e.target.classList.contains('tabheader__item')){
            Tabs.forEach((item,i)=>{
                if(e.target == item){
                    removeContent();
                    addContent(i);
                    console.log(e.target);
                    console.log(item);
                }
            });
        }
      });

      removeContent();
      addContent();

});
