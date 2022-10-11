const notifications = document.querySelectorAll(".user-info");
const dots = document.querySelectorAll(".user-info .dot");
const markSwitch = document.querySelector(".mark-all");



markSwitch.addEventListener("click", () => {
    notifications.forEach(notification => {
        if (notification.classList.contains("active")) {
            notification.classList.remove("active");
            dots.forEach(dot => {
                dot.style.display = "none";
            })
            markSwitch.innerText = "Mark all as unread";
        }

        else if(!notification.classList.contains("active")) {
            notification.classList.add("active");
            dots.forEach(dot => {
                dot.style.display = "inline-block";
            })
            markSwitch.innerText = "Mark all as read";
        }
    })
});