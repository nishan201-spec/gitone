let inputText = document.querySelector('#inputText')

let submitBtn = document.querySelector('#submitBtn')

let seeText = document.querySelector('.seeText');
seeText.style.display = 'none';

const copyFuntion = () => {
    const imgFile = inputText.files[0];
    seeText.style.display = 'block';


    if(!imgFile){

        submitBtn.textContent = 'please select image File.';
        return;
    }

    Tesseract.recognize(
        imgFile,
        'eng'
    ).then(({data}) => {
        seeText.textContent = data.text;
    }).catch((error) => {
        console.error('Error', error);
        seeText.textContent = 'error'
    })
}

submitBtn.addEventListener('click', () => {
    copyFuntion();
})