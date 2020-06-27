const paragraph = document.querySelector('#tweet')
const container = document.querySelector('.container')
const Signature = document.createElement('p')
Signature.innerText = 'Donald Trump'

fetch("https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "matchilling-tronald-dump-v1.p.rapidapi.com",
		"x-rapidapi-key": "65163a4f47mshfec6773dc7f7a7ep17c28fjsn9d71aeb26140",
		"accept": "application/hal+json"
	}
})
.then(response => response.json())
.then(response => paragraph.innerHTML = response.value
)
.then(()=>
	container.appendChild(Signature)
)
.catch(err => {
	console.log(err);
});


