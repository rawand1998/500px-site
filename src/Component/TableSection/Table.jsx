import React from "react";
import imgtable1 from "../../images/imgtable1.jpg";
import imgtable2 from "../../images/imagtable2.jpg";
import av1 from "../../images/av1.jpg";
import av2 from "../../images/av2.jpg";
import card from '../../images/card.jpg'
import "./style.css";

function Table() {
  const tabel = [
    {
      img: imgtable2,
      title: "How to shoot fine art at home",
      icon2: (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M22.7 11.4C22.2 9.50003 21.6 8.30003 20.5 7.60003C19.8 7.10003 18.9 6.80003 17.8 6.80003C19.4 5.20003 20 2.90003 19.4 0.700029C19.3 0.500029 19.1 0.300029 18.9 0.200029C16.6 -0.399971 14.2 0.200029 12.5 1.80003C11.8 2.50003 11.3 3.30003 11 4.20003C9.4 2.10003 6.8 2.00003 6.7 2.00003C6.3 2.00003 6 2.30003 6 2.70003C6 3.10003 6.3 3.40003 6.7 3.40003C6.8 3.40003 9.9 3.50003 10.8 6.90003C10.8 7.10003 10.8 7.30003 10.9 7.40003C9.1 7.30003 7.4 6.90003 7.3 6.90003C5.7 6.70003 4.4 6.90003 3.5 7.60003C2.5 8.30003 1.8 9.60003 1.3 11.4C0.9 13.1 0.9 14.9 1.3 16.7C1.6 18.2 2.3 19.7 3.1 20.9C3.9 22.1 5 23 6.2 23.5C7.6 24.1 9 24.1 10.3 23.5C11.3 23 12.6 23 13.7 23.5C14.4 23.8 15.1 24 15.8 24C16.5 24 17.2 23.8 17.9 23.5C19 23 20.1 22.1 21 20.9C21.8 19.7 22.5 18.2 22.8 16.7C23.1 14.9 23.1 13.1 22.7 11.4ZM13.7 2.80003C14.9 1.70003 16.6 1.20003 18.2 1.40003C18.5 3.00003 18 4.60003 16.8 5.70003C15.9 6.60003 14.7 7.10003 13.5 7.10003C14.1 6.10003 15.2 5.10003 15.7 4.70003C16 4.50003 16.1 4.00003 15.8 3.70003C15.5 3.40003 15.1 3.30003 14.8 3.60003C14.6 3.80003 13.1 4.90003 12.3 6.30003C12.2 5.10003 12.6 3.80003 13.7 2.80003ZM21.3 16.4C21 17.8 20.4 19.1 19.7 20.1C19 21.1 18.2 21.8 17.3 22.2C16.3 22.6 15.3 22.6 14.4 22.2C13.7 21.9 12.9 21.7 12.1 21.7C11.3 21.7 10.5 21.9 9.8 22.2C8.9 22.6 7.9 22.6 6.9 22.2C6 21.8 5.1 21 4.5 20.1C3.8 19.1 3.2 17.7 2.9 16.4C2.5 14.8 2.5 13.2 2.9 11.7C3.3 10.2 3.8 9.20003 4.5 8.70003C5 8.20003 5.8 8.10003 7 8.30003C7.1 8.30003 9.9 9.00003 12 9.00003C12.1 9.00003 12.1 9.00003 12.2 9.00003C14.3 8.90003 16.8 8.40003 16.8 8.40003C18 8.20003 18.9 8.30003 19.5 8.80003C20.2 9.30003 20.7 10.3 21.1 11.8C21.6 13.2 21.6 14.8 21.3 16.4Z"></path>
          <path d="M5.6 14.3C5.6 13.9 5.3 13.6 4.9 13.6C4.5 13.6 4.1 13.9 4.1 14.3C3.9 16.7 5.3 18.5 5.3 18.5C5.4 18.7 5.7 18.8 5.9 18.8C6.1 18.8 6.2 18.8 6.3 18.7C6.6 18.5 6.7 18 6.5 17.7C6.5 17.6 5.4 16.2 5.6 14.3Z"></path>
          <path d="M4.69995 12.7001C4.79995 12.7001 4.79995 12.7001 4.69995 12.7001C5.19995 12.7001 5.49995 12.4001 5.49995 12.1001C5.49995 12.0001 5.59995 11.4001 5.89995 11.1001C6.19995 10.8001 6.09995 10.4001 5.79995 10.1001C5.49995 9.80008 4.99995 9.90008 4.79995 10.2001C4.19995 10.9001 4.09995 11.8001 4.09995 11.9001C3.99995 12.3001 4.29995 12.7001 4.69995 12.7001Z"></path>
        </svg>
      ),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M12 8.5C8.49998 8.5 5.59998 11.3 5.59998 14.9C5.59998 18.5 8.39998 21.3 12 21.3C15.6 21.3 18.4 18.5 18.4 14.9C18.4 11.3 15.5 8.5 12 8.5ZM16.9 14.1H15.5C15.4 12.8 15.1 11.6 14.7 10.7C15.9 11.5 16.7 12.7 16.9 14.1ZM11.3 10.2V14.1H9.89998C9.99998 12.3 10.6 10.8 11.3 10.2ZM11.3 15.5V19.4C10.6 18.8 9.99998 17.3 9.89998 15.5H11.3ZM12.7 19.4V15.5H14.1C14 17.4 13.4 18.8 12.7 19.4ZM12.7 14.1V10.2C13.4 10.8 14 12.3 14.1 14.1H12.7ZM9.29998 10.7C8.89998 11.6 8.59998 12.8 8.49998 14.1H7.09998C7.29998 12.7 8.09998 11.5 9.29998 10.7ZM7.09998 15.5H8.49998C8.59998 16.8 8.89998 18 9.29998 18.9C8.09998 18.2 7.29998 17 7.09998 15.5ZM14.7 18.9C15.1 18 15.4 16.8 15.5 15.5H16.9C16.7 17 15.9 18.2 14.7 18.9Z"></path>
          <path d="M23.3 0H0.7C0.3 0 0 0.3 0 0.7V23.3C0 23.7 0.3 24 0.7 24H23.3C23.7 24 24 23.7 24 23.3V0.7C24 0.3 23.7 0 23.3 0ZM22.6 1.4V5.6H1.4V1.4H22.6ZM1.4 22.6V7.1H22.6V22.6H1.4Z"></path>
          <path d="M3.49999 4.20005H17.6C18 4.20005 18.3 3.90005 18.3 3.50005C18.3 3.10005 18 2.80005 17.6 2.80005H3.49999C3.09999 2.80005 2.79999 3.10005 2.79999 3.50005C2.79999 3.90005 3.09999 4.20005 3.49999 4.20005Z"></path>
          <path d="M20.5 4.20005C20.8866 4.20005 21.2 3.88665 21.2 3.50005C21.2 3.11345 20.8866 2.80005 20.5 2.80005C20.1134 2.80005 19.8 3.11345 19.8 3.50005C19.8 3.88665 20.1134 4.20005 20.5 4.20005Z"></path>
        </svg>
      ),
      icon3: (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M11.4 10.4C11.1 10.1 10.7 10.1 10.4 10.4L4.40002 16.5C4.10002 16.8 4.10002 17.2 4.40002 17.5C4.50002 17.6 4.70002 17.7 4.90002 17.7C5.10002 17.7 5.30002 17.6 5.40002 17.5L11.4 11.4C11.7 11.1 11.7 10.7 11.4 10.4Z"></path>
          <path d="M12.4 12.4L6.40002 18.5C6.10002 18.8 6.10002 19.2 6.40002 19.5C6.50002 19.6 6.70002 19.7 6.90002 19.7C7.10002 19.7 7.30002 19.6 7.40002 19.5L13.4 13.4C13.7 13.1 13.7 12.7 13.4 12.4C13.1 12.2 12.7 12.2 12.4 12.4Z"></path>
          <path d="M23.2 0.800029C22.6 0.200029 21.8 -0.0999709 21 2.91411e-05C18.4 0.200029 15.4 3.60003 14.5 4.60003L10.4 5.00003C9.80001 5.10003 9.20001 5.50003 8.70001 5.90003L0.800012 13.9C-0.299988 15 -0.399988 16.9 0.700012 18L5.80001 23.2C6.30001 23.7 7.00001 24 7.80001 24C8.60001 24 9.30001 23.7 9.90001 23.1L17.8 15.1C18.3 14.6 18.6 14 18.6 13.3L19.1 8.40003C21.1 7.30003 23 5.70003 23.7 4.00003C24.2 2.80003 24 1.70003 23.2 0.800029ZM17.3 13.2C17.3 13.5 17.1 13.9 16.9 14.1L9.00001 22.1C8.70001 22.4 8.30001 22.6 7.90001 22.6C7.50001 22.6 7.20001 22.5 7.00001 22.2L1.80001 17C1.30001 16.4 1.30001 15.5 1.90001 14.9L9.80001 6.90003C10 6.70003 10.4 6.50003 10.7 6.50003L16.4 5.90003C16.8 5.80003 17.2 6.00003 17.5 6.30003C17.8 6.60003 17.9 7.00003 17.9 7.50003V7.60003C17.5 7.80003 17.2 7.90003 16.9 8.00003C16.8 7.80003 16.7 7.60003 16.5 7.40003C16 7.00003 15.5 6.70003 15 6.70003C14.4 6.70003 13.9 6.90003 13.5 7.30003C12.7 8.10003 12.7 9.50003 13.5 10.3C13.9 10.7 14.4 10.9 14.9 10.9C15.5 10.9 16 10.7 16.4 10.3C16.7 10 16.8 9.70003 16.9 9.30003C17.1 9.20003 17.4 9.20003 17.7 9.10003L17.3 13.2ZM15.2 9.40003C15.1 9.50003 14.9 9.50003 14.8 9.50003C14.7 9.50003 14.5 9.50003 14.4 9.30003C14.1 9.00003 14.2 8.60003 14.4 8.30003C14.5 8.20003 14.7 8.10003 14.9 8.10003C15 8.10003 15.1 8.10003 15.2 8.20003C15 8.30003 14.8 8.50003 14.8 8.80003C14.9 9.10003 15.1 9.30003 15.2 9.40003ZM22.4 3.50003C21.9 4.60003 20.6 5.80003 19.2 6.80003C19.1 6.20003 18.9 5.70003 18.4 5.30003C17.9 4.80003 17.2 4.50003 16.5 4.50003C17.8 3.20003 19.6 1.50003 21 1.40003C21.4 1.40003 21.8 1.50003 22.1 1.80003C22.5 2.10003 22.8 2.60003 22.4 3.50003Z"></path>
        </svg>
      ),
      lable: "Online",
      lable2: "Artical",
      lable3: "Free",
      avator: av1,
      name: "avatarTaya Iv",
    },
    {
      img: imgtable1,
      title: "How to shoot fine art at home",
      icon2: (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M22.7 11.4C22.2 9.50003 21.6 8.30003 20.5 7.60003C19.8 7.10003 18.9 6.80003 17.8 6.80003C19.4 5.20003 20 2.90003 19.4 0.700029C19.3 0.500029 19.1 0.300029 18.9 0.200029C16.6 -0.399971 14.2 0.200029 12.5 1.80003C11.8 2.50003 11.3 3.30003 11 4.20003C9.4 2.10003 6.8 2.00003 6.7 2.00003C6.3 2.00003 6 2.30003 6 2.70003C6 3.10003 6.3 3.40003 6.7 3.40003C6.8 3.40003 9.9 3.50003 10.8 6.90003C10.8 7.10003 10.8 7.30003 10.9 7.40003C9.1 7.30003 7.4 6.90003 7.3 6.90003C5.7 6.70003 4.4 6.90003 3.5 7.60003C2.5 8.30003 1.8 9.60003 1.3 11.4C0.9 13.1 0.9 14.9 1.3 16.7C1.6 18.2 2.3 19.7 3.1 20.9C3.9 22.1 5 23 6.2 23.5C7.6 24.1 9 24.1 10.3 23.5C11.3 23 12.6 23 13.7 23.5C14.4 23.8 15.1 24 15.8 24C16.5 24 17.2 23.8 17.9 23.5C19 23 20.1 22.1 21 20.9C21.8 19.7 22.5 18.2 22.8 16.7C23.1 14.9 23.1 13.1 22.7 11.4ZM13.7 2.80003C14.9 1.70003 16.6 1.20003 18.2 1.40003C18.5 3.00003 18 4.60003 16.8 5.70003C15.9 6.60003 14.7 7.10003 13.5 7.10003C14.1 6.10003 15.2 5.10003 15.7 4.70003C16 4.50003 16.1 4.00003 15.8 3.70003C15.5 3.40003 15.1 3.30003 14.8 3.60003C14.6 3.80003 13.1 4.90003 12.3 6.30003C12.2 5.10003 12.6 3.80003 13.7 2.80003ZM21.3 16.4C21 17.8 20.4 19.1 19.7 20.1C19 21.1 18.2 21.8 17.3 22.2C16.3 22.6 15.3 22.6 14.4 22.2C13.7 21.9 12.9 21.7 12.1 21.7C11.3 21.7 10.5 21.9 9.8 22.2C8.9 22.6 7.9 22.6 6.9 22.2C6 21.8 5.1 21 4.5 20.1C3.8 19.1 3.2 17.7 2.9 16.4C2.5 14.8 2.5 13.2 2.9 11.7C3.3 10.2 3.8 9.20003 4.5 8.70003C5 8.20003 5.8 8.10003 7 8.30003C7.1 8.30003 9.9 9.00003 12 9.00003C12.1 9.00003 12.1 9.00003 12.2 9.00003C14.3 8.90003 16.8 8.40003 16.8 8.40003C18 8.20003 18.9 8.30003 19.5 8.80003C20.2 9.30003 20.7 10.3 21.1 11.8C21.6 13.2 21.6 14.8 21.3 16.4Z"></path>
          <path d="M5.6 14.3C5.6 13.9 5.3 13.6 4.9 13.6C4.5 13.6 4.1 13.9 4.1 14.3C3.9 16.7 5.3 18.5 5.3 18.5C5.4 18.7 5.7 18.8 5.9 18.8C6.1 18.8 6.2 18.8 6.3 18.7C6.6 18.5 6.7 18 6.5 17.7C6.5 17.6 5.4 16.2 5.6 14.3Z"></path>
          <path d="M4.69995 12.7001C4.79995 12.7001 4.79995 12.7001 4.69995 12.7001C5.19995 12.7001 5.49995 12.4001 5.49995 12.1001C5.49995 12.0001 5.59995 11.4001 5.89995 11.1001C6.19995 10.8001 6.09995 10.4001 5.79995 10.1001C5.49995 9.80008 4.99995 9.90008 4.79995 10.2001C4.19995 10.9001 4.09995 11.8001 4.09995 11.9001C3.99995 12.3001 4.29995 12.7001 4.69995 12.7001Z"></path>
        </svg>
      ),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M12 8.5C8.49998 8.5 5.59998 11.3 5.59998 14.9C5.59998 18.5 8.39998 21.3 12 21.3C15.6 21.3 18.4 18.5 18.4 14.9C18.4 11.3 15.5 8.5 12 8.5ZM16.9 14.1H15.5C15.4 12.8 15.1 11.6 14.7 10.7C15.9 11.5 16.7 12.7 16.9 14.1ZM11.3 10.2V14.1H9.89998C9.99998 12.3 10.6 10.8 11.3 10.2ZM11.3 15.5V19.4C10.6 18.8 9.99998 17.3 9.89998 15.5H11.3ZM12.7 19.4V15.5H14.1C14 17.4 13.4 18.8 12.7 19.4ZM12.7 14.1V10.2C13.4 10.8 14 12.3 14.1 14.1H12.7ZM9.29998 10.7C8.89998 11.6 8.59998 12.8 8.49998 14.1H7.09998C7.29998 12.7 8.09998 11.5 9.29998 10.7ZM7.09998 15.5H8.49998C8.59998 16.8 8.89998 18 9.29998 18.9C8.09998 18.2 7.29998 17 7.09998 15.5ZM14.7 18.9C15.1 18 15.4 16.8 15.5 15.5H16.9C16.7 17 15.9 18.2 14.7 18.9Z"></path>
          <path d="M23.3 0H0.7C0.3 0 0 0.3 0 0.7V23.3C0 23.7 0.3 24 0.7 24H23.3C23.7 24 24 23.7 24 23.3V0.7C24 0.3 23.7 0 23.3 0ZM22.6 1.4V5.6H1.4V1.4H22.6ZM1.4 22.6V7.1H22.6V22.6H1.4Z"></path>
          <path d="M3.49999 4.20005H17.6C18 4.20005 18.3 3.90005 18.3 3.50005C18.3 3.10005 18 2.80005 17.6 2.80005H3.49999C3.09999 2.80005 2.79999 3.10005 2.79999 3.50005C2.79999 3.90005 3.09999 4.20005 3.49999 4.20005Z"></path>
          <path d="M20.5 4.20005C20.8866 4.20005 21.2 3.88665 21.2 3.50005C21.2 3.11345 20.8866 2.80005 20.5 2.80005C20.1134 2.80005 19.8 3.11345 19.8 3.50005C19.8 3.88665 20.1134 4.20005 20.5 4.20005Z"></path>
        </svg>
      ),
      icon3: (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M11.4 10.4C11.1 10.1 10.7 10.1 10.4 10.4L4.40002 16.5C4.10002 16.8 4.10002 17.2 4.40002 17.5C4.50002 17.6 4.70002 17.7 4.90002 17.7C5.10002 17.7 5.30002 17.6 5.40002 17.5L11.4 11.4C11.7 11.1 11.7 10.7 11.4 10.4Z"></path>
          <path d="M12.4 12.4L6.40002 18.5C6.10002 18.8 6.10002 19.2 6.40002 19.5C6.50002 19.6 6.70002 19.7 6.90002 19.7C7.10002 19.7 7.30002 19.6 7.40002 19.5L13.4 13.4C13.7 13.1 13.7 12.7 13.4 12.4C13.1 12.2 12.7 12.2 12.4 12.4Z"></path>
          <path d="M23.2 0.800029C22.6 0.200029 21.8 -0.0999709 21 2.91411e-05C18.4 0.200029 15.4 3.60003 14.5 4.60003L10.4 5.00003C9.80001 5.10003 9.20001 5.50003 8.70001 5.90003L0.800012 13.9C-0.299988 15 -0.399988 16.9 0.700012 18L5.80001 23.2C6.30001 23.7 7.00001 24 7.80001 24C8.60001 24 9.30001 23.7 9.90001 23.1L17.8 15.1C18.3 14.6 18.6 14 18.6 13.3L19.1 8.40003C21.1 7.30003 23 5.70003 23.7 4.00003C24.2 2.80003 24 1.70003 23.2 0.800029ZM17.3 13.2C17.3 13.5 17.1 13.9 16.9 14.1L9.00001 22.1C8.70001 22.4 8.30001 22.6 7.90001 22.6C7.50001 22.6 7.20001 22.5 7.00001 22.2L1.80001 17C1.30001 16.4 1.30001 15.5 1.90001 14.9L9.80001 6.90003C10 6.70003 10.4 6.50003 10.7 6.50003L16.4 5.90003C16.8 5.80003 17.2 6.00003 17.5 6.30003C17.8 6.60003 17.9 7.00003 17.9 7.50003V7.60003C17.5 7.80003 17.2 7.90003 16.9 8.00003C16.8 7.80003 16.7 7.60003 16.5 7.40003C16 7.00003 15.5 6.70003 15 6.70003C14.4 6.70003 13.9 6.90003 13.5 7.30003C12.7 8.10003 12.7 9.50003 13.5 10.3C13.9 10.7 14.4 10.9 14.9 10.9C15.5 10.9 16 10.7 16.4 10.3C16.7 10 16.8 9.70003 16.9 9.30003C17.1 9.20003 17.4 9.20003 17.7 9.10003L17.3 13.2ZM15.2 9.40003C15.1 9.50003 14.9 9.50003 14.8 9.50003C14.7 9.50003 14.5 9.50003 14.4 9.30003C14.1 9.00003 14.2 8.60003 14.4 8.30003C14.5 8.20003 14.7 8.10003 14.9 8.10003C15 8.10003 15.1 8.10003 15.2 8.20003C15 8.30003 14.8 8.50003 14.8 8.80003C14.9 9.10003 15.1 9.30003 15.2 9.40003ZM22.4 3.50003C21.9 4.60003 20.6 5.80003 19.2 6.80003C19.1 6.20003 18.9 5.70003 18.4 5.30003C17.9 4.80003 17.2 4.50003 16.5 4.50003C17.8 3.20003 19.6 1.50003 21 1.40003C21.4 1.40003 21.8 1.50003 22.1 1.80003C22.5 2.10003 22.8 2.60003 22.4 3.50003Z"></path>
        </svg>
      ),
      lable: "Online",
      lable2: "Artical",
      lable3: "Free",
      avator: av1,
      name: "avatarTaya Iv",
    },
    {
      img: card,
      title: "How to shoot fine art at home",
      icon: (
        <svg width="16" height="16"  viewBox="0 0 24 24">
          <path d="M12 8.5C8.49998 8.5 5.59998 11.3 5.59998 14.9C5.59998 18.5 8.39998 21.3 12 21.3C15.6 21.3 18.4 18.5 18.4 14.9C18.4 11.3 15.5 8.5 12 8.5ZM16.9 14.1H15.5C15.4 12.8 15.1 11.6 14.7 10.7C15.9 11.5 16.7 12.7 16.9 14.1ZM11.3 10.2V14.1H9.89998C9.99998 12.3 10.6 10.8 11.3 10.2ZM11.3 15.5V19.4C10.6 18.8 9.99998 17.3 9.89998 15.5H11.3ZM12.7 19.4V15.5H14.1C14 17.4 13.4 18.8 12.7 19.4ZM12.7 14.1V10.2C13.4 10.8 14 12.3 14.1 14.1H12.7ZM9.29998 10.7C8.89998 11.6 8.59998 12.8 8.49998 14.1H7.09998C7.29998 12.7 8.09998 11.5 9.29998 10.7ZM7.09998 15.5H8.49998C8.59998 16.8 8.89998 18 9.29998 18.9C8.09998 18.2 7.29998 17 7.09998 15.5ZM14.7 18.9C15.1 18 15.4 16.8 15.5 15.5H16.9C16.7 17 15.9 18.2 14.7 18.9Z"></path>
          <path d="M23.3 0H0.7C0.3 0 0 0.3 0 0.7V23.3C0 23.7 0.3 24 0.7 24H23.3C23.7 24 24 23.7 24 23.3V0.7C24 0.3 23.7 0 23.3 0ZM22.6 1.4V5.6H1.4V1.4H22.6ZM1.4 22.6V7.1H22.6V22.6H1.4Z"></path>
          <path d="M3.49999 4.20005H17.6C18 4.20005 18.3 3.90005 18.3 3.50005C18.3 3.10005 18 2.80005 17.6 2.80005H3.49999C3.09999 2.80005 2.79999 3.10005 2.79999 3.50005C2.79999 3.90005 3.09999 4.20005 3.49999 4.20005Z"></path>
          <path d="M20.5 4.20005C20.8866 4.20005 21.2 3.88665 21.2 3.50005C21.2 3.11345 20.8866 2.80005 20.5 2.80005C20.1134 2.80005 19.8 3.11345 19.8 3.50005C19.8 3.88665 20.1134 4.20005 20.5 4.20005Z"></path>
        </svg>
      ),
      icon2: (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M22.7 11.4C22.2 9.50003 21.6 8.30003 20.5 7.60003C19.8 7.10003 18.9 6.80003 17.8 6.80003C19.4 5.20003 20 2.90003 19.4 0.700029C19.3 0.500029 19.1 0.300029 18.9 0.200029C16.6 -0.399971 14.2 0.200029 12.5 1.80003C11.8 2.50003 11.3 3.30003 11 4.20003C9.4 2.10003 6.8 2.00003 6.7 2.00003C6.3 2.00003 6 2.30003 6 2.70003C6 3.10003 6.3 3.40003 6.7 3.40003C6.8 3.40003 9.9 3.50003 10.8 6.90003C10.8 7.10003 10.8 7.30003 10.9 7.40003C9.1 7.30003 7.4 6.90003 7.3 6.90003C5.7 6.70003 4.4 6.90003 3.5 7.60003C2.5 8.30003 1.8 9.60003 1.3 11.4C0.9 13.1 0.9 14.9 1.3 16.7C1.6 18.2 2.3 19.7 3.1 20.9C3.9 22.1 5 23 6.2 23.5C7.6 24.1 9 24.1 10.3 23.5C11.3 23 12.6 23 13.7 23.5C14.4 23.8 15.1 24 15.8 24C16.5 24 17.2 23.8 17.9 23.5C19 23 20.1 22.1 21 20.9C21.8 19.7 22.5 18.2 22.8 16.7C23.1 14.9 23.1 13.1 22.7 11.4ZM13.7 2.80003C14.9 1.70003 16.6 1.20003 18.2 1.40003C18.5 3.00003 18 4.60003 16.8 5.70003C15.9 6.60003 14.7 7.10003 13.5 7.10003C14.1 6.10003 15.2 5.10003 15.7 4.70003C16 4.50003 16.1 4.00003 15.8 3.70003C15.5 3.40003 15.1 3.30003 14.8 3.60003C14.6 3.80003 13.1 4.90003 12.3 6.30003C12.2 5.10003 12.6 3.80003 13.7 2.80003ZM21.3 16.4C21 17.8 20.4 19.1 19.7 20.1C19 21.1 18.2 21.8 17.3 22.2C16.3 22.6 15.3 22.6 14.4 22.2C13.7 21.9 12.9 21.7 12.1 21.7C11.3 21.7 10.5 21.9 9.8 22.2C8.9 22.6 7.9 22.6 6.9 22.2C6 21.8 5.1 21 4.5 20.1C3.8 19.1 3.2 17.7 2.9 16.4C2.5 14.8 2.5 13.2 2.9 11.7C3.3 10.2 3.8 9.20003 4.5 8.70003C5 8.20003 5.8 8.10003 7 8.30003C7.1 8.30003 9.9 9.00003 12 9.00003C12.1 9.00003 12.1 9.00003 12.2 9.00003C14.3 8.90003 16.8 8.40003 16.8 8.40003C18 8.20003 18.9 8.30003 19.5 8.80003C20.2 9.30003 20.7 10.3 21.1 11.8C21.6 13.2 21.6 14.8 21.3 16.4Z"></path>
          <path d="M5.6 14.3C5.6 13.9 5.3 13.6 4.9 13.6C4.5 13.6 4.1 13.9 4.1 14.3C3.9 16.7 5.3 18.5 5.3 18.5C5.4 18.7 5.7 18.8 5.9 18.8C6.1 18.8 6.2 18.8 6.3 18.7C6.6 18.5 6.7 18 6.5 17.7C6.5 17.6 5.4 16.2 5.6 14.3Z"></path>
          <path d="M4.69995 12.7001C4.79995 12.7001 4.79995 12.7001 4.69995 12.7001C5.19995 12.7001 5.49995 12.4001 5.49995 12.1001C5.49995 12.0001 5.59995 11.4001 5.89995 11.1001C6.19995 10.8001 6.09995 10.4001 5.79995 10.1001C5.49995 9.80008 4.99995 9.90008 4.79995 10.2001C4.19995 10.9001 4.09995 11.8001 4.09995 11.9001C3.99995 12.3001 4.29995 12.7001 4.69995 12.7001Z"></path>
        </svg>
      ),
   
      icon3: (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M11.4 10.4C11.1 10.1 10.7 10.1 10.4 10.4L4.40002 16.5C4.10002 16.8 4.10002 17.2 4.40002 17.5C4.50002 17.6 4.70002 17.7 4.90002 17.7C5.10002 17.7 5.30002 17.6 5.40002 17.5L11.4 11.4C11.7 11.1 11.7 10.7 11.4 10.4Z"></path>
          <path d="M12.4 12.4L6.40002 18.5C6.10002 18.8 6.10002 19.2 6.40002 19.5C6.50002 19.6 6.70002 19.7 6.90002 19.7C7.10002 19.7 7.30002 19.6 7.40002 19.5L13.4 13.4C13.7 13.1 13.7 12.7 13.4 12.4C13.1 12.2 12.7 12.2 12.4 12.4Z"></path>
          <path d="M23.2 0.800029C22.6 0.200029 21.8 -0.0999709 21 2.91411e-05C18.4 0.200029 15.4 3.60003 14.5 4.60003L10.4 5.00003C9.80001 5.10003 9.20001 5.50003 8.70001 5.90003L0.800012 13.9C-0.299988 15 -0.399988 16.9 0.700012 18L5.80001 23.2C6.30001 23.7 7.00001 24 7.80001 24C8.60001 24 9.30001 23.7 9.90001 23.1L17.8 15.1C18.3 14.6 18.6 14 18.6 13.3L19.1 8.40003C21.1 7.30003 23 5.70003 23.7 4.00003C24.2 2.80003 24 1.70003 23.2 0.800029ZM17.3 13.2C17.3 13.5 17.1 13.9 16.9 14.1L9.00001 22.1C8.70001 22.4 8.30001 22.6 7.90001 22.6C7.50001 22.6 7.20001 22.5 7.00001 22.2L1.80001 17C1.30001 16.4 1.30001 15.5 1.90001 14.9L9.80001 6.90003C10 6.70003 10.4 6.50003 10.7 6.50003L16.4 5.90003C16.8 5.80003 17.2 6.00003 17.5 6.30003C17.8 6.60003 17.9 7.00003 17.9 7.50003V7.60003C17.5 7.80003 17.2 7.90003 16.9 8.00003C16.8 7.80003 16.7 7.60003 16.5 7.40003C16 7.00003 15.5 6.70003 15 6.70003C14.4 6.70003 13.9 6.90003 13.5 7.30003C12.7 8.10003 12.7 9.50003 13.5 10.3C13.9 10.7 14.4 10.9 14.9 10.9C15.5 10.9 16 10.7 16.4 10.3C16.7 10 16.8 9.70003 16.9 9.30003C17.1 9.20003 17.4 9.20003 17.7 9.10003L17.3 13.2ZM15.2 9.40003C15.1 9.50003 14.9 9.50003 14.8 9.50003C14.7 9.50003 14.5 9.50003 14.4 9.30003C14.1 9.00003 14.2 8.60003 14.4 8.30003C14.5 8.20003 14.7 8.10003 14.9 8.10003C15 8.10003 15.1 8.10003 15.2 8.20003C15 8.30003 14.8 8.50003 14.8 8.80003C14.9 9.10003 15.1 9.30003 15.2 9.40003ZM22.4 3.50003C21.9 4.60003 20.6 5.80003 19.2 6.80003C19.1 6.20003 18.9 5.70003 18.4 5.30003C17.9 4.80003 17.2 4.50003 16.5 4.50003C17.8 3.20003 19.6 1.50003 21 1.40003C21.4 1.40003 21.8 1.50003 22.1 1.80003C22.5 2.10003 22.8 2.60003 22.4 3.50003Z"></path>
        </svg>
      ),
      lable: "Online",
      lable2: "Artical",
      lable3: "Free",

      avator: av2,
      name: "avatarTaya Iv",
    },
  ];
  return (
    <div className="table_conatiner">
      {tabel.map(
        ({
          img,
          icon,
          lable,
          name,
          avator,
          title,
          lable2,
          lable3,
          icon2,
          icon3,
        }) => {
          return (
            <div className="table_section">
              <img src={img} alt="" className="img_section" />
              <span>{title}</span>

              <div className="in_icon">
              <div className="icon_table">
                  <div className="ico">{icon2}</div>
                  <p>{lable2}</p>
                </div>
                <div className="icon_table">
                  <div className="ico">{icon}</div>
                  <p>{lable}</p>
                </div>
               
                <div className="icon_table">
                  <div className="ico">{icon3}</div>
                  <p>{lable3}</p>
                </div>
              </div>

              <div className="table_datas">
                <div className="icon_table">
                  <div className="ico_img">
                    {" "}
                    <img src={avator} alt="" className="avator" />
                  </div>
                  <p>{name}</p>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Table;
