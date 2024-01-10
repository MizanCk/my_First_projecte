function myFunction() {
    var x = document.querySelector(".jsDropdown");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 
function myFunction2() {
    var x = document.querySelector(".jsDropdown2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 
function toggleModal() {
    var x = document.querySelector(".jsDropdown3");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 
function toggleModal4() {
    var x = document.querySelector(".jsDropdown4");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 
function toggleModal5() {
    var x = document.querySelector(".jsDropdown5");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 

    const x = document.getElementsByTagName('BODY')[0] // Select body tag because of disable scroll when modal is active
    const modal = document.getElementById('modal') // modal
    const modalBtn = document.getElementById('modal-button') // launch modal button
    const modalClose = document.getElementsByClassName('modal-close') // close modal button

    // Open modal
    modalBtn.onclick = function () {
            modal.style.display = "flex"; // Show modal
            x.style.overflow = "hidden"; //Disable scroll on body
    }

    // Select and trigger all close buttons
    for (var i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener('click', function () {
            modal.style.display = "none"; // Hide modal
            x.style.overflow = "auto"; // Active scroll on body
        })
    }

    // Close modal when click away from modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Hide modal
            x.style.overflow = "auto"; // Active scroll on body
        }
    }





    const modal1 = document.getElementById('modal1') // modal
    const modalBtn1 = document.getElementById('modal-button1') // launch modal button
    const modalClose1 = document.getElementsByClassName('modal-close1') // close modal button

    // Open modal
    modalBtn1.onclick = function () {
            modal1.style.display = "flex"; // Show modal
            x.style.overflow = "hidden"; //Disable scroll on body
    }

    // Select and trigger all close buttons
    for (var i = 0; i < modalClose1.length; i++) {
        modalClose1[i].addEventListener('click', function () {
            modal1.style.display = "none"; // Hide modal
            x.style.overflow = "auto"; // Active scroll on body
        })
    }

    // Close modal when click away from modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal2.style.display = "none"; // Hide modal
            x.style.overflow = "auto"; // Active scroll on body
        }
    }






    const modal2 = document.getElementById('modal2') // modal
    const modalBtn2 = document.getElementById('modal-button2') // launch modal button
    const modalClose2 = document.getElementsByClassName('modal-close2') // close modal button

    // Open modal
    modalBtn2.onclick = function () {
            modal2.style.display = "flex"; // Show modal
            x.style.overflow = "hidden"; //Disable scroll on body
    }

    // Select and trigger all close buttons
    for (var i = 0; i < modalClose2.length; i++) {
        modalClose2[i].addEventListener('click', function () {
            modal2.style.display = "none"; // Hide modal
            x.style.overflow = "auto"; // Active scroll on body
        })
    }

    // Close modal when click away from modal
    window.onclick = function (event) {
        if (event.target == modal2) {
            modal2.style.display = "none"; // Hide modal
            x.style.overflow = "auto"; // Active scroll on body
        }
    }