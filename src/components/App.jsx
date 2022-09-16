import { useState, useRef, useEffect } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import LoadMoreBtn from './LoadMoreBtn';
import Loader from './Loader';
import { ThemeProvider } from '@emotion/react';
import { Div } from './style';

import * as API from '../services/api';

const PER_PAGE = 20;

const themeLight = {
  mainBackground: 'white',
  inputBackground: 'white',
  inputText: 'black',
  accentColor: '#5e25a8',
  sizes: {
    small: 20,
    medium: 40,
    big: 60,
  },
  imageSizes: {
    width: 600,
    height: 400,
  },
};

const themeDark = {
  mainBackground: '#395B64',
  inputBackground: '#2C3333',
  inputText: 'white',
  accentColor: '#5e25a8',
  sizes: {
    small: 20,
    medium: 40,
    big: 60,
  },
  imageSizes: {
    width: 600,
    height: 400,
  },
};

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lightTheme, setLightTheme] = useState(true);
  const [total, setTotal] = useState(0);

  const changeQuery = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    window.scrollTo({
      top: 0,
    });
  };

  

  const loadMore = () => {
    console.log('load button pushed');
    setPage(prevState => prevState + 1);
  };

  const onThemeChange = () => {
    setLightTheme(prevState => !prevState);
  };

   const firstUpdateQuery = useRef(true);


  useEffect(() => {
    if (firstUpdateQuery.current) {
      firstUpdateQuery.current = false;
      return;
    }
    async function takeQuery(query) {
      try {
        setIsLoading(true);
        const images = await API.getImages(
          query,
          page,
          PER_PAGE
        );
        setImages(prevState => [...prevState, ...images.hits]);
        setTotal(images.total);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    

    takeQuery(query);
  
  
  }, [query, page]);

  // useEffect(() => {
  //   if (firstUpdatePage.current) {
  //     firstUpdatePage.current = false;
  //     return;
  //   }
  //   takeQuery(query);
  // }, [page]);

  return (
    <>
      <ThemeProvider theme={lightTheme ? themeLight : themeDark}>
        <Div>
          <SearchBar
            currentTheme={lightTheme}
            onThemeChange={onThemeChange}
            onInputChange={changeQuery}
          />
          <ImageGallery images={images} />

          {images.length > 0 && !isLoading && page * PER_PAGE < total ? (
            <LoadMoreBtn onClick={loadMore} />
          ) : (
            isLoading && <Loader />
          )}
        </Div>
      </ThemeProvider>
    </>
  );
}

export default App;
