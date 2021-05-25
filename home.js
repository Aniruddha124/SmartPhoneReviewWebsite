
function search(){
    
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("phones_array");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        document.getElementById("search_results").style.display = "block";
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            document.getElementById("phones_array").style.display = "block";
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
        if(filter === ""){
            li[i].style.display = "none";
            document.getElementById("search_results").style.display = "none";
        }
    }
}
function open_search(){
    document.getElementById("overlay").style.width = "100%";
}

function close_search() {
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("search_results").style.display = "none";
}