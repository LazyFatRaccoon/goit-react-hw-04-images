import {Button} from './style'

const LoadMoreBtn = ({onClick}) => {
    return <>
        <Button type='button' onClick={()=>onClick()}>
            Load More
        </Button>
    </>
}

export default LoadMoreBtn