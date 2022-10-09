import React from "react";
import {  FaCamera } from "react-icons/fa";
import user from "../../images/user.png";
import { Link } from "react-router-dom";
import "./style.css";
import { AiOutlineMenu } from "react-icons/ai";

import { CardEdit } from "../portofilo/ProfileCard";
function EditProfile() {
  return (
    <div className="edit_container">
      <div className="edit_lable">
        <span>Edit Profile</span>
      </div>
      <div className="edit">
        <div className="first_banner">
        <div className="cover_imgs">
          <div className="change_img_cover">
            <FaCamera />
            Change cover photo{" "}
          </div>
        </div>
        <div className="banner_user_img">
          <div className="avator_profile">
            <img src={user} alt="" />
            <Link to="">pro</Link>
          </div>
        </div>
        </div>
        <form className="form_profile_edit">
          <div className="input_edit_profile">
            <label>First name</label>
            <input type="text" />
          </div>
          <div className="input_edit_profile">
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div className="input_edit_profile">
            <label>City</label>
            <input type="text" />
          </div>
          <div className="input_edit_profile">
            <label>Country</label>
            <input type="text" />
          </div>
          <div className="about_edit">
            <div className="input_edit_profile">
              <label>About</label>
              <textarea></textarea>
            </div>
          </div>
          <br /> <br />
          <div className="input_edit_profile">
            <label>Website</label>
            <input type="text" />
          </div>
          <div className="input_edit_profile">
            <label>instgram</label>
            <input type="text" />
          </div>
          <div className="input_edit_profile">
            <label>Twitter</label>
            <input type="text" />
          </div>
          <div className="input_edit_profile">
            <label>Facebook</label>
            <input type="text" />
          </div>
        </form>
        <div className="section_card_edit">
          <CardEdit
            d="M8.9 18.3H0.7C0.3 18.3 0 18 0 17.6V6.39995V0.7C0 0.3 0.3 0 0.7 0H17.6C18 0 18.3 0.3 18.3 0.7V6.39995V8.8C18.3 9.2 18 9.5 17.6 9.5C17.2 9.5 16.9 9.2 16.9 8.8V7.09995H1.4V16.9H8.9C9.3 16.9 9.6 17.2 9.6 17.6C9.6 18 9.3 18.3 8.9 18.3ZM1.4 1.4V5.69995H16.9V1.4H1.4ZM3.49999 4.20005H12C12.4 4.20005 12.7 3.90005 12.7 3.50005C12.7 3.10005 12.4 2.80005 12 2.80005H3.49999C3.09999 2.80005 2.79999 3.10005 2.79999 3.50005C2.79999 3.90005 3.09999 4.20005 3.49999 4.20005ZM14.8 4.20005C15.1866 4.20005 15.5 3.88665 15.5 3.50005C15.5 3.11345 15.1866 2.80005 14.8 2.80005C14.4134 2.80005 14.1 3.11345 14.1 3.50005C14.1 3.88665 14.4134 4.20005 14.8 4.20005ZM11.8312 21.4312L11.2687 20.8687L10.8 21.8999L11.8312 21.4312ZM10.5 19.0999C10.302 19.2979 10.2347 19.5394 10.298 19.767L8.89997 22.9999C8.69997 23.2999 8.79997 23.5999 8.99997 23.7999C9.09997 23.8999 9.29997 23.9999 9.49997 23.9999C9.49997 23.9999 9.59997 23.9999 9.79997 23.8999L13.5 22.2999C13.6582 22.2208 13.8165 22.079 13.8757 21.9242L21.5471 14.2528C21.6089 14.2236 21.6618 14.1764 21.7 14.1L23.4 12.4C24.2 11.6 24.2 10.3 23.4 9.49995L23.2 9.29995C22.4 8.49995 21.1 8.49995 20.3 9.29995L18.606 10.9939L18.6 10.9999L10.5 19.0999ZM21.2 12.5999L20.1 11.4999L21.3 10.3C21.5 9.99995 21.9 9.99995 22.2 10.3L22.4 10.5C22.7 10.7 22.7 11.1 22.4 11.4L21.2 12.5999ZM19.0999 12.4999L12.05 19.5499L13.15 20.6499L20.1999 13.5999L19.0999 12.4999ZM7.79999 12.7H3.49999C3.09999 12.7 2.79999 12.4 2.79999 12V9.2C2.79999 8.8 3.09999 8.5 3.49999 8.5H7.69999C8.09999 8.5 8.39999 8.8 8.39999 9.2V12C8.49999 12.4 8.19999 12.7 7.79999 12.7ZM4.19999 11.3H6.99999V9.9H4.19999V11.3ZM10.6 12.7H14.8C15.2 12.7 15.5 12.4 15.5 12V9.2C15.5 8.8 15.2 8.5 14.8 8.5H10.6C10.2 8.5 9.90002 8.8 9.90002 9.2V12C9.90002 12.4 10.2 12.7 10.6 12.7ZM14.1 11.3H11.3V9.9H14.1V11.3Z"
            title="Customize your Profile"
            para={
              <>
                Rearrange, hide, and add tabs to make your Profile page unique
                to
                <br />
                you and put your best work forward.
              </>
            }
            d2="M24 9.5C24 9.5 24 9.4 24 9.5C24 9.3 24 9.2 23.9 9.1L21.1 3.4C21.1 3.3 21 3.2 20.9 3.2C20.9 3.2 20.9 3.2 20.8 3.2C20.7 3 20.6 3 20.5 3C20.5 3 20.5 3 20.4 3H3.5C3.5 3 3.5 3 3.4 3C3.4 3 3.3 3 3.2 3.1C3.2 3.1 3.2 3.1 3.1 3.1C3 3.2 3 3.3 2.9 3.4L0.1 9.1C0 9.2 0 9.3 0 9.4C0 9.4 0 9.4 0 9.5V9.6C0 9.7 0.1 9.8 0.1 9.9L11.4 22.8C11.4 22.8 11.4 22.8 11.5 22.9C11.5 22.9 11.5 22.9 11.6 22.9C11.6 22.9 11.7 22.9 11.7 23C11.8 23 11.9 23 11.9 23H12.1C12.1 23 12.2 23 12.2 22.9C12.2 22.9 12.2 22.9 12.3 22.9C12.3 22.9 12.4 22.9 12.4 22.8L23.8 9.9C23.9 9.8 23.9 9.7 24 9.5ZM3.6 5.1L6.2 8.7H1.8L3.6 5.1ZM15.4 10.1L12 20.1L8.6 10.1H15.4ZM9.1 8.7L12 4.9L14.9 8.7H9.1ZM13.4 4.4H19L16.3 8.2L13.4 4.4ZM7.6 8.2L4.9 4.4H10.5L7.6 8.2ZM7.1 10.1L10.2 19.1L2.3 10.1H7.1ZM16.9 10.1H21.7L13.8 19.1L16.9 10.1ZM17.8 8.7L20.4 5.1L22.2 8.7H17.8Z"
            name="Pro"
          />
          <div className="edit_advertisment">
            <svg width="35" height="35" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="rgb(127, 193, 255)"
                d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C23.9922 5.37581 18.6242 0.00777945 12 0Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4119 6.91628C13.4119 7.69598 12.7798 8.32805 12.0001 8.32805C11.2204 8.32805 10.5884 7.69598 10.5884 6.91628C10.5884 6.13659 11.2204 5.50452 12.0001 5.50452C12.7798 5.50452 13.4119 6.13659 13.4119 6.91628ZM10.6858 11.0118C10.6858 10.2321 11.3179 9.60005 12.0976 9.60005C12.8773 9.60005 13.5093 10.2321 13.5093 11.0118V17.7883C13.5093 18.568 12.8773 19.2001 12.0976 19.2001C11.3179 19.2001 10.6858 18.568 10.6858 17.7883V11.0118Z"
              ></path>
            </svg>
            <span>
              If Resource tab is private, any published content will still be
              visible on the Resource Hub.
            </span>
          </div>
        </div>
        <div className="table_edit_profile">
          <div className="edit_banner1">
            <hr></hr>
            <div className="edit_content">
              <div className="left_content">
                <AiOutlineMenu />
                <span>Photos</span>
              </div>
              <div className="right_content">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M23.9 11.6C21.4 7.5 16.9 5 12 5C7.10002 5 2.60002 7.5 0.100024 11.6C2.44156e-05 11.8 2.44156e-05 12.1 0.100024 12.4C2.60002 16.5 7.10002 19 12 19C16.9 19 21.4 16.5 23.9 12.4C24 12.1 24 11.9 23.9 11.6ZM17.7 12C17.7 15 15.2 17.4 12 17.4C8.80002 17.4 6.30002 15 6.30002 12C6.30002 9 8.90002 6.6 12 6.6C15.1 6.6 17.7 9 17.7 12ZM1.80002 12C2.90002 10.4 4.30002 9.1 6.00002 8.1C5.20002 9.3 4.70002 10.6 4.70002 12C4.70002 13.4 5.10002 14.7 5.90002 15.9C4.30002 14.9 2.80002 13.6 1.80002 12ZM18.1 15.9C18.9 14.8 19.3 13.5 19.3 12C19.3 10.6 18.9 9.3 18.1 8.1C19.8 9 21.2 10.3 22.3 12C21.2 13.6 19.7 14.9 18.1 15.9Z"></path>
                  <path d="M12 15.1C13.7674 15.1 15.2 13.7121 15.2 12C15.2 10.2879 13.7674 8.90002 12 8.90002C10.2327 8.90002 8.80005 10.2879 8.80005 12C8.80005 13.7121 10.2327 15.1 12 15.1Z"></path>
                </svg>

                <span>Show</span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M4.44733 8.442C4.4474 8.0823 4.66412 7.75804 4.99645 7.6204C5.32878 7.48275 5.71131 7.55882 5.9657 7.81313L12.4528 14.3002L18.9399 7.81313C19.2889 7.47604 19.8437 7.48086 20.1868 7.82397C20.5299 8.16708 20.5347 8.72186 20.1976 9.07088L13.0817 16.1868C12.7343 16.5341 12.1713 16.5341 11.8239 16.1868L4.70795 9.07088C4.54112 8.9041 4.44738 8.67789 4.44733 8.442Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="edit_banner1">
            <hr></hr>
            <div className="edit_content">
              <div className="left_content">
                <AiOutlineMenu />
                <span>Photos</span>
              </div>
              <div className="right_content">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M23.9 11.6C21.4 7.5 16.9 5 12 5C7.10002 5 2.60002 7.5 0.100024 11.6C2.44156e-05 11.8 2.44156e-05 12.1 0.100024 12.4C2.60002 16.5 7.10002 19 12 19C16.9 19 21.4 16.5 23.9 12.4C24 12.1 24 11.9 23.9 11.6ZM17.7 12C17.7 15 15.2 17.4 12 17.4C8.80002 17.4 6.30002 15 6.30002 12C6.30002 9 8.90002 6.6 12 6.6C15.1 6.6 17.7 9 17.7 12ZM1.80002 12C2.90002 10.4 4.30002 9.1 6.00002 8.1C5.20002 9.3 4.70002 10.6 4.70002 12C4.70002 13.4 5.10002 14.7 5.90002 15.9C4.30002 14.9 2.80002 13.6 1.80002 12ZM18.1 15.9C18.9 14.8 19.3 13.5 19.3 12C19.3 10.6 18.9 9.3 18.1 8.1C19.8 9 21.2 10.3 22.3 12C21.2 13.6 19.7 14.9 18.1 15.9Z"></path>
                  <path d="M12 15.1C13.7674 15.1 15.2 13.7121 15.2 12C15.2 10.2879 13.7674 8.90002 12 8.90002C10.2327 8.90002 8.80005 10.2879 8.80005 12C8.80005 13.7121 10.2327 15.1 12 15.1Z"></path>
                </svg>

                <span>Show</span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M4.44733 8.442C4.4474 8.0823 4.66412 7.75804 4.99645 7.6204C5.32878 7.48275 5.71131 7.55882 5.9657 7.81313L12.4528 14.3002L18.9399 7.81313C19.2889 7.47604 19.8437 7.48086 20.1868 7.82397C20.5299 8.16708 20.5347 8.72186 20.1976 9.07088L13.0817 16.1868C12.7343 16.5341 12.1713 16.5341 11.8239 16.1868L4.70795 9.07088C4.54112 8.9041 4.44738 8.67789 4.44733 8.442Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="edit_banner1">
            <hr></hr>
            <div className="edit_content">
              <div className="left_content">
                <AiOutlineMenu />
                <span>Photos</span>
              </div>
              <div className="right_content">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M23.9 11.6C21.4 7.5 16.9 5 12 5C7.10002 5 2.60002 7.5 0.100024 11.6C2.44156e-05 11.8 2.44156e-05 12.1 0.100024 12.4C2.60002 16.5 7.10002 19 12 19C16.9 19 21.4 16.5 23.9 12.4C24 12.1 24 11.9 23.9 11.6ZM17.7 12C17.7 15 15.2 17.4 12 17.4C8.80002 17.4 6.30002 15 6.30002 12C6.30002 9 8.90002 6.6 12 6.6C15.1 6.6 17.7 9 17.7 12ZM1.80002 12C2.90002 10.4 4.30002 9.1 6.00002 8.1C5.20002 9.3 4.70002 10.6 4.70002 12C4.70002 13.4 5.10002 14.7 5.90002 15.9C4.30002 14.9 2.80002 13.6 1.80002 12ZM18.1 15.9C18.9 14.8 19.3 13.5 19.3 12C19.3 10.6 18.9 9.3 18.1 8.1C19.8 9 21.2 10.3 22.3 12C21.2 13.6 19.7 14.9 18.1 15.9Z"></path>
                  <path d="M12 15.1C13.7674 15.1 15.2 13.7121 15.2 12C15.2 10.2879 13.7674 8.90002 12 8.90002C10.2327 8.90002 8.80005 10.2879 8.80005 12C8.80005 13.7121 10.2327 15.1 12 15.1Z"></path>
                </svg>

                <span>Show</span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M4.44733 8.442C4.4474 8.0823 4.66412 7.75804 4.99645 7.6204C5.32878 7.48275 5.71131 7.55882 5.9657 7.81313L12.4528 14.3002L18.9399 7.81313C19.2889 7.47604 19.8437 7.48086 20.1868 7.82397C20.5299 8.16708 20.5347 8.72186 20.1976 9.07088L13.0817 16.1868C12.7343 16.5341 12.1713 16.5341 11.8239 16.1868L4.70795 9.07088C4.54112 8.9041 4.44738 8.67789 4.44733 8.442Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="edit_banner1">
            <hr></hr>
            <div className="edit_content">
              <div className="left_content">
                <AiOutlineMenu />
                <span>Photos</span>
              </div>
              <div className="right_content">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M23.9 11.6C21.4 7.5 16.9 5 12 5C7.10002 5 2.60002 7.5 0.100024 11.6C2.44156e-05 11.8 2.44156e-05 12.1 0.100024 12.4C2.60002 16.5 7.10002 19 12 19C16.9 19 21.4 16.5 23.9 12.4C24 12.1 24 11.9 23.9 11.6ZM17.7 12C17.7 15 15.2 17.4 12 17.4C8.80002 17.4 6.30002 15 6.30002 12C6.30002 9 8.90002 6.6 12 6.6C15.1 6.6 17.7 9 17.7 12ZM1.80002 12C2.90002 10.4 4.30002 9.1 6.00002 8.1C5.20002 9.3 4.70002 10.6 4.70002 12C4.70002 13.4 5.10002 14.7 5.90002 15.9C4.30002 14.9 2.80002 13.6 1.80002 12ZM18.1 15.9C18.9 14.8 19.3 13.5 19.3 12C19.3 10.6 18.9 9.3 18.1 8.1C19.8 9 21.2 10.3 22.3 12C21.2 13.6 19.7 14.9 18.1 15.9Z"></path>
                  <path d="M12 15.1C13.7674 15.1 15.2 13.7121 15.2 12C15.2 10.2879 13.7674 8.90002 12 8.90002C10.2327 8.90002 8.80005 10.2879 8.80005 12C8.80005 13.7121 10.2327 15.1 12 15.1Z"></path>
                </svg>

                <span>Show</span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M4.44733 8.442C4.4474 8.0823 4.66412 7.75804 4.99645 7.6204C5.32878 7.48275 5.71131 7.55882 5.9657 7.81313L12.4528 14.3002L18.9399 7.81313C19.2889 7.47604 19.8437 7.48086 20.1868 7.82397C20.5299 8.16708 20.5347 8.72186 20.1976 9.07088L13.0817 16.1868C12.7343 16.5341 12.1713 16.5341 11.8239 16.1868L4.70795 9.07088C4.54112 8.9041 4.44738 8.67789 4.44733 8.442Z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="edit_banner1">
            <hr></hr>
            <div className="edit_content">
              <div className="left_content">
                <AiOutlineMenu />
                <span>Photos</span>
              </div>
              <div className="right_content">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20.3 9.9H18.2V6.4C18.2 2.8 15.4 0 12 0C8.6 0 5.8 2.8 5.8 6.4V9.9H3.7C3.3 9.9 3 10.2 3 10.6V23.3C3 23.7 3.3 24 3.7 24H20.3C20.7 24 21 23.7 21 23.3V10.6C21 10.2 20.7 9.9 20.3 9.9ZM7.2 6.4C7.2 3.7 9.4 1.5 12 1.5C14.6 1.5 16.8 3.7 16.8 6.4V9.9H7.2V6.4ZM19.6 22.6H4.4V11.3H6.5H17.6H19.7V22.6H19.6Z"></path>
                </svg>

                <span>Show</span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M4.44733 8.442C4.4474 8.0823 4.66412 7.75804 4.99645 7.6204C5.32878 7.48275 5.71131 7.55882 5.9657 7.81313L12.4528 14.3002L18.9399 7.81313C19.2889 7.47604 19.8437 7.48086 20.1868 7.82397C20.5299 8.16708 20.5347 8.72186 20.1976 9.07088L13.0817 16.1868C12.7343 16.5341 12.1713 16.5341 11.8239 16.1868L4.70795 9.07088C4.54112 8.9041 4.44738 8.67789 4.44733 8.442Z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="edit_banner1">
            <hr></hr>
            <div className="edit_content">
              <div className="left_content">
                <AiOutlineMenu />
                <span>Photos</span>
              </div>
              <div className="right_content">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20.3 9.9H18.2V6.4C18.2 2.8 15.4 0 12 0C8.6 0 5.8 2.8 5.8 6.4V9.9H3.7C3.3 9.9 3 10.2 3 10.6V23.3C3 23.7 3.3 24 3.7 24H20.3C20.7 24 21 23.7 21 23.3V10.6C21 10.2 20.7 9.9 20.3 9.9ZM7.2 6.4C7.2 3.7 9.4 1.5 12 1.5C14.6 1.5 16.8 3.7 16.8 6.4V9.9H7.2V6.4ZM19.6 22.6H4.4V11.3H6.5H17.6H19.7V22.6H19.6Z"></path>
                </svg>

                <span>Show</span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M4.44733 8.442C4.4474 8.0823 4.66412 7.75804 4.99645 7.6204C5.32878 7.48275 5.71131 7.55882 5.9657 7.81313L12.4528 14.3002L18.9399 7.81313C19.2889 7.47604 19.8437 7.48086 20.1868 7.82397C20.5299 8.16708 20.5347 8.72186 20.1976 9.07088L13.0817 16.1868C12.7343 16.5341 12.1713 16.5341 11.8239 16.1868L4.70795 9.07088C4.54112 8.9041 4.44738 8.67789 4.44733 8.442Z"></path>
                </svg>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
        <div className="edit_btns">
          <button className="edit_btn">Cancel</button>
          <button className="edit_btn edit_save">Save</button>
        </div>
        <div className="last_para">
          <span>
            Visit your <span>Settings page</span> to change your password,
            username, connect to social networks, add gear, and more.
          </span>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
