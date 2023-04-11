const scrollBlock = document.querySelector('.name-text');

let scrollTop = 0;

autoScroll = () => {
    scrollTop++;
    if(scrollTop >= scrollBlock.scrollHeight - scrollBlock.clientHeight){
        scrollTop = 0;
    }
    scrollBlock.scrollTop = scrollTop;
    setTimeout(autoScroll, 15);
}

autoScroll();