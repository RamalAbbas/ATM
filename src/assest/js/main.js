class Atm {
    constructor() {
        this.my_balance = 0;

        this.increment = function(price){
            this.my_balance += price
            showBalance.innerHTML = "Balansivizi yenileyin"
        }

        this.decrement = function(price){
            this.my_balance <= 0 || this.my_balance - price < 0 ? alert("Balansivizi yoxlayin") : this.my_balance -= price
            showBalance.innerHTML = "Balansivizi yenileyin"
        }

        this.balance = function(){
            showBalance.innerHTML = "Balans gosterildi"
            showErr(true,cur_balance,this.my_balance)
        }
    }
}

regestration_form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = this.name_input.value;
    let age = this.age_input.value;

    if(!(name == "" || age == "")){
        event.target.style.display = "none"
        document.querySelector(".noShow").style.display = "flex"
        userName.innerHTML = `Welcome to ${name}`
        Atm = new Atm(name, age)
    }
    showErr(true, err_place, 'Xahis edirik adivizi veya yasinizi girin')
});



addMany.addEventListener('click',function(){
    let price = +prompt("Balansinizi artiramaq ucun qiymet daxil edin .")
    price >= 0 ?  Atm.increment(price) : alert("sizin qiymetiviz musbet eded olmalidir")
})


payMany.addEventListener('click',function(){
    let price = +prompt("Balansizinizda cixacaq meblegi yazin")
    price >= 0 ?  Atm.decrement(price) : alert("sizin qiymetiviz musbet eded olmalidir")
});

showBalance.addEventListener("click",function(){
    Atm.balance()
})

function showErr(bool, err_place, title){
    if(bool){
        err_place.innerHTML = title;
    }
    return false;
}