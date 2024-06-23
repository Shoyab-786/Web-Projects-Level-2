const accessKeys = [
    'yn0AmrbB6Puy3y8Hy2vyBXViTr2AIkj6rRdxiCNZcBY',     //md
    'eJ4fd83LDOFu2SviK9XwcAMun20AFetTCu42nr4O02g',    //kalam
    '5YFowbHDE7pF9clvRU7-I7ozTYwVWx8ENSKYkeMXkKY',   //davinci
    '9YjK7Dc7M6UJeiEUYOARgzpjx2ihVj4PEGJUgmZniec'   //zenb
];
const loading = 'Loading...';
const searchForm = document.getElementById("search_form");
const searchBox = document.getElementById("search_box");
const searchResult = document.getElementById("search_result");
const showMoreBtn = document.getElementById("show_more_btn");
let keyword;
let page = 1;
let total_pages;
let preValue = '';
let searchImages = async () => {
    if (searchBox.value === '') {
        alert('Empty');
        console.log('Empty');
    } else {
        console.log('done');
        keyword = searchBox.value;
        let success = false;
        let i;
        for (i = 0; i < accessKeys.length; i++) {
            const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKeys[i]}&per_page=12`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                if (page == 1) {
                    searchResult.innerHTML = "";
                }

                const results = data.results;
                total_pages = data.total_pages;

                results.map((result) => {
                    const image = document.createElement('img');
                    image.src = result.urls.small;
                    const imageLink = document.createElement('a');
                    imageLink.href = result.links.download;
                    imageLink.target = '_blank';
                    imageLink.appendChild(image);
                    searchResult.appendChild(imageLink);
                })
                showMoreBtn.style.display = 'block';
                console.log("Fetching Complete ...");

                success = true;
                break; // Exit the loop if successful
            } catch (error) {
                console.log(`Fetching Failed with apiKey[${i}]`);
            }
            finally {
                console.log(url);
            }
        }

        if (!success) {
            console.error("Failed to fetch data using all API keys.");
        } else {
            console.log(`Fetching Finished with apiKey[${i}]`);
        }

        preValue = searchBox.value;
    }
};


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});
let val;

let randomNum = () => {
    if (total_pages < 200) {

        val = Math.ceil(2 + Math.random() * total_pages);
    }
    else {
        val = Math.ceil(2 + Math.random() * 200);
    }
}
showMoreBtn.addEventListener('click', async () => {
    randomNum();
    page = val;
    // ++page
    await searchImages();
})




// 'https://unsplash.com/photos/EPy0gBJzzZU/download?ixid=M3w1Njc1MTF8MHwxfHNlYXJjaHwxfHx0cmVlJTdEfGVufDB8fHx8MTcwODAwMjcwNnww&force=true'