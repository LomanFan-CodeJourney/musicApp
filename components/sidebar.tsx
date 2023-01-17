import NextImage from 'next/image';
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
} from 'react-icons';

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="195px" marginBottom="20px" paddingX="20px">
          <NextImage src="/moosic-monk-logo.svg" height={60} width={150} />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
