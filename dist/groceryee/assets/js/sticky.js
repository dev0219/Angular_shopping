const $realSticky = document.querySelector("header");
const $fakeSticky = document.querySelector(".fake-header");

const stickyHeader = () => function() {
    const sr1 = $fakeSticky.getBoundingClientRect();
    const sr2 = $realSticky.getBoundingClientRect();

    if (sr1.top > 0) {
        $realSticky.classList.remove("sticky");
        $fakeSticky.style.top = 0;
    } else {
        $realSticky.classList.add("sticky");
        $fakeSticky.style.top = `-${sr2.height + 1}px`;
    }
};

window.addEventListener("scroll", _.debounce(stickyHeader(), 15));