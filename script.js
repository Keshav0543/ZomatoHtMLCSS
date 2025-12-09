const universal = document.getElementsByClassName("container2")[0];
const store = [];

function getdetail(list) {
    list.forEach((Restaurant) => {
        const card1 = document.createElement('div');
        card1.classList.add('card');

        const image = document.createElement('div');
        image.classList.add('image1');

        const pic = document.createElement('img');
        pic.src = `${Restaurant.image}`;
        image.appendChild(pic);

        const offerBand = document.createElement('div');
        offerBand.classList.add('offer');
        const offIcon = document.createElement('img');
        offIcon.src = "./off.webp";

        const offText = document.createElement('p');
        offText.innerText = "Flat 30% Off";

        offerBand.appendChild(offIcon);
        offerBand.appendChild(offText);

        /* ✅ attach offer inside image so it scrolls only with card */
        image.appendChild(offerBand);

        const Hotelh = document.createElement('div');
        Hotelh.classList.add("hotel-header");

        const HotelN = document.createElement("div");
        HotelN.classList.add("hotel-name");
        const para1 = document.createElement('p');
        para1.innerText = `${Restaurant.name}`;
        HotelN.appendChild(para1);

        const ratt = document.createElement("div");
        ratt.classList.add("rating");
        const para2 = document.createElement('p');
        para2.innerText = Math.floor(Math.random() * 4 + 1).toFixed(1) + " ★";
        ratt.appendChild(para2);

        Hotelh.appendChild(HotelN);
        Hotelh.appendChild(ratt);

        const HotelT = document.createElement("div");
        HotelT.classList.add("hotel-type");

        const items = document.createElement("div");
        items.classList.add("item");
        const para3 = document.createElement('p');
        para3.innerText = `${Restaurant.foodtype}`;
        items.appendChild(para3);

        const prices = document.createElement("div");
        prices.classList.add("price");
        const para4 = document.createElement('p');
        para4.innerText = `₹${Restaurant.price}`;
        prices.appendChild(para4);

        HotelT.appendChild(items);
        HotelT.appendChild(prices);

        const locate = document.createElement('div');
        locate.classList.add("location-place");

        const currlocate = document.createElement('div');
        currlocate.classList.add("location");
        const para5 = document.createElement('p');
        para5.innerText = `${Restaurant.location}`;
        currlocate.appendChild(para5);

        const distance = document.createElement('div');
        distance.classList.add("distance");
        const para6 = document.createElement('p');
        para6.innerText = `${Restaurant.distance_km} Km`;
        distance.appendChild(para6);

        locate.appendChild(currlocate);
        locate.appendChild(distance);

        /* ✅ append final card sections (NO duplicate HotelN) */
        card1.appendChild(image);
        card1.appendChild(Hotelh);
        card1.appendChild(HotelT);
        card1.appendChild(locate);

        universal.appendChild(card1);
    });
}

fetch("./arrayData.json")
    .then(res => res.json())
    .then(data => {
        store.push(...data);
        getdetail(store);
    })
    .catch(err => console.log("JSON Error:", err));


const alcohol = document.getElementById('daru');const result=[];
        alcohol.addEventListener('click', (event) => {
          event.preventDefault();
            store.filter((obj) =>{
              if(obj.daru)result.push(obj);
            });
            universal.innerHTML = "";
            getdetail(result);
        })

const Pet=document.getElementById('Pet');
Pet.addEventListener('click',(data)=>{
data.preventDefault();
store.filter((obj)=>{
    if(obj.pet_friendly)result.push(obj);
});
universal.innerHTML="";
getdetail(result);
})


const access=document.getElementById('filter');
access.addEventListener('click',()=>{
    
})

const filterButton = document.getElementById('filter');
const header = document.getElementsByClassName('visible')[0];
const container1=document.getElementsByClassName('container')[0];

filterButton.addEventListener('click', (event) => {
    event.stopPropagation();
    header.style.display = "block";
});


header.addEventListener('click', (event) => {
    event.stopPropagation();
});


document.body.addEventListener('click', () => {
    header.style.display = "none";
});


const button1=document.getElementById('first-btn');
button1.addEventListener('click',(event)=>{
    location.reload();
})

const button2=document.getElementById('second-btn');
button2.addEventListener('click',()=>{
    const header=document.getElementsByClassName('visible');
    header[0].style.display="none";
})