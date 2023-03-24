const backgrounds = ['orange', 'yellowgreen', 'gray', 'darkgreen', 'pink']
const images = ['https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg', 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=', 'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg', 'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg', 'https://gratisography.com/wp-content/uploads/2023/02/gratisography-colorful-kittenfree-stock-photo-800x525.jpg']


const container1 = document.querySelector('.colorsContainer')
const container2 = document.querySelector('.backgroundsContainer')
const upButton = document.querySelector ('.btn1')
const downButton = document.querySelector ('.btn2')



let i=0;
let b=0;

container1.style.backgroundColor = backgrounds[b];
container2.style.backgroundImage = "url("+images[i]+")";

upButton.addEventListener ('click', () =>  clickUp (i,b))
downButton.addEventListener ('click', () => clickDown (i,b))


function clickUp() {
    if (i==(images.length-1)) {i=0}
    if (b==(backgrounds.length-1)) {b=0}
    b++;
    i++;
    container1.style.backgroundColor = backgrounds[b]; 
    container2.style.backgroundImage = "url("+images[i]+")";
}

function clickDown (){
    if (i==0) {i=(images.length)}
    if (b==0) {b=(backgrounds.length)};
    b--;
    i--;
    container1.style.backgroundColor = backgrounds[b];   
    container2.style.backgroundImage = "url("+images[i]+")";
}