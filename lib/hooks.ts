import useSWR from 'swr';
import fetcher from './fetcher';

export const useMe = () => {
  const { data, error } = useSWR('/me', fetcher); // useSWR pass "/me" to fetcher

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR('/playlist', fetcher);

  return {
    playlist: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};

// Use this hook every time making an api call to "/me". Whenever the user is updated and we update the cache at "/me", every component in the app will automatically get that update without an api call, useSWR does it for us (React query does similar thing.) There are multiple places need playlist, and useSWR guarantee that we only make one API call.
