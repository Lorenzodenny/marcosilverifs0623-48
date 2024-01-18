import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSongsAction } from '../redux/actions';
import ShowSongs from './ShowSongs';

const GetSong = ({ genere }) => {
  const songs = useSelector((state) => state.songs.results[genere] || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsAction(genere));
  }, [dispatch, genere]);

  return <ShowSongs songs={songs} />;
};

export default GetSong;
