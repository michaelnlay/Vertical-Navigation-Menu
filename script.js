

// const sections = document.querySelectorAll('section');
const sections = document.querySelectorAll('section');
// console.log(sections);


// Highlight Nav item on scroll
window.addEventListener('scroll', () => {
    //initially let current to be empty, current means the value in px as we scroll
    // let current = ""; // this would not keep the first page highlight after scrolling back all the way up, to fix do...
    let current = "";
    //console.log(pageYOffset); //it returns the value in px as we scroll from the top, value increase as its scroll down, decrease as its scroll up

    //loop through all sections
    sections.forEach(section => {
        //need to know the section top , how far it is from the top to the section
        const sectionTop = section.offsetTop; //offsetTop returns top position (in px) relative to parent
        // console.log(sectionTop); //this will show amount of pixels in each section (nav=59, then 633, 1207, 1781 and 2355 for each section)

        //when scrolling to the section, we want to highlight Nav item for that section
        //first, we want to get that section height
        const sectionHeight = section.clientHeight; //this measure the inner height of an element in px (it = Visible content + padding) 
        // console.log(sectionHeight);

        //if (pageYOffset > sectionTop){//<=this method would not provide the last section ID
        if (pageYOffset >=  (sectionTop - sectionHeight /3)){ //can use pixel values instead of sectionHeight / 3
      current = section.getAttribute('id');
            
         } //this can't be use for snap scrolling effect

        //check if the pageYoffsett height value in px the same as innerheight
        // if(pageYOffset >=sectionHeight){
        //     current=section.getAttribute('id');
        // }
    })
    // console.log(current);


    // const navLi = document.querySelectorAll('nav .container ul li');
    const navLi = document.querySelectorAll('.nav-link');
    //=========First, need to remove the active class first before adding new class to the li=================
    navLi.forEach(li =>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            // li.className += ' active'; or we can try
            li.classList.add('active');
        }
    })
})