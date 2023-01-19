import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdEventSeat } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import {
  BsFillChatLeftFill,
  BsFillBookmarkStarFill,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sideContainer">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <AiFillHome className="sidebarIcon" />
            <span className="sidebarText">Home</span>
          </li>
          <li className="sidebarListItem">
            <BsFillChatLeftFill className="sidebarIcon" />
            <span className="sidebarText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <BsFillCameraVideoFill className="sidebarIcon" />
            <span className="sidebarText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <FaUserFriends className="sidebarIcon" />
            <span className="sidebarText">Friends</span>
          </li>
          <li className="sidebarListItem">
            <BsFillBookmarkStarFill className="sidebarIcon" />
            <span className="sidebarText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <MdEventSeat className="sidebarIcon" />
            <span className="sidebarText">Events</span>
          </li>
          <li className="sidebarListItem">
            <FiLogOut className="sidebarIcon" />
            <span className="sidebarText">Logout</span>
          </li>
        </ul>
        <hr className="border-b border-gray-400 mt-5 opacity-60" />

        <div className="mt-6 pageItem">
          <div className=" flex items-center mt-4">
            <img
              className="h-10 w-10 rounded-full ml-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJnuSzLJ_pnB1vY08vn3RSbsfT0KpmTGWkltv0G3g-RC0OQHjM61dQNkgs7y4KkbiBHE&usqp=CAU"
              alt=""
            />
            <h5 className="ml-4 text-[#011631] font-semibold">
              Ripas Sorker Rifat
            </h5>
          </div>
          <div className=" flex items-center mt-4">
            <img
              className="h-10 w-10 rounded-full ml-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJnuSzLJ_pnB1vY08vn3RSbsfT0KpmTGWkltv0G3g-RC0OQHjM61dQNkgs7y4KkbiBHE&usqp=CAU"
              alt=""
            />
            <h5 className="ml-4 text-[#011631] font-semibold">
              Sohanur Rahaman
            </h5>
          </div>
          <div className=" flex items-center mt-4">
            <img
              className="h-10 w-10 rounded-full ml-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJnuSzLJ_pnB1vY08vn3RSbsfT0KpmTGWkltv0G3g-RC0OQHjM61dQNkgs7y4KkbiBHE&usqp=CAU"
              alt=""
            />
            <h5 className="ml-4 text-[#011631] font-semibold">Liton Sorker</h5>
          </div>
          <div className=" flex items-center mt-4">
            <img
              className="h-10 w-10 rounded-full ml-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJnuSzLJ_pnB1vY08vn3RSbsfT0KpmTGWkltv0G3g-RC0OQHjM61dQNkgs7y4KkbiBHE&usqp=CAU"
              alt=""
            />
            <h5 className="ml-4 text-[#011631] font-semibold">
              Ripas Sorker Rifat
            </h5>
          </div>
        </div>
        <hr className="border-b pageHr border-gray-400 mt-5 opacity-60 hidden md:block" />

        <div className="mt-6 groupItem">
          <div className=" flex items-center mt-4">
            <img
              className="h-10 w-10 rounded-full ml-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJnuSzLJ_pnB1vY08vn3RSbsfT0KpmTGWkltv0G3g-RC0OQHjM61dQNkgs7y4KkbiBHE&usqp=CAU"
              alt=""
            />
            <h5 className="ml-4 text-[#011631] font-semibold">
              Ripas Sorker Rifat
            </h5>
          </div>
          <div className=" flex items-center mt-4">
            <img
              className="h-10 w-10 rounded-full ml-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJnuSzLJ_pnB1vY08vn3RSbsfT0KpmTGWkltv0G3g-RC0OQHjM61dQNkgs7y4KkbiBHE&usqp=CAU"
              alt=""
            />
            <h5 className="ml-4 text-[#011631] font-semibold">
              Sohanur Rahaman
            </h5>
          </div>
          <div className="flex items-center mt-4">
            <img
              className="h-10 w-10 rounded-full ml-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJnuSzLJ_pnB1vY08vn3RSbsfT0KpmTGWkltv0G3g-RC0OQHjM61dQNkgs7y4KkbiBHE&usqp=CAU"
              alt=""
            />
            <h5 className="ml-4 text-[#011631] font-semibold">Liton Sorker</h5>
          </div>
          <div className="flex items-center mt-4">
            <img
              className="h-10 w-10 rounded-full ml-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJnuSzLJ_pnB1vY08vn3RSbsfT0KpmTGWkltv0G3g-RC0OQHjM61dQNkgs7y4KkbiBHE&usqp=CAU"
              alt=""
            />
            <h5 className="ml-4 text-[#011631] font-semibold">
              Ripas Sorker Rifat
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
