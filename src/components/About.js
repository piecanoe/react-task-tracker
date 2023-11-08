import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h4>Version 1.0.0</h4>
        <p>Made by <Link to='https://karendu.netlify.app'>Karen Du</Link>
        </p>
        <Link to="/">Go Back</Link>
    </div>
  )
}

export default About