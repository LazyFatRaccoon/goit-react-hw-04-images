import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import LoadMoreBtn from './LoadMoreBtn';
import Loader from './Loader';
import { ThemeProvider} from "@emotion/react"
import {Div} from './style'

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

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    lightTheme: true,
    total: 0,
  };

  changeQuery = query => {
    this.setState({ query });
  };

  takeQuery = async query => {
    try {
      await this.setState({ isLoading: true });
      const images = await API.getImages(query, this.state.page, PER_PAGE);
      this.setState(state => ({ images: [...state.images, ...images.hits] }));
      this.setState({ total: images.total });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onThemeChange = () => {
    this.setState(prevState => ({ lightTheme: !prevState.lightTheme }));
  };

  async componentDidUpdate(_, prevState) {
    //console.log(`1, ${prevState.page},  ${this.state.page}`)
    if (prevState.page + 1 === this.state.page) {
      this.takeQuery(this.state.query);

      return;
    }
    if (prevState.query !== this.state.query) {
      await this.setState({ page: 1, images: [] });
      this.takeQuery(this.state.query);
    }
  }

  render() {
    return (
      <>
      <ThemeProvider theme={this.state.lightTheme ? themeLight : themeDark}>
        <Div>
        <SearchBar
          currentTheme={this.state.lightTheme}
          onThemeChange={this.onThemeChange}
          onInputChange={this.changeQuery}
        />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading && <Loader />}
        {this.state.images.length > 0 &&
        !this.state.isLoading &&
        this.state.page * PER_PAGE < this.state.total ? (
          <LoadMoreBtn onClick={this.loadMore} />
        ) : (
          ''
        )}
        </Div>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
