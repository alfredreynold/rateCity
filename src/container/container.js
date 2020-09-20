import React, {
    Component
} from 'react'
import NavBarComponent from './navBarComponent/navBarComponent'
import Axios from 'axios'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import GridContainer from './gridContainer/gridContainer'

class Container extends Component {
    constructor() {
        super()
        this.state={data:[]}
    }

    componentDidMount() {
        Axios.get("https://blaze.ratecity.com.au/api/search/home-loans").then(res => {
            console.log(res.data)
            this.setState({data: res.data.hits})
        }).catch(err => {
            console.log(err)
        })
    }
    
    filterRefinance = () => {
        return this.state.data.filter((val,index,arr)=>{
            return val.isRefinanceAvailable
        })
    }

    fixedRate = () => {
        return this.state.data.filter((val,index,arr)=>{
            if (!val.rateType) return false
            if (val.rateType.length < 2) return false
            return val.rateType[1] == "Fixed"
        })
    }

    isFirstHomeBuyer = () => {
        return this.state.data.filter((val,index,arr)=>{
            return val.firstHomeBuyers
        })
    }

    isNextHomeBuyer = () => {
        return this.state.data.filter((val,index,arr)=>{
            return val.firstHomeBuyers
        })
    }

    isInvestor = () => {
        return this.state.data.filter((val,index,arr)=>{
            return val.investmentPurpose
        })
    }

    render() {
        return (
        <div className="bg-light" style={ { padding: "50px" , width: '100%' , height: '100%' } }>
            < NavBarComponent />
            <hr />
            <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <GridContainer selectedRoute="ALL" data={this.state.data} />
                </Route>
                <Route path="/refinance">
                    <GridContainer selectedRoute="refinance" data={this.filterRefinance()} />
                </Route>
                <Route path="/fixedRate">
                    <GridContainer selectedRoute="fixedRate" data={this.fixedRate()} />
                </Route>
                <Route path="/firstHomeBuyer">
                    <GridContainer selectedRoute="firstHomeBuyer" data={this.isFirstHomeBuyer()} />
                </Route>
                <Route path="/investor">
                    <GridContainer selectedRoute="investor" data={this.isInvestor()} />
                </Route>
                <Route path="/nextHomeBuyer">
                    <GridContainer selectedRoute="nextHomeBuyer" data={this.isNextHomeBuyer()} />
                </Route>
            </Switch>
            </BrowserRouter>
            
        </div>
        )
    }
}

export default Container