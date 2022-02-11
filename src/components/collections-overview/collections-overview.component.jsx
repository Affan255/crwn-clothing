import PreviewCollection from '../preview-collection/preview-collection.component'
import React from 'react'
import { connect } from 'react-redux'
import { selectShopDataForPreview } from '../../redux/shop/shop.selectors'
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  collections: selectShopDataForPreview(state)
})

export default connect(mapStateToProps)(CollectionsOverview)
