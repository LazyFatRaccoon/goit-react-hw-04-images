import { Component } from 'react';
import SearchBar from './SearchBar'
import ImageGallery from './ImageGallery'
import LoadMoreBtn from './LoadMoreBtn'
import Loader from './Loader'




import * as API from '../services/api'

const PER_PAGE = 20;

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
  }

  changeQuery = (query) => {
    this.setState({query})
  }

  takeQuery = async (query) => {
      await this.setState({isLoading: true})
      const images = await API.getImages(query, this.state.page, PER_PAGE)
      this.setState(state => ({images: [...state.images, ...images.hits], isLoading: false}))
      
  }

  loadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  

  async componentDidUpdate(_, prevState) {
    console.log(`1, ${prevState.page},  ${this.state.page}`)
    if (prevState.page +1 === this.state.page) {this.takeQuery(this.state.query)
      
    return}
    if (prevState.query !== this.state.query) {
      console.log(2)
      await this.setState({page: 1, images: []})
      this.takeQuery(this.state.query)}
  }

  render() {
    return (
      <>

        <SearchBar onInputChange={this.changeQuery}/>
        <ImageGallery images={this.state.images}/>
        {this.state.isLoading && <Loader/>}
        {this.state.images.length > 0 && !this.state.isLoading ?  <LoadMoreBtn onClick={this.loadMore}/> :  ''}
      </>
    );
  }
};

export default App
