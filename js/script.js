const boxes = document.querySelectorAll('.box');



const checkBoxes = () => {
    const triggerBootom = window.innerHeight / 5 * 4;
    boxes.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBootom) {
            box.classList.add('show');

        } else {
            box.classList.remove('show');
        }
    })
}

checkBoxes();
window.addEventListener('scroll', checkBoxes)


// change bg color
/*
 const bgColors = ["#442C2E", "#2E3D32", "#3E2F3F", "#2E2E3E", "#3F3D2E", "#2E3F3D"];

boxes.forEach((box) => {
    let num = Math.floor(Math.random() * 6);
    box.style.backgroundColor = bgColors[num]
    console.log(num, "num")
})
*/
