const rezervasyonListesi = [
  new Reservation(
    "2025-03-28",
    "2025-04-01",
    2,
    2,
    "Alper",
    "Buber",
    "12212121312",
    "alperbuber@gmail.com",
    "+905340547052",
    "Executive Teras Suit"
  ),
  new Reservation(
    "2025-02-28",
    "2025-04-01",
    4,
    0,
    "Selami",
    "Kaymaz",
    "21383213722",
    "Selami@gmail.com",
    "+905260235152",
    "Deluxe Suit"
  ),
  new Reservation(
    "2025-04-08",
    "2025-04-11",
    1,
    0,
    "Mehmet",
    "Özdinç",
    "93839848812",
    "Mehmet@gmail.com",
    "+905111234052",
    "Junior Suit"
  ),
];

for (let reservation of rezervasyonListesi) {
  reservation.displayReservations();
}
