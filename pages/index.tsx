/* eslint-disable prettier/prettier */
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import GradientLayout from '../components/gradientLayout';

const Home = () => {
  return (<GradientLayout roundImage color="green" subtitle="profile" title="Loman Fan" description="15 public playlists" image="/profile-picture.jpg">
    <div>Homepage</div>
  </GradientLayout>)
};

export default Home;