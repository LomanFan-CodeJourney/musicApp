/* eslint-disable prettier/prettier */
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { Box, Text, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import GradientLayout from '../components/gradientLayout';
import prisma from '../lib/prisma';
import { useMe } from '../lib/hooks';

const Home = ({artists}) => {
  const { user } = useMe();

  return (<GradientLayout roundImage color="green" subtitle="profile" title={`${user?.firstName} ${user?.lastName}`} description="15 public playlists" image="/profile-picture.jpg">
    <div>Homepage</div>
    <Box color="white" paddingX="40px">
      <Box marginBottom="40px">
        <Text fontSize="2xl" fontWeight="bold">Top artist this month</Text>
        <Text fontSize="md">only visible to you</Text>
      </Box>
      <Flex>
        {artists.map((artist) => (
          <Box paddingX="10px" width="20%">
            <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
              <Image src="https://placekitten.com/300/300" borderRadius="100%"/>
              <Box marginTop="20px">
                <Text fontSize="large">{artist.name}</Text>
                <Text fontSize="xs">Artist</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  </GradientLayout>)
};


export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: {artists},
  }
}

export default Home;