const atmData = {
    my_balance: 0,
    userName: "",
    cur_balance: null,
  
    increment(price) {
      this.my_balance += price;
      showBalance.innerHTML = "Balansivizi yenileyin";
    },
  
    decrement(price) {
      if (this.my_balance <= 0 || this.my_balance - price < 0) {
        alert("Balansivizi yoxlayin");
      } else {
        this.my_balance -= price;
      }
      showBalance.innerHTML = "Balansivizi yenileyin";
    },
  
    balance() {
      showBalance.innerHTML = "Balans gosterildi";
      showErr(true, this.cur_balance, this.my_balance);
    }
};
  
  
  
regestration_form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = this.name_input.value;
    let age = this.age_input.value;
  
    if (!(name == "" || age == "")) {
      event.target.style.display = "none";
      document.querySelector(".noShow").style.display = "flex";
      atmData.userName = `${name}`;
      atmData.cur_balance = document.querySelector("#my_balance");
    }
    showErr(true, err_place, 'Xahis edirik adivizi veya yasinizi girin');
});
  
addMany.addEventListener('click', function () {
    let price = +prompt("Balansinizi artiramaq ucun qiymet daxil edin.");
    if (price >= 0) {
      atmData.increment(price);
    } else {
      alert("sizin qiymetiviz musbet eded olmalidir");
    }
});
  
payMany.addEventListener('click', function () {
    let price = +prompt("Balansizinizda cixacaq meblegi yazin");
    if (price >= 0) {
      atmData.decrement(price);
    } else {
      alert("sizin qiymetiviz musbet eded olmalidir");
    }
});
  
showBalance.addEventListener("click", function () {
    atmData.balance();
});
  
function showErr(bool, err_place, title) {
    if (bool) {
      err_place.innerHTML = title;
    }
    return false;
}
  