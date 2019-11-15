import React, {Component} from 'react'


                    class Timer extends Component{
                        constructor(props){
                            super(props)
                            this.state={
                                time :0,
                                start : true
                            }
                                
                            setInterval(
                                () =>
                                  this.state.start
                                    ? this.setState({
                                        time: this.state.time + 1000
                                      })
                                    : clearInterval(this.state.time),
                                1000
                              );
                            
                        }
                        handleStartClick = () =>{
                            this.setState({
                                start : !this.state.start
                            })
                            
                        }
                        handleStopClick = () =>{
                            this.setState ({
                                time : 0, start : false
                                
                                
                            })
                        }
                        render(){
                            var  seconds = Math.floor((this.state.time / 1000) % 60)
                            var  minutes = Math.floor(( this.state.time/ (1000 * 60)) % 60)
                            var  hours = Math.floor((this.state.time / (1000 * 60 * 60)) % 24);
                            hours = (hours < 10) ? "0" + hours : hours;
                            minutes = (minutes < 10) ? "0" + minutes : minutes;
                            seconds = (seconds < 10) ? "0" + seconds : seconds;
                            return(
                                <div className='main'>
                        <h1 className='numbers'>{hours + ":" + minutes + ":" + seconds }</h1>
                            <button className='btn1' type='button' onClick ={this.handleStartClick}>{this.state.start  ? 'Pause' : 'Start'}</button>
                        <button className='btn2' type='button' onClick ={this.handleStopClick}>Reset</button>
                                </div>
                            )
                        }
                    }





            export default Timer