
//selectors
const genBtn = document.querySelector('.genButton');
const properImage = document.getElementById('properImage');


//event listeners
genBtn.addEventListener('click', generateImage);


//functions
function generateNewKey(){
    let temp = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0 ; i < 5 ; i++){
        temp += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return temp;
}

function generateImage(){
    let key = generateNewKey();
    
    let image = new Image();
      image.onload = function() {
        if (this.width == 161) {
            genBtn.disabled = true;
            generateImage();
        } else {
            properImage.src=`https://i.imgur.com/${key}.png`;
            genBtn.disabled = false;
        }
      };
      image.src = `https://i.imgur.com/${key}.png`;

}












