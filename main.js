
const data = fetch('https://jsonplaceholder.org/posts?fbclid=IwAR1ZmpZTK7tPv3xfKWhLKtnIKiyHasMH4LWsZDR6jsjpJ1a94jBOKb8OZyY')
data.then(function(res) {
    console.log(res)
    return res.json()
}).then(function(res) {
    console.log(res)
    let container = document.getElementsByClassName('container')[0];
    let childs;
    let bacham = "...";
    var ShowAll = document.querySelector('.ShowAll')
    let onclicked = false;
    window.addEventListener('resize', function() {
        if ( window.matchMedia("(max-width: 300px)").matches ) {
            childs = res.map(function(item) {
                function chuoi( item ) {
                    if ( item.content.length >= 180 && onclicked == false ) {
                        ShowAll.classList.add('active')
                        return item.content.slice(0, 180 ) + bacham
                    } else {
                        return item.content
                    }
                }
                let newChuoi = chuoi( item );
                ShowAll.addEventListener('click', function() {
                    onclicked == true
                    console.log( "check" )
                    ShowAll.classList.remove('active')
                    ShowAll.classList.add('fade')
                    newChuoi = item.content
                })
                return `
                <div class="Child">
                    <div class="head">
                        <img src="${item.thumbnail}" alt="">
                        <div class="status">
                        ${item.status}
                        </div>
                    </div>
                    <div class="footer">
                        <h1 id="title"> ${item.title} </h1>
                        <p id="description"> ${newChuoi} </p>
                        <div class="ShowAll"> ... </div>
                        <div class="TagAndId">
                            <div class="tag">
                            tag
                            </div>
                            <div class="id">
                                ${item.id}
                            </div>
                        </div>
                        <div class="date">
                            <span> Date : </span>
                            <span> ${item.updatedAt} </span>
                        </div>
                        <div class="Published">
                            <span> PublishedAt : </span>
                            <span> ${item.publishedAt} </span>
                        </div>
                    </div>
                </div>
                `
            });
            console.log( " thumbnail" )
            container.innerHTML = childs.join("")
        } else {
            childs = res.map(function(item) {
                function chuoi( item ) {
                    if ( item.content.length >= 180 && onclicked == false ) {
                        ShowAll.classList.add('active')
                        return item.content.slice(0, 180 ) + bacham
                    } else {
                        return item.content
                    }
                }
                let newChuoi = chuoi( item );
                ShowAll.addEventListener('click', function() {
                    onclicked == true
                    console.log( "check" )
                    ShowAll.classList.remove('active')
                    ShowAll.classList.add('fade')
                    newChuoi = item.content
                })
                return `
                <div class="Child">
                    <div class="head">
                        <img src="${item.thumbnail}" alt="">
                        <div class="status">
                        ${item.status}
                        </div>
                    </div>
                    <div class="footer">
                        <h1 id="title"> ${item.title} </h1>
                        <p id="description"> ${newChuoi} </p>
                        <div class="ShowAll"> ... </div>
                        <div class="TagAndId">
                            <div class="tag">
                            tag
                            </div>
                            <div class="id">
                                ${item.id}
                            </div>
                        </div>
                        <div class="date">
                            <span> Date : </span>
                            <span> ${item.updatedAt} </span>
                        </div>
                        <div class="Published">
                            <span> PublishedAt : </span>
                            <span> ${item.publishedAt} </span>
                        </div>
                    </div>
                </div>
                `
            });
            console.log( " image" )
            container.innerHTML = childs.join("")
        }
    })
})
.catch(function(err){
    console.log("loi", err)
})
.finally(function() {
    console.log("finally")
})
