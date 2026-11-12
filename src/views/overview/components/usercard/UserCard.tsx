import { Link } from "react-router-dom";
import {
  FaAddressBook,
  FaBirthdayCake,
  FaEnvelope,
  FaGlobe,
  FaPhoneAlt,
  FaVenusMars,
} from "react-icons/fa";
import DeleteButton from "../../../../components/button/DeleteButton";
import type { User } from "../../../../types/User";

const USER_IMAGE_URL = "https://randomuser.me/api/portraits/men/75.jpg";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  const formattedDateOfBirth = new Date(user.dateOfBirth).toLocaleDateString(
    "de-DE",
  );

  return (
    <article className="user-card">
      <Link className="user-card__link" to={`/edit/${user.id}`}>
        <img
          className="user-card__image"
          src={USER_IMAGE_URL}
          alt={user.username}
        />
        <div className="user-card__content">
          <h2 className="user-card__name">{user.username}</h2>
          <div className="user-card__details">
            <span className="user-card__detail">
              <FaBirthdayCake /> {formattedDateOfBirth}
            </span>
            <span className="user-card__detail">
              <FaAddressBook /> {user.postalAddress}
            </span>
            <span className="user-card__detail">
              <FaVenusMars /> {user.gender}
            </span>
            <span className="user-card__detail">
              <FaPhoneAlt /> {user.phoneNumber}
            </span>
            <span className="user-card__detail">
              <FaEnvelope /> {user.email}
            </span>
            <span className="user-card__detail">
              <FaGlobe /> {user.website}
            </span>
          </div>
        </div>
      </Link>
      <DeleteButton />
    </article>
  );
}

export default UserCard;
