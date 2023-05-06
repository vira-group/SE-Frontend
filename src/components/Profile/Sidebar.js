import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import BedIcon from "@mui/icons-material/Bed";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddCardIcon from "@mui/icons-material/AddCard";

export default function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 profile-sidebar border mb-4 mb-lg-0">
      <div className="row">
        <Link
          href="/profile"
          class="nav-link link-dark sidebar-items d-lg-flex mb-lg-2"
        >
          <ModeEditOutlinedIcon color="primary" />
          <p className="mb-0">Edit Profile</p>
        </Link>

        <hr className="mb-2" />
        <Link
          href="/myhotels"
          class="nav-link link-dark sidebar-items d-lg-flex mb-lg-2"
        >
          <BedIcon color="primary" />
          <p className="mb-0">My Hotels</p>
        </Link>

        <hr className="mb-2" />
        {/* <Link to="#" class="nav-link link-dark sidebar-items d-lg-flex mb-lg-2">
          <CardTravelIcon className="icon-style" />
          <p className="mb-0">My Travels</p>
        </Link>
        <hr className="mb-2" /> */}
        <Link
          href="/profile/favorites"
          class="nav-link link-dark sidebar-items d-lg-flex mb-lg-2"
        >
          <FavoriteBorderIcon color="primary" />
          <p className="mb-0">Favorites</p>
        </Link>
        <hr className="mb-2" />

        <Link
          href="/profile/IncreaseCredit"
          class="nav-link link-dark sidebar-items d-lg-flex"
        >
          <AddCardIcon color="primary" />
          <p className="mb-0">Wallet</p>
        </Link>

        <hr className="mb-2" />

        <Link
          href="/profile/reservedrooms"
          class="nav-link link-dark sidebar-items d-lg-flex"
        >
          <BookmarkBorderIcon color="primary" />
          <p className="mb-0">Reservations</p>
        </Link>
      </div>
    </div>
  );
}
