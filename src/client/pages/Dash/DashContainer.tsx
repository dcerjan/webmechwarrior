import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { Worker } from '../../state/Worker'

import { Card } from '../../components/Common/Card'
import { Detail } from '../../components/Common/Detail'

import { listMechChassisRequest } from './state/actions'
import { IMechMeta, reducer } from './state/reducer'
import { watcher as saga } from './state/sagas'
import { dashMechsLoading, dashMechsSelector } from './state/selectors'

import * as styles from './DashContainer.css'


interface IMapStateProps {
  loading: boolean,
  mechs: IMechMeta[],
}

interface IMapDispatchProps {
  listMechChassisRequest: () => void,
}

const mapState = createStructuredSelector<any, IMapStateProps>({
  loading: dashMechsLoading,
  mechs: dashMechsSelector,
})

const mapDispatch = {
  listMechChassisRequest
}

export class LabContainer extends React.PureComponent<IMapStateProps & IMapDispatchProps, {}> {
  public componentDidMount() {
    this.props.listMechChassisRequest()
  }

  public render() {
    const { loading, mechs } = this.props

    return (
      <Worker id='Dash' reducer={reducer} saga={saga}>
        { loading ? 'Loading...' : ''}
        <div>
          <Card
            title={'\'Mechs'}
          >
            { mechs.map(mech => (
              <Detail
                key={mech.id}
                label={ <Link to={`/MechDesigner/${mech.id}`} className={styles.Link}>{`${mech.name} (${mech.tonnage})`}</Link> }
              />
            )) }
          </Card>
        </div>
      </Worker>
    )
  }
}

export default connect(mapState, mapDispatch)(LabContainer)
