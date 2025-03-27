

//////////////////////////////////////////////////////////////////////
const comments = [
    {
        name: "joe", 
        text: "joe is cool"
    }, 
    {
        name: "sam",
        text: "i am sam"
    },
    {
        name: "laura",
        text: "hihihaha"
    }
]

function displayComment(comments){
    for (comment of comments) {
        document.querySelector("#comment-section").innerHTML += `
        <p>${comment.name} says ${comment.text}</p>
        `;
    }
}

displayComment(comments);

function getFormData(e) {
    e.preventDefault();  //Stop page from refreshing
    const nameForm = document.querySelector("#name").value;
    const textForm = document.querySelector("#text").value;
    const comment = {
    name: nameForm,
    text: textForm
    }//just to text if its working
    displayNewComment(comment);
}


function displayNewComment(comment){
    document.querySelector("#comment-section").innerHTML += `
    <p>${comment.name} says ${comment.text}</p>
    `;
}

const btn = document.querySelector("button");
btn.addEventListener("click", getFormData)

