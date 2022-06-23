import { Link } from 'react-router-dom';
import classes from '../assets/styles/StartingPageContent.module.css';
import AuthForm from '../components/AuthForm';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <Link to={<AuthForm/>}>{`Login`}</Link>
    </section>
  );
};

export default StartingPageContent;
