import React from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import Collection from '../collection/collection.component'
import { Switch } from 'react-router-dom'

const ShopPage = ({ match }) => {
  console.log(match)
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </Switch>
    </div>
  )
}

export default ShopPage
