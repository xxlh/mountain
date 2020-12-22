import ready from "document-ready"

export let init = () => {
    ready(()=>{
    })
}

export let complete = () => {
    ready(()=>{
        // document.getElementById("loading").style.display = 'none';
        // document.getElementById("content").style.display = 'block';
        document.getElementById("musicicon").style.display = 'block';
    })
}

export let update = (p, delay = 1) => {
    ready(()=>{
        if (p >= 100 && delay > 0) {
            setTimeout(() => {
                complete();
            }, delay);
        }
    })
}

export default {
    init,
    complete,
    update
}