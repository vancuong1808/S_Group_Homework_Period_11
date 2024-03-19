
    const data = fetch('https://jsonplaceholder.org/posts?fbclid=IwAR1ZmpZTK7tPv3xfKWhLKtnIKiyHasMH4LWsZDR6jsjpJ1a94jBOKb8OZyY');
    data.then(function(res) {
        console.log(res);
        return res.json();
    }).then(function(res) {
        console.log(res);
        let container = document.getElementsByClassName('container')[0];
        let childs;
        let bacham = "...";
        childs = res.map(function(item) {
            function chuoi(item) {
                if (item.content.length >= 180 ) {
                    return item.content.slice(0, 180) + bacham;
                } else {
                    return item.content;
                }
            }
            let newChuoi = chuoi(item);
            return `
            <div class="Child">
                <div class="head">
                    <img src="${item.thumbnail}" alt="">
                    <div class="status">
                        ${item.status}
                    </div>
                </div>
                <div class="footer">
                    <h1 id="title">${item.title}</h1>
                    <p class="description-on"> ${newChuoi} </p>
                    <p class="description-off"> ${item.content} </p>
                    <div class="ShowAll"> ... </div>
                    <div class="TagAndId">
                        <div class="tag">tag</div>
                        <div class="id">${item.id}</div>
                    </div>
                    <div class="date">
                        <span>Date:</span>
                        <span>${item.updatedAt}</span>
                    </div>
                    <div class="Published">
                        <span>PublishedAt:</span>
                        <span>${item.publishedAt}</span>
                    </div>
                </div>
            </div>`
        });
        container.innerHTML = childs.join("");
        window.addEventListener('resize', function() {
            if (window.matchMedia("(max-width: 300px)").matches) {
                childs = res.map(function(item) {
                    function chuoi(item) {
                        if (item.content.length >= 180) {
                            return item.content.slice(0, 180) + bacham;
                        } else {
                            return item.content;
                        }
                    }
                    let newChuoi = chuoi(item);
                    return `
                    <div class="Child">
                        <div class="head">
                            <img src="${item.thumbnail}" alt="">
                            <div class="status">
                                ${item.status}
                            </div>
                        </div>
                        <div class="footer">
                            <h1 id="title">${item.title}</h1>
                            <p class="description-on"> ${newChuoi} </p>
                            <p class="description-off"> ${item.content} </p>
                            <div class="ShowAll"> ... </div>
                            <div class="TagAndId">
                                <div class="tag">tag</div>
                                <div class="id">${item.id}</div>
                            </div>
                            <div class="date">
                                <span>Date:</span>
                                <span>${item.updatedAt}</span>
                            </div>
                            <div class="Published">
                                <span>PublishedAt:</span>
                                <span>${item.publishedAt}</span>
                            </div>
                        </div>
                    </div>`
                });
                console.log("thumbnail");
                container.innerHTML = childs.join("");
                for( i = 0; i < container.children.length; i++ ) {
                    let temp = container.children;
                    let ShowAll = temp[i].querySelector('.ShowAll');
                    let descript_on = temp[i].querySelector('.description-on');
                    let descript_off = temp[i].querySelector('.description-off');
                    ShowAll.addEventListener('click', function() {
                        // console.log( descript_on.classList.contains('fade') );
                        if( descript_on.classList.contains('fade') ) {
                            descript_on.classList.remove('fade');
                            descript_off.classList.remove('active');
                            // alert("not gud")
                        } else {
                            descript_on.classList.add('fade');
                            descript_off.classList.add('active');
                            // alert("okay")
                        }
                    })
                }
            } else {
                childs = res.map(function(item) {
                    function chuoi(item) {
                        if (item.content.length >= 180 ) {
                            return item.content.slice(0, 180) + bacham;
                        } else {
                            return item.content;
                        }
                    }
                    let newChuoi = chuoi(item);
                    return `
                    <div class="Child">
                        <div class="head">
                            <img src="${item.thumbnail}" alt="">
                            <div class="status">
                                ${item.status}
                            </div>
                        </div>
                        <div class="footer">
                            <h1 id="title">${item.title}</h1>
                            <p class="description-on"> ${newChuoi} </p>
                            <p class="description-off"> ${item.content} </p>
                            <div class="ShowAll"> ... </div>
                            <div class="TagAndId">
                                <div class="tag">tag</div>
                                <div class="id">${item.id}</div>
                            </div>
                            <div class="date">
                                <span>Date:</span>
                                <span>${item.updatedAt}</span>
                            </div>
                            <div class="Published">
                                <span>PublishedAt:</span>
                                <span>${item.publishedAt}</span>
                            </div>
                        </div>
                    </div>`;
                });
                console.log("image");
                container.innerHTML = childs.join("");
                for( i = 0; i < container.children.length; i++ ) {
                    let temp = container.children;
                    let ShowAll = temp[i].querySelector('.ShowAll');
                    let descript_on = temp[i].querySelector('.description-on');
                    let descript_off = temp[i].querySelector('.description-off');
                    ShowAll.addEventListener('click', function() {
                        // console.log( descript_on.classList.contains('fade') );
                        if( descript_on.classList.contains('fade') ) {
                            descript_on.classList.remove('fade');
                            descript_off.classList.remove('active');
                            // alert("not gud")
                        } else {
                            descript_on.classList.add('fade');
                            descript_off.classList.add('active');
                            // alert("okay")
                        }
                    })
                }
            }
        });
        for( i = 0; i < container.children.length; i++ ) {
            let temp = container.children;
            let ShowAll = temp[i].querySelector('.ShowAll');
            let descript_on = temp[i].querySelector('.description-on');
            let descript_off = temp[i].querySelector('.description-off');
            ShowAll.addEventListener('click', function() {
                // console.log( descript_on.classList.contains('fade') );
                if( descript_on.classList.contains('fade') ) {
                    descript_on.classList.remove('fade');
                    descript_off.classList.remove('active');
                    // alert("not gud")
                } else {
                    descript_on.classList.add('fade');
                    descript_off.classList.add('active');
                    // alert("okay")
                }
            })
        }
    }).catch(function(err) {
        console.log("error", err);
    }).finally(function() {
        console.log("finally");
    });

    


