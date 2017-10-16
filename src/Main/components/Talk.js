import React, { Component } from 'react'
import '../../css/Talk.css'
import { Title, ChillImg, Text, H2 }  from './Talk.style'
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';


class Talk extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickFinger: false,
      clickSport: false,
      clickWalk: false,
      clickRide: false
    }
  }
  onClickFinger() {
    this.setState({clickFinger: true })
  }
  onClickSport() {
      this.setState({clickSport: true })
  }
  onClickWalk() {
      this.setState({clickWalk: true })
  }
  onClickRide() {
      this.setState({clickRide: true })
  }
  render() {
    const stylePointer = {
      cursor: 'pointer'
    }
    let styleItemSport = {
      marginLeft: '900px',
      marginTop: '-38px'
    }
    let styleItemWalk = {
      marginLeft: '900px',
      marginTop: '-38px'
    }
    let styleItemRide = {
      marginLeft: '900px',
      marginTop: '-38px'
    }
    let styleFinger = {
      display: 'none'
    }

    let styleSport = {
      display: 'none'
    }
    let styleQuestionSport ={
      color: 'rgba(0, 0, 0, 0.4)',
      display: 'none'
    }

    let styleWalk = {
      display: 'none'
    }
    let styleQuestionWalk ={
      color: 'rgba(0, 0, 0, 0.4)',
      display: 'none'
    }
    let styleRide = {
      display: 'none'
    }
    let styleQuestionRide ={
      color: 'rgba(0, 0, 0, 0.4)',
      display: 'none'
    }

    if (this.state.clickFinger) {
      styleFinger = {
        display: ''
      }
      styleQuestionSport ={
        color: 'rgba(0, 0, 0, 0.4)',
        display: ''
     }
    }
    if (this.state.clickSport) {
      styleSport = {
        display: ''
      }
      styleQuestionSport ={
         color: 'rgba(0, 0, 0, 1)'
     }
     styleItemSport = {
       display: 'none'
     }
     styleQuestionWalk ={
       color: 'rgba(0, 0, 0, 0.4)',
       display: ''
     }
    }
    if (this.state.clickWalk) {
      styleWalk = {
        display: ''
      }
      styleQuestionWalk ={
          color: 'rgba(0, 0, 0, 1)'
      }
      styleItemWalk = {
        display: 'none'
      }
      styleQuestionRide ={
        color: 'rgba(0, 0, 0, 0.4)',
        display: ''
      }
    }
    if (this.state.clickRide) {
      styleRide = {
        display: ''
      }
      styleQuestionRide = {
        color: 'rgba(0, 0, 0, 1)'
      }
      styleItemRide = {
        display: 'none'
      }
    }

{/*
  nextQuestion(type) {
setState({{type}: true})
}
this.nextQuestion(type)
  */}
    return (
      <section>
       <Title>About me</Title>

         <H2 align='right' onClick={this.onClickFinger.bind(this)} style={stylePointer}>Whats wrong with you, are you realy ride on fingerboard?
           <div style={styleItemSport}>
           <PreloaderIcon
               type={ICON_TYPE.PUFF}
               size={50}
               strokeWidth={15} // min: 1, max: 50
               strokeColor="red"
               duration={800}

           />
         </div>
         </H2>
         <Text style={styleFinger}>Fingerboarding yes, I spend aboute two hour to film this piece of... Component</Text>
        {/* <section className='chillFBImg' style={styleFinger}></section>*/}
          <section style={styleQuestionSport}>
              <H2 align='right' onClick={this.onClickSport.bind(this)} style={stylePointer}>
                Sport Whats wrong with you, are you realy ride on fingerboard?
                <div style={styleItemSport}>
                <PreloaderIcon
                    type={ICON_TYPE.PUFF}
                    size={50}
                    strokeWidth={15} // min: 1, max: 50
                    strokeColor="red"
                    duration={800}

                />
              </div>
              </H2>
            </section>
         <Text style={styleSport}>Fingerboarding yes, I spend aboute two hour to film this piece of... Component</Text>

         <section style={styleQuestionWalk}>
             <H2 align='right' onClick={this.onClickWalk.bind(this)} style={stylePointer}>Walk Whats wrong with you, are you realy ride on fingerboard?
               <div style={styleItemWalk}>
               <PreloaderIcon
                    type={ICON_TYPE.PUFF}
                    size={50}
                   strokeWidth={8} // min: 1, max: 50
                   strokeColor="red"
                   duration={800}
                 />
               </div>
             </H2>
           </section>
              <Text style={styleWalk}>Fingerboarding yes, I spend aboute two hour to film this piece of... Component</Text>

           <section style={styleQuestionRide}>
               <H2 align='right' onClick={this.onClickRide.bind(this)} style={stylePointer}>Ride Whats wrong with you, are you realy ride on fingerboard?
                 <div style={styleItemRide}>
                 <PreloaderIcon
                     type={ICON_TYPE.PUFF}
                     size={50}
                     strokeWidth={8} // min: 1, max: 50
                     strokeColor="red"
                     duration={800}
                   />
                 </div>
               </H2>
             </section>
              <Text style={styleRide}>Fingerboarding yes, I spend aboute two hour to film this piece of... Component</Text>

      </section>
    );
  }
}

export default Talk