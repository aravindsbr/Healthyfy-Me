import React,{ Component } from "react";
import ChatBot from "react-simple-chatbot";
//  import Card from 'react-bootstrap/Card';
import { ThemeProvider } from "styled-components";
import Summary from '../Summary/Summary';
import Submit from '../Submit/Submit';
import heart from './heart.png';
import '../../App.css'
// Import react-circular-progressbar module and styles
import { CircularProgressbar,  buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TextLoop from "react-text-loop";

const getColor = (value) => {
  switch (true) {
    case (value > 0 && value <= 60):
    	return "#FF0000"
    case (value >= 61 && value <= 70):
		return "#FF6600"
	case (value >= 71 && value <= 80):
		return "#FFFF00"
	case (value >= 81 && value <= 90):
		return "#82FF82"
    case (value >= 91):
      return "#0A8A0A"
    default:
      return "#ff751a"
  }
}

class CustomChatbot extends Component {

  constructor()
  {
    super();
    this.state = {backend_data:0};
    this.getData = this.getData.bind(this);
  }

  getData()
  {
    fetch('http://127.0.0.1:7000/healthapp/get_data/')
      .then(response => response.json())
      .then(
        data => 
        {
          console.log(data);
          this.setState({backend_data: data})
        }
        );
    console.log(this.state.backend_data);
  }

  
  render() {
    return (
      <div className="first">

    	<h1 className="header">Healthyfy-Me</h1>

        <div className="card"> 
          <div className="card-body">
            <h4 className="card-title">
				
				{
				this.state.backend_data == 0 &&
				<div>
					<TextLoop mask="false">
						<p className="animation-text">Find out your</p>
						<p className="animation-text">Do you want to calculate your</p>
						<p className="animation-text">Know your</p>
					</TextLoop>{" "}

					<span className="animation-text-static">health percentage</span>

					<TextLoop mask="false">
						<span className="animation-text-static"></span>
						<span className="animation-text-static">?</span>
						<span className="animation-text-static"></span>
					</TextLoop>

					<br></br>

					<TextLoop>
						<p className="animation-text-ending">with our Chat-bot!</p>
						<p className="animation-text-ending"></p>
						<p className="animation-text-ending">with a conversation!</p>
					</TextLoop>
				</div>
				}

				{
				this.state.backend_data != 0 &&
				<p className="animation-text">Your <span className="animation-text-child">health percentage</span> is...</p>
  				}

            </h4>
          <Example>
            <CircularProgressbar
              value={this.state.backend_data}
              text={`${this.state.backend_data}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#fff",
                textColor: "#000",
                pathColor: getColor(this.state.backend_data),
                trailColor: "transparent"
              })}
            />
          </Example>
          

        <div className="suggestion">

            {
              // eslint-disable-next-line
              this.state.backend_data == 0 && 
              <div>
				<h4 className="firstheader"><span className="default">Healthyfy Me</span> is an AI application that predicts the % of healthiness <br/>of an individual based on the various health factors.</h4><br/>
				<h4 className="iconheader"><h4 className="note">Note : </h4>To check your health percentage, click the icon on the right!</h4> 
			  </div>
              
            }

            {
			  (this.state.backend_data > 0 && this.state.backend_data <= 60) && 
			  <div>
				  <div class="legend_list">
					<ul class="legend">
						<li><span class="case1"></span> 0 - 60</li>
						<li><span class="case2"></span> 61 - 70</li>
						<li><span class="case3"></span> 71 - 80</li>
						<li><span class="case4"></span> 81 - 90</li>
						<li><span class="case5"></span> 91 - 100</li>
					</ul>
					<br></br>
					<br></br>
				</div>
			  <p className="animation-text">Get <span className="animation-text-child">healthified</span> with below recommendations,</p>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         <h3 className="dietheader">Diet Plan</h3>
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">1. Fill your meal with lots of fruits and vegetables.</h4>
                      <h4 className="pointsheader">2. Choose foods which is low in salt and sugar.</h4>
                      <h4 className="pointsheader">3. Choose heart-healthy fats such as olive and canola oil, fatty fish, nuts, and avocados.</h4><br/>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h3 className="dietheader">Health Plan</h3>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">1. Do atleast 30 mins of early morning walk.</h4>
                      <h4 className="pointsheader">2. Include yourself in any yoga/medication activities.</h4>
                      <h4 className="pointsheader">3. Minimize smoke and alcohol consumption if any.</h4><br/>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h3 className="dietheader">Exercise Plan</h3>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">Sun : Gardening for 30 to 45 minutes.</h4>
                      <h4 className="pointsheader">Mon : Walking stairs for 15 minutes.</h4>
                      <h4 className="pointsheader">Tue : Washing your vehicle for 45 minutes to an hour.</h4>
                      <h4 className="pointsheader">Wed : Jumping rope for 15 minutes.</h4>
                      <h4 className="pointsheader">Thu : Raking leaves for 30 minutes.</h4>
                      <h4 className="pointsheader">Fri : Dancing for 30 minutes.</h4>
                      <h4 className="pointsheader">Sat : Doing water aerobics for 30 minutes.</h4>
                      <h4 className="pointsheader">you can also include these simple exercise:</h4>
                      <h4 className="pointsheader">Shoulder blade squeeze, Toe taps, Heel raises, Knee lifts, Shoulder and upper back stretch.</h4>
                    </div>
                  </div>
                </div>
              </div>
			  </div>
            }

            {
			  (this.state.backend_data >= 61 && this.state.backend_data <= 70) &&
			  <div>
				  <div class="legend_list">
					<ul class="legend">
						<li><span class="case1"></span> 0 - 60</li>
						<li><span class="case2"></span> 61 - 70</li>
						<li><span class="case3"></span> 71 - 80</li>
						<li><span class="case4"></span> 81 - 90</li>
						<li><span class="case5"></span> 91 - 100</li>
					</ul>
					<br></br>
					<br></br>
				</div>
			  <p className="animation-text">Get <span className="animation-text-child">healthified</span> with below recommendations,</p>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         <h3 className="dietheader">Diet Plan</h3>
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">1. Fill your meal with lots of fruits and vegetables.</h4>
                      <h4 className="pointsheader">2. Choose foods which is low in salt and sugar.</h4>
                      <h4 className="pointsheader">3. Choose heart-healthy fats such as olive and canola oil, fatty fish, nuts, and avocados.</h4>
                      <h4 className="pointsheader">4. Eat plenty of fiber from fruits, vegetables, and whole grains like brown rice and oatmeal.</h4><br/>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h3 className="dietheader">Health Plan</h3>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">1. Do atleast 30 mins of early morning walk.</h4>
                      <h4 className="pointsheader">2. Include yourself in any yoga/medication activities.</h4>
                      <h4 className="pointsheader">3. Minimize smoke and alcohol consumption if any.</h4><br/>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h3 className="dietheader">Exercise Plan</h3>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">Sun : Exercise 1 hour with regular break(Overhead stretch, Seated cow stretch, Seated cat stretch, Seated mountain pose, Seated twist).</h4>
                      <h4 className="pointsheader">Mon : bench press, sit-ups, bent-over rows, reverse flies, aerobic dance, yoga poses for 75 mins.</h4>
                      <h4 className="pointsheader">Tue : Ten minutes of brisk or moderate walking three times a day.</h4>
                      <h4 className="pointsheader">Wed : Exercise 1 to 1 ½ hours after eating (Aqua jogging, Flutter kicking, Leg lifts, Standing water push-ups, Arm curls).</h4>
                      <h4 className="pointsheader">Thu : least 30 minutes of moderate physical activity. </h4>
                      <h4 className="pointsheader">Fri : Get at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity.</h4>
                      <h4 className="pointsheader">Sat : Do strength training exercises for all major muscle groups. </h4>
                      <h4 className="pointsheader">Note:</h4>
                      <h4 className="pointsheader">If you exercise outdoors in extreme heat, take frequent breaks and be sure to increase hydration efforts.</h4>
                      <h4 className="pointsheader">If your blood sugar is dropping, you may continue. If it is not dropping, stop exercising.</h4>
                      <h4 className="pointsheader">Do not exercise if blood sugars are 400 or more.</h4>
                    </div>
                  </div>
                </div>
              </div> 
			  </div>
            }

            {
			  (this.state.backend_data >= 71 && this.state.backend_data <= 80) && 
			  <div>
				  <div class="legend_list">
					<ul class="legend">
						<li><span class="case1"></span> 0 - 60</li>
						<li><span class="case2"></span> 61 - 70</li>
						<li><span class="case3"></span> 71 - 80</li>
						<li><span class="case4"></span> 81 - 90</li>
						<li><span class="case5"></span> 91 - 100</li>
					</ul>
					<br></br>
					<br></br>
				</div>
			  <p className="animation-text">Get <span className="animation-text-child">healthified</span> with below recommendations,</p>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         <h3 className="dietheader">Diet Plan</h3>
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">1. Fill your meal with lots of fruits and vegetables.</h4>
                      <h4 className="pointsheader">2. Choose heart-healthy fats such as olive and canola oil, fatty fish, nuts, and avocados.</h4><br/>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h3 className="dietheader">Health Plan</h3>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">1. Do atleast 30 mins of early morning walk.</h4>
                      <h4 className="pointsheader">2. Include yourself in any yoga/medication activities.</h4>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h3 className="dietheader">Exercise Plan</h3>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">Sun : 75 minutes of moderate-intensity jog, hike or walk.</h4>
                      <h4 className="pointsheader">Mon : 45 minutes of Moderate intensity circuit workout with weights.</h4>
                      <h4 className="pointsheader">Tue : HIIT workout at home or outdoors of 20 minutes.</h4>
                      <h4 className="pointsheader">Wed : Easy recovery day stretch and walk for 30 minutes.</h4>
                      <h4 className="pointsheader">Thu : 45 minutes of Moderate intensity circuit workout with weights.</h4>
                      <h4 className="pointsheader">Fri : High-intensity day walk/run intervals for 20 minutes.</h4>
                      <h4 className="pointsheader">Sat : 30 minutes of recovery day relaxation yoga.</h4>
                    </div>
                  </div>
                </div>
              </div>
			  </div>
            }

            {
			  (this.state.backend_data >= 81 && this.state.backend_data <= 90) && 
			  <div>
				  <div class="legend_list">
					<ul class="legend">
						<li><span class="case1"></span> 0 - 60</li>
						<li><span class="case2"></span> 61 - 70</li>
						<li><span class="case3"></span> 71 - 80</li>
						<li><span class="case4"></span> 81 - 90</li>
						<li><span class="case5"></span> 91 - 100</li>
					</ul>
					<br></br>
					<br></br>
				</div>
			  <p className="animation-text">Get <span className="animation-text-child">healthified</span> with below recommendations,</p>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         <h3 className="dietheader">Diet Plan</h3>
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">1. Eat plenty of soluble fiber.</h4>
                      <h4 className="pointsheader">2. Eat lots of fruits and vegetables.</h4>
                      <h4 className="pointsheader">3. Eat fish that are high in omega-3 fatty acids</h4><br/>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h3 className="dietheader">Health Plan</h3>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">1. Do atleast 30 mins of early morning walk.</h4>
                      <h4 className="pointsheader">2. Include yourself in any yoga/medication activities.</h4><br/>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h3 className="dietheader">Exercise Plan</h3>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">Sun : 30 minutes of Fun and easy cross-training day (bike ride, swim or online aerobics class).</h4>
                      <h4 className="pointsheader">Mon : Moderate intensity walk for 30 minutes.</h4>
                      <h4 className="pointsheader">Tue : 20 minutes of Simple home strength training workout.</h4>
                      <h4 className="pointsheader">Wed : Moderate intensity walk for 30 minutes.</h4>
                      <h4 className="pointsheader">Thu : Simple home strength training workout for 20 minutes.</h4>
                      <h4 className="pointsheader">Fri : Moderate intensity walk for 30 minutes.</h4>
                      <h4 className="pointsheader">Sat : 20 minutes of Online relaxation yoga.</h4>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            }

            {
			  (this.state.backend_data >= 90) && 
			  <div>
				  <div class="legend_list">
					<ul class="legend">
						<li><span class="case1"></span> 0 - 60</li>
						<li><span class="case2"></span> 61 - 70</li>
						<li><span class="case3"></span> 71 - 80</li>
						<li><span class="case4"></span> 81 - 90</li>
						<li><span class="case5"></span> 91 - 100</li>
					</ul>
					<br></br>
					<br></br>
				</div>
			  <p className="animation-text">Get <span className="animation-text-child">healthified</span> with below recommendations,</p>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         <h3 className="dietheader">Diet Plan</h3>
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <h3 className="dietheader">You are doing great already!</h3><br/>
                      <h4 className="pointsheader">Please follow the same diet and workout routine which you are following currently!</h4>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h3 className="dietheader">Health Plan</h3>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">Eat healthy food with all protiens,fibre and vitamins and stay healthy!</h4><br/>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h3 className="dietheader">Exercise Plan</h3>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      <h4 className="pointsheader">Sun : Rest.</h4>
                      <h4 className="pointsheader">Mon : 15-minute walk x 2.</h4>
                      <h4 className="pointsheader">Tue : 15-minute walk x 2.</h4>
                      <h4 className="pointsheader">Wed : 30 minute cycling, swimming, water aerobics, Zumba, etc.</h4>
                      <h4 className="pointsheader">Thu : Rest.</h4>
                      <h4 className="pointsheader">Fri : 30 minute walk (or 15-minute walk x 2).</h4>
                      <h4 className="pointsheader">Sat : 30 minute cycling, swimming, water aerobics, Zumba, etc.</h4>
                    </div>
                  </div>
                </div>
              </div>
			  </div>
            }

            <br/>

        </div>
        </div>
        </div>

      <ThemeProvider theme={{
                background: "white",
                fontFamily: "Trebuchet MS, Helvetica, sans-serif",
                headerBgColor: "#2b7a78",
                headerFontColor: "white",
                headerFontSize: "22px",
                botBubbleColor: "#def2f1",
                botFontColor: "black",
                userBubbleColor: "#5a5a5a",
                userFontColor: "white",
       }}>
    <ChatBot steps={[
    {
      id: "1",
      message: "Hello, Welcome to Healthyfy Me!",
      trigger: "2"
    },
    {
      id: "2",
      message: "Please provide your gender.",
      trigger: "sex"
    },
    {
      id: "sex",
      options: [
        {
          value: "Male",
          label: "Male",
          trigger: "3"
        },
        { 
          value: "Female",
          label: "Female",
          trigger: "3"
        },
        { 
          value: "Others",
          label: "Others",
          trigger: "3"
        }
      ]
    },
    {
      id: "3",
      message: "Provide your age.",
      trigger: "age"
    },
    {
      id: "age",
      user: true,
      trigger: "4",
      validator: (value) => {

        if (isNaN(value)) {
          return 'Age must be a number.';
        } else if (value < 0) {
          return 'Age should be positive.';
        } else if (value > 120) {
          return 'Please enter valid age';
        }

        return true;
      },
    },
    {
      id: "4",
      message: "Enter your height (cm)",
      trigger: "height"
    },
    {
      id: "height",
      user: true,
      trigger: "5",
      validator: (value) => {
        if (isNaN(value)) {
          return 'Height must be a number.';
        } else if (value < 1) {
          return 'Height must be positive.';
        } 
        else if (value < 50) {
          return 'Please enter height above 50.';
        }
        else if (value > 270) {
          return 'Please enter height below 270.';
        }

        return true;
      },
    },
    {
      id: "5",
      message: "Provide your weight (kg)",
      trigger: "weight"
    },
    {
      id: "weight",
      user: true,
      trigger: "6",
      validator: (value) => {
        if (isNaN(value)) {
          return 'Weight must be a number.';
        } else if (value < 1) {
          return 'Weight must be positive.';
        }
        else if (value > 250) {
          return 'Weight must be below 250.';
        }

        return true;
      },
    },
    {
      id: "6",
      message: "Could you tell your WBC count?",
      trigger: "WBC"
    },
    {
      id: "WBC",
      user: true,
      trigger: "7",
      validator: (value) => {

        if (isNaN(value)) {
          return 'WBC count must be a number.';
        } else if (value < 1) {
          return 'WBC count must be positive.';
        }else if (value < 1000) {
          return 'WBC must be above 1000.';
        } 
        else if (value > 12000) {
          return 'WBC must be below 12000.';
        }
        return true;
      },
    },
    {
      id: "7",
      message: "Provide us your Maximum Heart Beat Rate (BPM)",
      trigger: "HBR"
    },
    {
      id: "HBR",
      user: true,
      trigger: "8",
      validator: (value) => {
        if (isNaN(value)) {
          return 'Heart Beat Rate must be a number.';
        } else if (value < 1) {
          return 'Heart Beat Rate must be positive.';
        }else if (value < 40) {
          return 'Please provide HBR above 40.';
        } 
        else if (value > 250) {
          return 'Please provide HBR within 250.';
        }
        return true;
      },
    },
    {
      id: "8",
      message: "Provide us your Standard Sugar Level (mmol/mol)",
      trigger: "HBA1C"
    },
    {
      id: "HBA1C",
      user: true,
      trigger: "9",
      validator: (value) => {
        if (isNaN(value)) {
          return 'Standard Sugar must be a number.';
        } else if (value < 1) {
          return 'Standard Sugar must be positive.';
        } else if (value < 35) {
          return 'Standard Sugar must be above 35.';
        } 
        else if (value > 60) {
          return 'Standard Sugar must be within 60.';
        }
        return true;
      },
    },

    {
      id: "9",
      message: "Enter your Fasting Sugar level (mg/dl)",
      trigger: "sugar"
    },
    {
      id: "sugar",
      user: true,
      trigger: "10",
      validator: (value) => {

        if (isNaN(value)) {
          return 'Fasting Sugar must be a number.';
        } else if (value < 1) {
          return 'Fasting Sugar must be positive.';
        } else if (value < 80) {
          return 'Fasting Sugar must be above 80.';
        } 
        else if (value > 200) {
          return 'Fasting Sugar must be below 200.';
        }
        return true;
      },
    },
    {
      id: "10",
      message: "Could you tell your Cholesterol level (mg/dl) ?",
      trigger: "cholesterol"
    },
    {
      id: "cholesterol",
      user: true,
      trigger: "11",
      validator: (value) => {

        if (isNaN(value)) {
          return 'Cholesterol level must be a number';
        } else if (value < 0) {
          return 'Cholesterol level must be positive';
        } else if (value > 300) {
          return 'Cholesterol level must be within 300';
        }
        return true;
      },
    },
    {
      id: "11",
      message: "Enter your Systolic Blood Pressure (mmHg)",
      trigger: "BP"
    },
    {
      id: "BP",
      user: true,
      trigger: "12", 
      validator: (value) => {
        if (isNaN(value)) {
          return 'Blood Pressure must be a number';
        } else if (value < 1) {
          return 'Blood Pressure must be positive';
        } 
        else if (value < 0) {
          return 'Blood Pressure must be positive';
        }
        else if (value > 300) {
          return 'BP must be within 300';
        }
        return true;
      },
    },
    {
      id: "12",
      component: <Summary/>,
      asMessage: true,
      trigger: "13"
    },
    {
      id: '13',
      message: 'Would you like to update a health parameter?',
      trigger: 'update-question',
    },
    {
      id: 'update-question',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'update-yes' },
        { value: 'no', label: 'No', trigger: 'confirm_id' },
      ],
    },
    {
      id: 'update-yes',
      message: 'Which health parameter would you like to update?',
      trigger: 'update-fields',
    },
    {
      id: 'update-fields',
      options: [
        { value: 'age', label: 'Age', trigger: 'update-age' },
        { value: 'sex', label: 'Sex', trigger: 'update-gender' },
        { value: 'height', label: 'Height', trigger: 'update-height' },
        { value: 'weight', label: 'Weight', trigger: 'update-weight' },
        { value: 'WBC', label: 'WBC', trigger: 'update-WBC' },
        { value: 'HBR', label: 'HBR', trigger: 'update-HBR' },
        { value: 'HBA1C', label: 'Resting Sugar level', trigger: 'update-HBA1C'},
        { value: 'sugar', label: 'Fasting Sugar level', trigger: 'update-sugar'},
        { value: 'BP', label: 'Blood Pressure', trigger: 'update-BP'},
        { value: 'cholesterol', label: 'Cholesterol', trigger: 'update-cholesterol'},
      ],
    },
    {
      id: 'update-gender',
      message: 'Please enter your updated gender.',
      trigger: 'update-gender-2',
    },
    {
      id: "update-gender-2",
      options: [
        {
          value: "Male",
          label: "Male",
          update: 'sex',
          trigger: '12'
        },
        { 
          value: "Female",
          label: "Female",
          update: 'sex',
          trigger: '12'
        },
        { 
          value: "Others",
          label: "Others",
          update: 'sex',
          trigger: "12"
        }
      ],
    },
    {
      id: 'update-age',
      message: 'Please enter your updated age.',
      trigger: 'update-age-2',
    },
    {
      id: 'update-age-2',
      update: 'age',
      trigger: '12',
    },
    {
      id: 'update-height',
      message: 'Please enter your updated height.',
      trigger: 'update-height-2',
    },
    {
      id: 'update-height-2',
      update: 'height',
      trigger: '12',
    },
    {
      id: 'update-weight',
      message: 'Please enter your updated weight.',
      trigger: 'update-weight-2',
    },
    {
      id: 'update-weight-2',
      update: 'weight',
      trigger: '12',
    },
    {
      id: 'update-WBC',
      message: 'Please enter your updated WBC count.',
      trigger: 'update-WBC-2',
    },
    {
      id: 'update-WBC-2',
      update: 'WBC',
      trigger: '12',
    },
    {
      id: 'update-HBR',
      message: 'Please enter your updated HBR.',
      trigger: 'update-HBR-2',
    },
    {
      id: 'update-HBR-2',
      update: 'HBR',
      trigger: '12',
    },
    {
      id: 'update-HBA1C',
      message: 'Please enter your updated Standard Blood Sugar level.',
      trigger: 'update-HBA1C-2',
    },
    {
      id: 'update-HBA1C-2',
      update: 'HBA1C',
      trigger: '12',
    },
    {
      id: 'update-sugar',
      message: 'Please enter your updated Fasting Blood Sugar level.',
      trigger: 'update-sugar-2',
    },
    {
      id: 'update-sugar-2',
      update: 'sugar',
      trigger: '12',
    },
    {
      id: 'update-cholesterol',
      message: 'Please enter your updated Cholesterol level.',
      trigger: 'update-cholesterol-2',
    },
    {
      id: 'update-cholesterol-2',
      update: 'cholesterol',
      trigger: '12',
    },
    {
      id: 'update-BP',
      message: 'Please enter your updated Blood Pressure level.',
      trigger: 'update-BP-2',
    },
    {
      id: 'update-BP-2',
      update: 'BP',
      trigger: '12',
    },
    {
      id: "end-message",
      component: <Summary/>,
      asMessage: true,
      trigger: "confirm_id"
      
    },
    {
      id: "confirm_id",
      message: "Are you sure you want to confirm?",
      trigger: "final"
    },
    {
      id: "final",
      options: [
        {
          value: "confirm",
          label: "Confirm",
          trigger: "20"
        },
        { value: "Cancel", label: "Cancel", trigger: "22" }
      ]
    },
    {
      id : "20",
      component:<Submit/>,
      trigger: "21"
    },
    {
      id : "21",
      message: "Thank you!!",
      trigger: () => {
        this.getData();
        return "Thank you" 
        },
    },
    {
      id: "22",
      message: "Do you want to try again?",
      trigger: "23"
    },
    {
      id: "23",
      options: [
        {
          value: "Yes",
          label: "Yes",
          trigger: "2"
        },
        { value: "No", label: "No, I will use my old records", trigger: "20" }
      ]
    },
  ]}
  {...{
       width: "350px",
       height: "380px",
       floating: true,
       botAvatar: heart,
       headerTitle: "May I help you?",
       floatingIcon: heart, 
       }} />
    </ThemeProvider>
    </div>
  );
}
}

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      {/* <hr style={{ border: "2px solid #ddd" }} /> */}
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "32%", paddingRight: 30, marginLeft: '41%' }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomChatbot;
