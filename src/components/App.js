import React from 'react';
import Headroom from 'react-headroom';
import Visual from './Visual';
import Counter from 'react-countup';
import PeopleFigure from './OutOfPeople';
import Fade from 'react-reveal/Fade';

const present = () => (
    <>
        <Headroom>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="#background">Background</a>
                        </li>
                        <li>
                            <a href="#thesis">Thesis</a>
                        </li>
                        <li>
                            <a href="#findings">Key Findings</a>
                        </li>
                        <li>
                            <a href="#methodologies">Methodologies</a>
                        </li>
                        <li>
                            <a href="#recommendations">Recommendations</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </Headroom>
        <div className="piece">
            {/* <h1 className="title">Pluto</h1> */}
            <h2 className="subtitle">Concept Validation & Feature Determination Through User Research</h2>
            <h3>IDM-417 User Research Methodologies</h3>
        </div>
        <div id="background" className="piece">
            <h1 className="title">Background</h1>
            <p className="copy">Pluto is an experimental social network that focuses on fostering meaningful connections. This raises two fundamental questions: What is a meaningful connection, and how can we foster them? For this reason, Pluto must identify what features will best accomplish this goal and ultimately create an engaging platform for our users.</p>
        </div>
        <div id="thesis" className="piece">
            <h1 className="title">Thesis</h1>
            <p className="copy">We believe that creating a social network that prioritizes exclusively meaningful connections while giving users a platform that strengthens close relationships with an increased sense of privacy and security, will achieve the unintruded continuation of their relationship better than existing platforms.</p>
        </div>
        <div id="findings" className="piece">
            <h1 className="title">Key Findings</h1>
            <p className="copy">These are the biggest discoveries from our research.</p>
            <div className="finding">
                <h2 className="finding__title">Meaning = Repeated Engagement</h2>
                <div className="finding-svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exchange-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path></svg>
                </div>
                <p className="finding__copy">The most meaningful online connections are formed around repeated engagement through anything that most closely resembles face-to-face interaction.</p>
            </div>
            <div className="finding">
                <h2 className="finding__title">Who's Watching Matters</h2>
                <div className="finding-svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                </div>
                <p className="finding__copy">Choosing who can see your content is a big factor in feeling private when posting, and would foster more sharing.</p>
            </div>
            <div className="finding">
                <h2 className="finding__title">Ownership Incites Sharing</h2>
                <div className="finding-svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"></path></svg>
                </div>
                <p className="finding__copy">Users do not like thinking that their content might be shared elsewhere or may be “owned” by the company.</p>
            </div>
        </div>
        <div id="methodologies" className="piece">
            <h1 className="title">Methodologies</h1>
            <p className="copy">Various methods were used to gather data from potential users:</p>
            <a className="biglink" href="#screener">Screener Survery</a>
            <a className="biglink" href="#survey">Second Survery</a>
            <a className="biglink" href="#iliwwi">I Like, I Want, What if?</a>
            <a className="biglink" href="#interview1">Interviews</a>
            <a className="biglink" href="#desirability">Desirability Survery</a>
        </div>
        <p className="credit">Photo by Rob Curran on Unsplash</p>
        <img alt="crowd of people" className="full-width-img" src="./media/people.jpg"></img>
        <div id="audience" className="piece">
            <h1 className="title">Target Audience</h1>
            <div className="tidbit">
                <div className="svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                </div>
                <h3 className="bigtext">18-25</h3>
                <p className="copy copy--center">years old</p>
            </div>
            <p className="copy">Our target market is for all genders 16-80, who live in English-speaking countries, and like to easily share personal content to those that are close to them. For this research, however, we’ll be targeting potential users aged 18-25 on the presumption that <strong>young users are crucial to a platform’s success.</strong></p>
        </div>
        <div id="screener" className="piece">
            <h1 className="title">Screener Survey</h1>
            <p className="copy">The purpose of a screener survey is to gather study participants whom fit our target audience to perform further research on. The screener survey consisted of <strong>15&nbsp;high-level&nbsp;questions</strong> asking about social media usage habits. We also used this opportunity to validate early assumptions, asking high-level questions about users’ perceptions regarding privacy and their social media connections’ meaningfulness. Lasting four days, the survey garnered <strong>250&nbsp;responses</strong> with some notable results.</p>
            <div className="stat-piece">
                <Fade>
                    <PeopleFigure 
                        totalCount={5}
                        highlightedCount={3}
                        className="people-figures-1"
                        strokeWidth={3} 
                        color="black"
                    />
                </Fade>
                <p className="copy people-figure-text"><strong>3 out of 5</strong> users feel current networks don’t value their privacy</p>
            </div>
            <div className="stat-piece">
                <Visual className="visual">
                    <Counter
                        className="counter"
                        start={0}
                        end={80}
                        duration={5.75}
                        suffix="%"
                        redraw={true}
                    />
                </Visual>
                <p className="stat-copy">use social media to connect with close friends and family, but only...</p>
                <Visual>
                    <div className="bar">
                        <div className="bar-fill bar-fill--2"></div>
                    </div>
                </Visual>
            </div>
            <div className="stat-piece">
                <Visual className="visual">
                    <Counter
                        className="counter"
                        start={0}
                        end={43}
                        duration={5.75}
                        suffix="%"
                        redraw={true}
                    />
                </Visual>
                <p className="stat-copy">of people feel their connections on social media <strong>are&nbsp;meaningful.</strong></p>
                <Visual>
                    <div className="bar">
                        <div className="bar-fill bar-fill--3"></div>
                    </div>
                </Visual>
            </div>
        </div>
        <div id="survey" className="piece">
            <h1 className="title">Second Survey</h1>
            <p className="copy">The second survey was meant to further investigate users’ interactions with social media. With <strong>42 responses</strong>, this survey was intended to be longer form and included many open-ended questions, hence the much smaller response rate than the screener survey.</p>
            <div className="stat-piece">
                <Fade>
                    <PeopleFigure 
                        totalCount={10}
                        highlightedCount={9}
                        className="people-figures-2"
                        strokeWidth={3} 
                        color="black"
                    />
                </Fade>
                <p className="copy people-figure-text">9 out of 10 users would consider using <strong>a new social network.</strong></p>
            </div>
            <div className="stat-piece">
                <Visual className="visual">
                    <Counter
                        className="counter"
                        start={0}
                        end={74}
                        duration={5.75}
                        suffix="%"
                        redraw={true}
                    />
                </Visual>
                <p className="stat-copy">say they don’t want their family to see their interactions on social media.</p>
                <Visual>
                    <div className="bar">
                        <div className="bar-fill bar-fill--4"></div>
                    </div>
                </Visual>
            </div>
            <div className="stat-piece">
                <Visual className="visual">
                    <Counter
                        className="counter"
                        start={0}
                        end={62}
                        duration={5.75}
                        suffix="%"
                        redraw={true}
                    />
                </Visual>
                <p className="stat-copy">of respondents have <strong>multiple accounts</strong> on the same platform.</p>
                <Visual>
                    <div className="bar">
                        <div className="bar-fill bar-fill--5"></div>
                    </div>
                </Visual>
            </div>
        </div>
        <div id="iliwwi" className="piece">
            <h1 className="title">I like, I want, What if? Session</h1>
            <p className="copy">The purpose of the IL/IW/WI survey was to have a discussion with our target demographic and gauge their feelings about current networks, determining what they like about social networks, what they wish existing social networks had, and “What if” statements to gather ideas. The discussion consisted of <strong>10&nbsp;potential&nbsp;users</strong> and provided key takeaways.</p>
            <div className="finding">
                <h2 className="finding__title">Content is King</h2>
                <div className="finding-svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path></svg>
                </div>
                <p className="finding__copy">Most participants’ favorite aspects of social media derives from the content they see and how they see it.</p>
            </div>
            <div className="finding">
                <h2 className="finding__title">Communities Count</h2>
                <div className="finding-svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice-d20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M106.75 215.06L1.2 370.95c-3.08 5 .1 11.5 5.93 12.14l208.26 22.07-108.64-190.1zM7.41 315.43L82.7 193.08 6.06 147.1c-2.67-1.6-6.06.32-6.06 3.43v162.81c0 4.03 5.29 5.53 7.41 2.09zM18.25 423.6l194.4 87.66c5.3 2.45 11.35-1.43 11.35-7.26v-65.67l-203.55-22.3c-4.45-.5-6.23 5.59-2.2 7.57zm81.22-257.78L179.4 22.88c4.34-7.06-3.59-15.25-10.78-11.14L17.81 110.35c-2.47 1.62-2.39 5.26.13 6.78l81.53 48.69zM240 176h109.21L253.63 7.62C250.5 2.54 245.25 0 240 0s-10.5 2.54-13.63 7.62L130.79 176H240zm233.94-28.9l-76.64 45.99 75.29 122.35c2.11 3.44 7.41 1.94 7.41-2.1V150.53c0-3.11-3.39-5.03-6.06-3.43zm-93.41 18.72l81.53-48.7c2.53-1.52 2.6-5.16.13-6.78l-150.81-98.6c-7.19-4.11-15.12 4.08-10.78 11.14l79.93 142.94zm79.02 250.21L256 438.32v65.67c0 5.84 6.05 9.71 11.35 7.26l194.4-87.66c4.03-1.97 2.25-8.06-2.2-7.56zm-86.3-200.97l-108.63 190.1 208.26-22.07c5.83-.65 9.01-7.14 5.93-12.14L373.25 215.06zM240 208H139.57L240 383.75 340.43 208H240z"></path></svg>
                </div>
                <p className="finding__copy">Many participants are drawn to platforms by being a part of communities.</p>
            </div>
            <div className="finding">
                <h2 className="finding__title">Smart Moderation</h2>
                <div className="finding-svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-nurse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M57.78 288h82.36c22.51 19.68 51.62 32 83.86 32s61.35-12.32 83.86-32h82.36a16 16 0 0 0 14.28-23.18c-15.23-29.85-31.28-62.23-42.15-95.54C354.78 146.09 352 121.59 352 97.2V48L224 0 96 48v49.2c0 24.39-2.75 48.89-10.33 72.08C74.78 202.59 58.73 235 43.5 264.82A16 16 0 0 0 57.78 288zM184 71.67a5 5 0 0 1 5-5h21.67V45a5 5 0 0 1 5-5h16.66a5 5 0 0 1 5 5v21.67H259a5 5 0 0 1 5 5v16.66a5 5 0 0 1-5 5h-21.67V115a5 5 0 0 1-5 5h-16.66a5 5 0 0 1-5-5V93.33H189a5 5 0 0 1-5-5zM144 160h160v32a80 80 0 0 1-160 0zm175.41 160L224 415.39 128.59 320C57.1 323.1 0 381.6 0 453.79A58.21 58.21 0 0 0 58.21 512h331.58A58.21 58.21 0 0 0 448 453.79C448 381.6 390.9 323.1 319.41 320z"></path></svg>
                </div>
                <p className="finding__copy">Participants value free speech, but want content to be more heavily moderated.</p>
            </div>
            <div className="finding">
                <h2 className="finding__title">Connections Matter</h2>
                <div className="finding-svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                </div>
                <p className="finding__copy">Participants wish certain platforms made it easier for them to connect with others.</p>
            </div>
        </div>
        <p className="credit">Word Cloud from both interviews</p>
        <img alt="word cloud" className="full-width-img" src="./media/combinedWordCloud.svg"></img>
        <div id="interview1" className="piece">
            <h1 className="title">Interviews</h1>
            <p className="copy">After conducting the screener survey, 16 participants fit our target demographic perfectly. They were within our age range, were happy to be interviewed further, concerned about privacy and wished they could form more meaningful connections on social media. Conducted over a span of three weeks, the one-on-one interviews provided great insight into our target audience’s feelings.</p>
            <div className="finding">
                <h2 className="finding__title">Connections Matter</h2>
                <div className="finding-svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                </div>
                <p className="finding__copy">Participants wish certain platforms made it easier for them to connect with others.</p>
            </div>
        </div>
        <p className="credit">Empathy Maps from both interviews</p>
        <img alt="empathy maps" className="full-width-img" src="./media/combinedEmpathyMap.jpg"></img>
        <div id="interview2" className="piece">
            <h1 className="title">Interview Process</h1>
            <p className="copy"></p>
            <Visual>
                <div className="interview__finding">
                    <Counter
                        className="finding__title big-number"
                        start={0}
                        end={7}
                        duration={3}
                        suffix=""
                        redraw={true}
                    />
                    <p className="copy in__copy">different interviews conducted.</p>
                </div>
            </Visual>
            <Visual>
                <div className="interview__finding">
                    <Counter
                        className="finding__title big-number"
                        start={0}
                        end={177}
                        duration={3}
                        suffix=" minutes"
                        redraw={true}
                    />
                    <p className="copy in__copy">of interview audio recordings.</p>
                </div>
            </Visual>
            <Visual>
                <div className="interview__finding">
                    <Counter
                        className="interview__finding__title big-number"
                        start={0}
                        end={32998}
                        duration={3}
                        suffix=" words"
                        redraw={true}
                        separator=","
                    />
                    <p className="copy in__copy">of transcribed interview conversations.</p>
                </div>
            </Visual>
        </div>
        <div id="desirability" className="piece">
            <h1 className="title">Desirability Survey</h1>
        </div>
        <p className="credit">Photo by h heyerlein on Unsplash</p>
        <img alt="" className="full-width-img" src="./media/face.jpg"></img>
        <div id="recommendations" className="piece">
            <h1 className="title">Recommendations</h1>
        </div>
        <footer>
            <p>Created by <a href="https://twitter.com/carbnology">Mike Carbone</a></p>
            <p>Pennoni Honors College Submission for IDM-417, Drexel University 2019</p>
        </footer>
    </>
);

export default present;