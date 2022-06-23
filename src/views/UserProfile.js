import ProfileForm from '../components/ProfileForm';
import classes from '../assets/styles/UserProfile.module.css';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
