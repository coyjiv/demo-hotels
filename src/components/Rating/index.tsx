import { memo } from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
type IRating = {
    rating: number | string
    changeable?: boolean
    changeRating?: (rating: number) => void
}

const Rating = memo(({rating, changeable=false, changeRating}: IRating) => {
    const handleChangeRating = (index:number) => {
        if (changeable) {
            changeRating!(index + 1)
        }
    }
    const stars = [...Array(5)].map((_, i) => {
        const star = i + 1
        return <span key={i} onClick={()=>handleChangeRating(i)}>{star <= +rating ? <AiFillStar  /> : <AiOutlineStar />}</span>
    })
        


  return (
    <div className='flex'>
        {stars}
    </div>
  )
})

export {Rating}