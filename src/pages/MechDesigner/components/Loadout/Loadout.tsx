import * as React from 'react'
import { connect } from 'react-redux'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { Card } from '../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../components/Common/Detail'
import { Select, StringInput } from '../../../../components/Field'
import { MechType } from '../../../../models/common/MechType'
import { Tech } from '../../../../models/common/Tech'
import { IMechDesignerState } from '../../state/reducer'

interface ILoadoutProps {
  mech: IMechDesignerState
}

class Loadout extends React.PureComponent<ILoadoutProps & InjectedFormProps<ILoadoutProps>> {

  public render() {
    const { mech } = this.props
    return this.renderLoadout(mech.type)
  }

  private renderLoadout(mechType: MechType) {
    switch (mechType) {
    case MechType.Bipedal:
      return this.renderBipedalLoadout()
    case MechType.Quadrupedal:
    return this.renderQudrupedalLoadout()
    }
  }

  private renderBipedalLoadout() {
    const { mech } = this.props

    return (
      <div>
        <form>
          <Card
            title={ <StringInput name='name' placeholder={'\'Mech name'} /> }
            footer={ <Detail label='Battle Value' value={`over 9000`} /> }
          >
            <Detail label='Tonnage' value={`${mech.tonnage.toFixed(1)} tons`} color={DetailColor.TransparentBluishGrey}/>
            <Detail label='Tech' value={ <Select name='tech' options={Object.values(Tech)} alignment='Right' /> } color={DetailColor.TransparentBluishGrey}/>
            <Detail label='Mech Type' value={mech.type} color={DetailColor.TransparentBluishGrey}/>
          </Card>
          <Card
            title={ mech.name }
            titleExtra={ `${mech.tonnage.toFixed(1)} tons` }
          >
            <Detail label='Tech' value={mech.tech} color={DetailColor.TransparentBluishGrey}/>
            <Detail label='Mech Type' value={mech.type} color={DetailColor.TransparentBluishGrey}/>
          </Card>
        </form>
      </div>
    )
  }

  private renderQudrupedalLoadout() {
    const { mech } = this.props

    return (
      <div>
        { mech.type }
      </div>
    )
  }
}

const mapState = (state: any, props: ILoadoutProps) => ({
  initialValues: props.mech
})

const LoadoutForm: React.SFC<ILoadoutProps> = (
  connect(mapState)(
    reduxForm({ form: 'Loadout' })(
      Loadout
    )
  )
) as any

export {
  LoadoutForm as Loadout,
}
