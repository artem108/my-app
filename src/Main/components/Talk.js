import React, { Component } from 'react'
import '../../css/Talk.css'
import ReactPlayer from 'react-player'
import { Title, ChillImg, Text, H2 }  from './Talk.style'



class Talk extends Component {

  render() {

    return (
<section>
 <Title>About me</Title>
 <H2 align='right'>Whats wrong with you, are you realy ride on fingerboard?</H2>
 <Text>Fingerboarding yes, I spend aboute two hour to film this piece of... Component</Text>
 {/* <ReactPlayer style={style} url='../../img/fingerboarding.mp4'  controls /> */}
 <section className='chillFBImg'>

 </section>
</section>
    );
  }
}

export default Talk
