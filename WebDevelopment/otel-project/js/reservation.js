function Reservation(
  checkIn,
  checkOut,
  nOfAdult,
  nOfChild,
  name,
  surname,
  tckn,
  email,
  phone,
  roomName
) {
  this.checkIn = checkIn;
  this.checkOut = checkOut;
  this.nOfAdult = nOfAdult;
  this.nOfChild = nOfChild;
  this.name = name;
  this.surname = surname;
  this.tckn = tckn;
  this.email = email;
  this.phone = phone;
  this.roomName = roomName;
}

//date i uygun hale getirme

function formatDate(inputDate) {
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  let [year, month, day] = inputDate.split("-");
  month = months[parseInt(month, 10) - 1]; // Ay ismini al

  return `${day} ${month} ${year}`;
}

// Kullanım

const pageContainer = document.querySelector(".page-container");

Reservation.prototype.displayReservations = function () {
  const checkInDay = formatDate(this.checkIn);
  const checkOutDay = formatDate(this.checkOut);

  // reservation div
  const reservation = document.createElement("div");
  reservation.classList.add("reservation", "row");

  // reservation left info divs
  const roomDiv = document.createElement("div");
  roomDiv.classList.add("col-md-5");

  //oda ismi P
  const p1 = document.createElement("p");
  const strong1 = document.createElement("strong");
  const span1 = document.createElement("span");
  strong1.textContent = "Oda: ";
  p1.appendChild(strong1);
  span1.textContent = this.roomName;
  p1.appendChild(span1);

  //Kişi sayısı P
  const p2 = document.createElement("p");
  const strong2 = document.createElement("strong");
  const span2 = document.createElement("span");
  strong2.textContent = "Kişi Sayısı: ";
  p2.appendChild(strong2);
  span2.textContent = this.nOfAdult + this.nOfChild;
  p2.appendChild(span2);

  //Rezervasyon Durumu P
  const p3 = document.createElement("p");
  const strong3 = document.createElement("strong");
  const span3 = document.createElement("span");
  strong3.textContent = "Durum: ";
  p3.appendChild(strong3);
  span3.textContent = "Aktif";
  p3.appendChild(span3);

  //p leri dive ekleme
  roomDiv.appendChild(p1);
  roomDiv.appendChild(p2);
  roomDiv.appendChild(p3);
  reservation.appendChild(roomDiv);

  // reservation right info divs
  const dateDiv = document.createElement("div");
  dateDiv.classList.add("col-md-5");

  //tarih p
  const p4 = document.createElement("p");
  const strong4 = document.createElement("strong");
  const span4 = document.createElement("span");
  strong4.textContent = "Tarih: ";
  p4.appendChild(strong4);
  span4.textContent = `${checkInDay} - ${checkOutDay}`;
  p4.appendChild(span4);

  //iletişim numarası P
  const p5 = document.createElement("p");
  const strong5 = document.createElement("strong");
  const span5 = document.createElement("span");
  strong5.textContent = "İletişim Numarası: ";
  p5.appendChild(strong5);
  span5.textContent = this.phone;
  p5.appendChild(span5);

  //isim p

  const p6 = document.createElement("p");
  const strong6 = document.createElement("strong");
  const span6 = document.createElement("span");
  strong6.textContent = " İsim: ";
  p6.appendChild(strong6);
  span6.textContent = this.name + " " + this.surname;
  p6.appendChild(span6);
  //P leri dive ekleme
  dateDiv.appendChild(p6);
  dateDiv.appendChild(p4);
  dateDiv.appendChild(p5);

  //button div
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("col-md-2");

  // buttons
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("mt-4", "buttons");

  const buttonUpdate = document.createElement("button");
  buttonUpdate.classList.add(
    "btn",
    "btn-success",
    "btn-sm",
    "me-3",
    "btn-shadow",
    "mb-3"
  );
  buttonUpdate.textContent = "Güncelle";

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("btn", "btn-danger", "btn-sm", "ms-1", "mb-3");
  buttonDelete.textContent = "İptal Et";

  buttonDiv.appendChild(buttonUpdate);
  buttonDiv.appendChild(buttonDelete);
  buttonsDiv.appendChild(buttonDiv);

  reservation.appendChild(dateDiv);
  reservation.appendChild(buttonsDiv);

  pageContainer.appendChild(reservation);
};
