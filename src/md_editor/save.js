const Save_Data = () => {
        alert("Document Data Stored. Thank You");
        localStorage.setItem("input", document.getElementsByClassName("left-side")[0].value);
        console.log(document.getElementsByClassName("left-side")[0].innerHTML);
}


export default Save_Data;