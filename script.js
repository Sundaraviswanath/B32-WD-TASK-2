//Table Input Start
let table_input = [
    {
        "S_No" : "1",
        "Name" : "Sundar",
        "Location" : "Madurai"
    },
    {
        "S_No" : "2",
        "Name" : "Viswa",
        "Location" : "Chennai"
    },
    {
        "S_No" : "3",
        "Name" : "Viswanath",
        "Location" : "Coimbatore"
    },
    {
        "S_No" : "4",
        "Name" : "Rajan",
        "Location" : "Sivakasi"
    }, 
    {
        "S_No" : "5",
        "Name" : "Guru",
        "Location" : "Hosur"
    }, 
    {
        "S_No" : "6",
        "Name" : "Sankar",
        "Location" : "Erode"
    }, 
    {
        "S_No" : "7",
        "Name" : "Ramanan",
        "Location" : "Tiruchirappalli"
    }, 
    {
        "S_No" : "8",
        "Name" : "Mohan",
        "Location" : "Tiruppur"
    }, 
    {
        "S_No" : "9",
        "Name" : "Jaya",
        "Location" : "Salem"
    }, 
    {
        "S_No" : "10",
        "Name" : "Raja",
        "Location" : "Kumbakonam"
    }, 
]
//Table Input End

//Code Start 
let page_Creation = () =>
{
    let size = (table_input.length)/5;
    let page_Div = document.getElementById("paginationDiv");

// Code for Perv Button - Start 

let per = document.createElement('li');
per.className = "page_count";
per.id = "Pervious";
per.innerHTML = `<button class = "btn btn-sm btn btn-dark" id="Pervious" onclick = "per()">Pervious</button>`;
page_Div.appendChild(per);

// Code for Perv Button - End 

// Code for Page Number - Start 
let i;
for (i=1;i<=size;i++)
{
    let li = document.createElement("li");
    li.className = "Page_Number";
    li.innerHTML = `<button class="btn btn-sm btn btn-dark" id="${i}" onclick="data(id)">${i}</button>`;
    page_Div.appendChild(li)
}
// Code for Page Number - End 

// Code for Next Button - Start 

let next = document.createElement('li');
next.className = "page_count";
next.id = "next";
next.innerHTML = `<button class = "btn btn-sm btn btn-dark" id="Next" onclick = "next()">Next</button>`;
page_Div.appendChild(next);

// Code for Next Button - End 
}

// Table Body - Start

let data = ((page_No) =>
{
localStorage.setItem('page',page_No);
let j=(page_No-1)*5;
let tableBody = document.getElementById ("table_body");
tableBody.innerHTML = '';
for (let i =1;i<=5;i++)
{
let tr = document.createElement("tr"); //table Row
let th = document.createElement("th"); //table Head
th.setAttribute("scope","col"); //push to HTML
th.innerText = table_input[j].S_No; //table data (id)
let td1 =document.createElement("td"); 
td1.innerText = table_input[j].Name; //table data (name)
let td2 =document.createElement("td"); 
td2.innerText = table_input[j].Location; //table data (Location)
tr.appendChild(th);
tr.appendChild(td1);
tr.appendChild(td2);
tableBody.appendChild(tr);
j+=1;
}
});
// Table Body - End
let per = () =>
{
    currentPage = localStorage.getItem("page");
    if (currentPage>1)
    {
        data(currentPage-1);
    }
    else
    {
        document.getElementById("Pervious").disabled = true;
    }
}

let next = () =>
{
    currentPage = localStorage.getItem("page");
    if (currentPage === (table_input/5))
    {
        document.getElementById("next").disabled = true;
    }
    else
    {
        data(++currentPage);
    }
}
//Code End