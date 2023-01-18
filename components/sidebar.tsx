import NextImage from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout';

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md';

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'My Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
];

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Favorities',
    icon: MdFavorite,
    route: '/favorites',
  },
];

const Sidebar = () => (
  <Box
    width="100%"
    height="calc(100vh - 100px)"
    bg="black"
    paddingX="5px"
    color="gray"
  >
    <Box paddingY="20px">
      <Box width="195px" marginBottom="0px" paddingX="20px">
        <NextImage src="/moosic-monk-logo.svg" height={60} width={150} />
      </Box>
      <Box marginBottom="20px">
        <List spacing={2}>
          {navMenu.map((item) => (
            <ListItem paddingX="20px" fontSize="16px" key={item.name}>
              <LinkBox>
                <NextLink href={item.route} passHref>
                  <LinkOverlay>
                    <ListIcon as={item.icon} color="white" marginRight="20px" />
                    {item.name}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box marginTop="20px">
        <List spacing={2}>
          {musicMenu.map((item) => {
            return (
              <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Divider color="gray.800" />
    </Box>
  </Box>
);

export default Sidebar;
