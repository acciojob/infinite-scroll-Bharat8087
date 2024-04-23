//your code here!
document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("infi-list");
    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = "List Item " + i;
        list.appendChild(listItem);
    }

    function addMoreItems() {
        const items = list.querySelectorAll("li");
        const lastItem = items[items.length - 1];
        const rect = lastItem.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight) {
            for (let i = 1; i <= 2; i++) {
                const newItem = document.createElement("li");
                newItem.textContent = "List Item " + (items.length + i);
                list.appendChild(newItem);
            }
        }
    }

    window.addEventListener("scroll", addMoreItems);
});


