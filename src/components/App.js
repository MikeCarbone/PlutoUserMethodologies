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
            <img draggable="false" className="logo" src="./media/plutoLogo.png" alt="Pluto" />
            <h2 className="subtitle">Concept Validation & Feature Determination Through User Research</h2>
            <p className="copy title-copy">Pennoni Honors College Submission for IDM-417, Drexel University 2019</p>
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
        <img draggable="false" alt="crowd of people" className="full-width-img" src="./media/people.jpg"></img>
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
        <img draggable="false" alt="word cloud" className="full-width-img" src="./media/combinedWordCloud.svg"></img>
        <div id="interview1" className="piece">
            <h1 className="title">Interviews</h1>
            <p className="copy">After conducting the screener survey, 16 participants fit our target demographic perfectly. They were within our age range, were happy to be interviewed further, concerned about privacy and wished they could form more meaningful connections on social media. Conducted over a span of three weeks, the one-on-one interviews provided great insight into our target audience’s feelings.</p>
            <Visual>
                <div className="interview__finding">
                    <Fade>
                        <PeopleFigure 
                            totalCount={7}
                            highlightedCount={7}
                            className="people-figures-3"
                            strokeWidth={3} 
                            color="black"
                        />
                    </Fade>
                    <p className="copy in__copy">7 different interviews conducted.</p>
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
            <div className="finding">
                <h2 className="finding__title">Interaction Brings Meaning</h2>
                <div className="finding-svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bezier-curve" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48 28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44 34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40 35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"></path></svg>
                </div>
                <p className="finding__copy">The most meaningful online connections are formed around repeated engagement through anything that most closely resembles face-to-face interaction.</p>
            </div>
            <div className="finding">
                <h2 className="finding__title">Audience Targeting</h2>
                <div className="finding-svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullseye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"></path></svg>
                </div>
                <p className="finding__copy">Targeting the audience when posting is a big factor in feeling private when posting, and would foster more sharing.</p>
            </div>
            <div className="finding">
                <h2 className="finding__title">Content Ownership</h2>
                <div className="finding-svg">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"></path></svg>
                </div>
                <p className="finding__copy">Users do not like thinking that their content might be shared elsewhere or may be “owned” by the company. Snapchats “visible screenshot” and “self-destruction” features are a perceived deterrent to this notion, leading many users to view <strong>Snapchat as the most private social media platform.</strong></p>
            </div>
        </div>
        <p className="credit">Empathy Maps from both interviews</p>
        <img draggable="false" alt="empathy maps" className="full-width-img" src="./media/combinedEmpathyMap.jpg"></img>
        <div id="interview2" className="piece">
            <h1 className="title">Interview Process</h1>
            <p className="copy">After confirming and scheduling the interviews, tasks were conducted to ensure the smooth operation and analysis of the interview,</p>
            <div className="process">
                <h2 className="process__title">Interview Guide</h2>
                <p className="copy">An interview guide was created to aid us in the process and to make sure we were asking about points we determined were important beforehand.</p>
                <Visual>
                    <p className="credit">Interview discussion guide</p>
                    <img draggable="false" alt="Interview discussion guide" className="process__img" src="./media/discussion.png" />
                </Visual>
            </div>
            <div className="process">
                <h2 className="process__title">Audio Transcription</h2>
                <p className="copy">An interview guide was created to aid us in the process and to make sure we were asking points we determined were important beforehand.</p>
                <Visual>
                    <p className="credit">Transcription within the <a className="copy-link" href="https://www.descript.com" target="_blank" rel="noopener noreferrer">Descript</a> interface. </p>
                    <img draggable="false" alt="Transcription within the descript interface" className="process__img" src="./media/transcribing.png" />
                </Visual>
            </div>
            <div className="process">
                <h2 className="process__title">Inductive Coding</h2>
                <p className="copy">After reading through the transcripts, we found <strong>nine categories</strong> to group transribed interview responses into.</p>
                <Visual>
                    <div className="process__words">
                        <p className="process__word">Usage</p>
                        <p className="process__word">Audience</p>
                        <p className="process__word">Privacy Concern</p>
                        <p className="process__word">Meaning</p>
                        <p className="process__word">Interacting</p>
                        <p className="process__word">Privacy Control</p>
                        <p className="process__word">Frequency</p>
                        <p className="process__word">Sharing</p>
                        <p className="process__word">Content</p>
                    </div>
                </Visual>
                <p className="copy">After bringing the transcription into a data sheet, important takeaways were then grouped under these categories.</p>
                <Visual>
                    <p className="credit">Inductive coding data sheet</p>
                    <img draggable="false" alt="inductive coding data sheet" className="process__img" src="./media/inductive.png" />
                </Visual>
            </div>
            <div className="process">
                <h2 className="process__title">Concept Clustering</h2>
                <p className="copy">After breaking each interview down, information was grouped into a conceptually clustered data sheet, where the trends and significant points become clear.</p>
                <Visual>
                    <p className="credit">Data groups after inductive coding</p>
                    <img draggable="false" alt="Data groups after inductive coding" className="process__img" src="./media/conceptcluster.png" />
                </Visual>
            </div>
        </div>
        {/* <div id="desirability" className="piece">
            <h1 className="title">Desirability Survey</h1>
        </div> */}
        <p className="credit">Photo by h heyerlein on Unsplash</p>
        <img draggable="false" alt="" className="full-width-img" src="./media/face.jpg"></img>
        <div id="recommendations" className="piece">
            <h1 className="title">Recommendations</h1>
            <p className="copy">To create a platform that prioritizes meaningful connections, these are our top recommendations for the potential platform:</p>
            <div className="finding">
                <h2 className="recommendation__title">Foster Sharing</h2>
                <Visual>
                    <div className="recommendation-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="973.12236" height="762" viewBox="0 0 973.12236 762"><title>share_online</title><path d="M389.988,226a40.97759,40.97759,0,0,1-46.44867,40.63313,3.32076,3.32076,0,0,1-.57188-.08634,36.97094,36.97094,0,0,1-4.40205-.89547c-.96028-.23741-1.899-.52868-2.82691-.85241a41.00051,41.00051,0,1,1,49.02738-58.835,39.66608,39.66608,0,0,1,2.9995,6.68949,40.10747,40.10747,0,0,1,1.83422,7.72523,36.99828,36.99828,0,0,1,.36681,4.26186C389.97723,225.09366,389.988,225.53606,389.988,226Z" transform="translate(-113.43882 -69)" fill="#2f2e41"/><path d="M206.488,416.5l-32,13s-58-17-47,0,50,11,50,11l49-11Z" transform="translate(-113.43882 -69)" fill="#a0616a"/><path d="M375.488,583.5l3,54s0,61,4,83,11,60,11,60l19-2s-2-43,0-54,0-80,0-80l3-63Z" transform="translate(-113.43882 -69)" fill="#a0616a"/><path d="M457.488,574.5l17,58s11,66,26,96l9,29,25-4-10-41-15-82-11-73Z" transform="translate(-113.43882 -69)" fill="#a0616a"/><path d="M413.488,765.5s-15-2-24,5c0,0,3,54,7,55s31,7,32,0-8-22-8-22Z" transform="translate(-113.43882 -69)" fill="#2f2e41"/><path d="M505.488,752.5s5,15,3,17-10,25-5,28,30,15,33,24,46,10,42,2-30-31-30-31l-14-44Z" transform="translate(-113.43882 -69)" fill="#2f2e41"/><circle cx="249.04921" cy="171.5" r="31" fill="#a0616a"/><path d="M339.988,255l-15,43,51,8s-9-41-3-51S339.988,255,339.988,255Z" transform="translate(-113.43882 -69)" fill="#a0616a"/><path d="M509.488,543.5c-1.83015,33.8577-55.57651,37.57049-64.69236,37.95692a1.62114,1.62114,0,0,1-1.63789-1.20713l-10.47761-39.66527a1.623,1.623,0,0,0-3.19214.4145v39.37382a1.639,1.639,0,0,1-1.06108,1.52859c-63.03825,23.59362-88.7124-12.39139-91.65016-16.93817a1.60584,1.60584,0,0,1-.24975-.99166L347.148,420.11l.34-4.61c-.24-.12-.48-.25-.73-.4-20.4046-11.83223-48.857-95.36138-52.808-107.20469a1.6191,1.6191,0,0,1,.88182-1.99256l25.23237-11.21438a1.623,1.623,0,0,0,.68407-.57216l9.43029-13.90542a1.61869,1.61869,0,0,1,2.59449-.12006c3.3875,4.12929,11.449,11.47273,13.957,13.7302a1.6138,1.6138,0,0,0,1.701.2893l23.47145-9.70157a1.62294,1.62294,0,0,1,.69813-.1212l31.34111,1.51118a19.2257,19.2257,0,0,1,17.81057,14.894l19.68107,85.56988a1.5657,1.5657,0,0,0,.1725.44143c.13639.23573.38967.67289.75212,1.29608.95,1.64,2.64,4.6,4.88,8.59C463.94805,426.25,511.13805,513.03,509.488,543.5Z" transform="translate(-113.43882 -69)" fill="#2f2e41"/><path d="M302.988,311l-8-5s-18,11-18,21-24,49-24,49l-52,41,28,23,93-67Z" transform="translate(-113.43882 -69)" fill="#2f2e41"/><rect x="112.54921" y="760" width="860.57315" height="2" fill="#3f3d56"/><circle cx="203.26921" cy="120.52" r="14.28" fill="#2f2e41"/><path d="M299.708,187.48a14.27833,14.27833,0,0,1,12.92-14.21135c-.448-.04238-.90084-.06865-1.36-.06865a14.28,14.28,0,0,0,0,28.56c.45916,0,.912-.02627,1.36-.06865A14.27836,14.27836,0,0,1,299.708,187.48Z" transform="translate(-113.43882 -69)" fill="#2f2e41"/><path d="M382.36048,223.65l5.928,2.15565c1.837-1.15322,5.93394-3.43223,6.09212-3.52262-.37283-2.79035-4.80712-16.87865-6.06115-19.09291-8.1-2.84689-16.33556-5.4339-24.831-6.57491-9.7381-1.32175-19.95065-.66656-28.87538,3.46821-8.91343,4.1234-16.34687,12.06529-18.39164,21.66782-1.00545,4.69957-.82473,9.90758-3.649,13.79378a11.1527,11.1527,0,0,1-1.977,2.07863,47.55939,47.55939,0,0,0,15.25108,21.43063,47.04122,47.04122,0,0,0,13.52266,7.52383l.6778.23727c0-.04523-.01131-.10171-.01131-.14687-.03385-.32766-.05647-.65525-.09032-.98284-.16949-1.88667-.35021-3.75065-.5197-5.63724-.192-2.21426-.38413-4.51884.4293-6.58623.82467-2.06739,2.98245-3.78457,5.15147-3.32135,2.18033.46315,3.28743,3.79581,1.446,5.03853,2.3272,1.84137,5.8632,1.27651,8.26949-.4406,2.41759-1.72849,3.99921-4.33812,5.64855-6.80087,6.56823-9.83428,16.11807-14.33,25.96924-20.87713Z" transform="translate(-113.43882 -69)" fill="#2f2e41"/><path d="M347.148,420.11l.34-4.61c-.24-.12-.48-.25-.73-.4,20.59-5.08,76.34-19.14,95.6-27.1.95,1.64,2.64,4.6,4.88,8.59C422.988,401.95,367.938,414.28,347.148,420.11Z" transform="translate(-113.43882 -69)" fill="#cfcce0"/><rect x="119.04099" y="450.00298" width="232" height="113" transform="translate(-55.18238 -92.15423) rotate(6.43595)" fill="#3f3d56"/><path d="M225.22786,523.92866C228.74627,546.918,247.8586,563.066,247.8586,563.066s13.40787-21.12506,9.88947-44.11439-22.63074-39.13733-22.63074-39.13733S221.70945,500.93933,225.22786,523.92866Z" transform="translate(-113.43882 -69)" fill="#fff"/><path d="M234.63652,520.13463c14.7414,17.98832,13.96872,42.99717,13.96872,42.99717s-24.67321-4.156-39.4146-22.14431-13.96872-42.99717-13.96872-42.99717S219.89513,502.14631,234.63652,520.13463Z" transform="translate(-113.43882 -69)" fill="#000000"/><polygon points="283.549 269 295.549 314 273.549 348 283.549 314 283.549 269" opacity="0.1"/><path d="M330.988,276s-11,16-9,18,25,6,25,6v-6Z" transform="translate(-113.43882 -69)" fill="#cfcce0"/><path d="M371.988,276s11,16,9,18-34,6-34,6v-6Z" transform="translate(-113.43882 -69)" fill="#cfcce0"/><circle cx="315.54921" cy="462" r="6" fill="#cfcce0"/><circle cx="308.54921" cy="439" r="6" fill="#cfcce0"/><circle cx="302.54921" cy="416" r="6" fill="#cfcce0"/><circle cx="296.54921" cy="392" r="6" fill="#cfcce0"/><circle cx="288.54921" cy="369" r="6" fill="#cfcce0"/><path d="M396.488,419.5l-33,28s-36,31-20,39,35-32,35-32l44-32Z" transform="translate(-113.43882 -69)" fill="#a0616a"/><path d="M407.488,289.5h0a17.52884,17.52884,0,0,1,18.72636,6.43664A48.669,48.669,0,0,1,432.488,306.5c3,8,9,125,9,125l-55-8,21-41Z" transform="translate(-113.43882 -69)" fill="#2f2e41"/><path d="M584.31284,382.33071" transform="translate(-113.43882 -69)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><path d="M584.31284,472.47244" transform="translate(-113.43882 -69)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><rect x="469.8744" y="403.47266" width="2" height="51.58984" fill="#3f3d56"/><path d="M911.27905,830.5918H631.08764a47.83536,47.83536,0,0,1-47.77442-47.78809V615.31445h2V782.80371a45.83275,45.83275,0,0,0,45.77442,45.78809H911.27905a45.83942,45.83942,0,0,0,45.78808-45.78809V612.917h2V782.80371A47.842,47.842,0,0,1,911.27905,830.5918Z" transform="translate(-113.43882 -69)" fill="#3f3d56"/><rect x="843.62831" y="403.61426" width="2" height="50.38477" fill="#3f3d56"/><path d="M958.06675,472.61417" transform="translate(-113.43882 -69)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><path d="M958.06675,382.47244" transform="translate(-113.43882 -69)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="2"/><path d="M959.06713,382.47266h-2V333.38525h3.13574a2.00344,2.00344,0,0,0,2.001-2.00146V245.3042a2.003,2.003,0,0,0-2.001-2.001h-3.13574V116.7749A45.83317,45.83317,0,0,0,911.27905,71H631.08764a45.8265,45.8265,0,0,0-45.77442,45.7749V382.33057h-2V116.7749A47.8288,47.8288,0,0,1,631.08764,69H911.27905a47.83546,47.83546,0,0,1,47.78808,47.7749V241.30322h1.13574a4.00562,4.00562,0,0,1,4.001,4.001v86.07959a4.00573,4.00573,0,0,1-4.001,4.00146h-1.13574Z" transform="translate(-113.43882 -69)" fill="#3f3d56"/><rect x="622.38287" y="24.99269" width="52.19216" height="10.59797" rx="2.54189" fill="#e6e8ec"/><circle cx="688.47775" cy="30.29168" r="6.01122" fill="#e6e8ec"/><path d="M935.66215,126.02746V786.68234a29.68545,29.68545,0,0,1-29.68488,29.67176H637.76515a29.63322,29.63322,0,0,1-29.6848-29.67176V126.02746a29.68361,29.68361,0,0,1,29.6848-29.68488h40.14336v5.15061A24.44269,24.44269,0,0,0,702.351,125.93571H838.75718a24.44263,24.44263,0,0,0,24.44244-24.44252V96.34258h42.77765A29.67523,29.67523,0,0,1,935.66215,126.02746Z" transform="translate(-113.43882 -69)" fill="#e6e8ec"/><rect x="541.54921" y="584" width="232" height="113" opacity="0.2"/><path d="M975.68354,473.63473H568.059v-92.315H975.68354Zm-405.22679-2.39779h402.829V383.71755h-402.829Z" transform="translate(-113.43882 -69)" fill="#3f3d56"/><rect x="486.99033" y="343.49105" width="45.55804" height="45.55804" fill="#000000"/><path d="M639.99271,452.05461H592.03688V404.09877h47.95583Zm-45.558-2.39779h43.16025V406.49657H594.43467Z" transform="translate(-113.43882 -69)" fill="#3f3d56"/><rect x="602.08433" y="344.68994" width="213.40346" height="2.39779" fill="#3f3d56"/><rect x="602.08433" y="361.47448" width="213.40346" height="2.39779" fill="#3f3d56"/><rect x="602.08433" y="378.25902" width="213.40346" height="2.39779" fill="#3f3d56"/><path d="M975.68354,615.31438H568.059v-92.315H975.68354Zm-405.22679-2.39779h402.829v-87.5194h-402.829Z" transform="translate(-113.43882 -69)" fill="#3f3d56"/><rect x="897.75531" y="554.17069" width="45.55804" height="45.55804" transform="translate(1727.62985 1084.89942) rotate(-180)" fill="#000000"/><path d="M951.70562,593.73425H903.74979V545.77842h47.95583Zm-45.558-2.39779h43.16025V548.17621H906.14758Z" transform="translate(-113.43882 -69)" fill="#3f3d56"/><rect x="501.37708" y="486.36959" width="213.40346" height="2.39779" fill="#3f3d56"/><rect x="501.37708" y="503.15413" width="213.40346" height="2.39779" fill="#3f3d56"/><rect x="501.37708" y="519.93867" width="213.40346" height="2.39779" fill="#3f3d56"/><rect x="551.28055" y="165.07955" width="213.40346" height="2.39779" fill="#3f3d56"/><rect x="551.28055" y="181.8641" width="213.40346" height="2.39779" fill="#3f3d56"/><rect x="551.28055" y="198.64864" width="213.40346" height="2.39779" fill="#3f3d56"/></svg>
                    </div>
                </Visual>
                <p className="finding__copy">Through research, we were able to learn that meaningful connections come from <strong>repeated engagement.</strong> So, making sharing as easy as possible will make engaging easier.</p>
            </div>
            <div className="finding">
                <h2 className="recommendation__title">Emphasize Audience Control</h2>
                <Visual>
                    <div className="recommendation-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1121" height="867.01056" viewBox="0 0 1121 867.01056"><title>connection</title><path d="M594.5,715.12135a306.99915,306.99915,0,1,1,217.082-89.918A304.99057,304.99057,0,0,1,594.5,715.12135Zm0-612c-168.17773,0-305,136.82226-305,305s136.82227,305,305,305,305-136.82227,305-305S762.67773,103.12135,594.5,103.12135Z" transform="translate(-39.5 -16.49472)" fill="#3f3d56"/><path d="M620.35913,681.22121c-5.68507,21.01543-25.15771,34.03081-25.15771,34.03081s-10.25532-21.05736-4.57026-42.07279,25.15772-34.03081,25.15772-34.03081S626.0442,660.20578,620.35913,681.22121Z" transform="translate(-39.5 -16.49472)" fill="#ffffff"/><path d="M568.64087,681.22121c5.68507,21.01543,25.15771,34.03081,25.15771,34.03081s10.25532-21.05736,4.57026-42.07279-25.15772-34.03081-25.15772-34.03081S562.9558,660.20578,568.64087,681.22121Z" transform="translate(-39.5 -16.49472)" fill="#ffffff"/><path d="M576.99467,676.70477C592.59458,691.89065,594.5,715.23489,594.5,715.23489s-23.387-1.27694-38.98695-16.46283-17.50532-38.53012-17.50532-38.53012S561.39476,661.51888,576.99467,676.70477Z" transform="translate(-39.5 -16.49472)" fill="#3f3d56"/><path d="M612.00533,676.70477C596.40542,691.89065,594.5,715.23489,594.5,715.23489s23.387-1.27694,38.98695-16.46283,17.50532-38.53012,17.50532-38.53012S627.60524,661.51888,612.00533,676.70477Z" transform="translate(-39.5 -16.49472)" fill="#3f3d56"/><path d="M568.64087,136.17923c5.68507-21.01542,25.15771-34.03081,25.15771-34.03081s10.25532,21.05736,4.57026,42.07279S573.21112,178.252,573.21112,178.252,562.9558,157.19466,568.64087,136.17923Z" transform="translate(-39.5 -16.49472)" fill="#ffffff"/><path d="M620.35913,136.17923c-5.68507-21.01542-25.15771-34.03081-25.15771-34.03081s-10.25532,21.05736-4.57026,42.07279S615.78888,178.252,615.78888,178.252,626.0442,157.19466,620.35913,136.17923Z" transform="translate(-39.5 -16.49472)" fill="#ffffff"/><path d="M612.00533,140.69568C596.40542,125.50979,594.5,102.16556,594.5,102.16556s23.387,1.27694,38.98695,16.46282,17.50532,38.53012,17.50532,38.53012S627.60524,155.88156,612.00533,140.69568Z" transform="translate(-39.5 -16.49472)" fill="#3f3d56"/><path d="M576.99467,140.69568C592.59458,125.50979,594.5,102.16556,594.5,102.16556s-23.387,1.27694-38.98695,16.46282-17.50532,38.53012-17.50532,38.53012S561.39476,155.88156,576.99467,140.69568Z" transform="translate(-39.5 -16.49472)" fill="#3f3d56"/><rect x="14.62796" y="12.67681" width="397.45533" height="404.16658" fill="#ffffff"/><polygon points="397.065 22.935 43.003 22.935 22.935 22.935 22.935 44.437 22.935 401.365 43.003 401.365 43.003 44.437 397.065 44.437 397.065 22.935" fill="#3f3d56"/><polygon points="397.065 22.935 43.003 22.935 22.935 22.935 22.935 44.437 22.935 401.365 43.003 401.365 43.003 44.437 397.065 44.437 397.065 22.935" opacity="0.3"/><polygon points="339.727 44.437 323.959 44.437 43.003 44.437 43.003 96.041 323.959 96.041 323.959 401.365 397.065 401.365 397.065 44.437 339.727 44.437" opacity="0.1"/><path d="M39.5,16.49472V440.79506h420V16.49472ZM436.56485,417.85991H62.43515v-378.43h374.1297Z" transform="translate(-39.5 -16.49472)" fill="#3f3d56"/><path d="M334.24988,456.438s18.99179,36.79659,29.67467,45.1055-17.21131,18.39829-17.21131,18.39829L314.07111,468.9014Z" transform="translate(-39.5 -16.49472)" fill="#a0616a"/><path d="M219.11217,366.82054s88.43051,23.14624,96.14592,38.57707,31.45515,52.82091,31.45515,52.82091l-35.01611,27.89419-34.42261-51.63392-94.95894-42.73153Z" transform="translate(-39.5 -16.49472)" fill="#2f2e41"/><path d="M343.74578,505.1045s-8.30891-7.12192-10.68288-2.374-9.4959,29.08117-9.4959,29.08117,10.08939,9.4959,30.86166,3.561c0,0,5.34144-4.15445,13.65034,0s39.17057-4.15445,37.98358-17.8048-32.64213-12.46336-32.64213-12.46336-13.24872-14.84313-14.93327-9.202.68942,6.23457.68942,6.23457S348.49372,513.41341,343.74578,505.1045Z" transform="translate(-39.5 -16.49472)" fill="#2f2e41"/><path d="M242.25841,492.64114l-5.93494,49.85344h29.08118s-2.374-38.57707-1.78048-43.325S242.25841,492.64114,242.25841,492.64114Z" transform="translate(-39.5 -16.49472)" fill="#a0616a"/><path d="M258.87622,382.84486s16.02432,23.73974,6.52843,25.52022-17.21131-25.52022-17.21131-25.52022Z" transform="translate(-39.5 -16.49472)" fill="#a0616a"/><path d="M137.80357,380.47089s-11.86986,35.01611,35.01611,44.512S233.9495,442.1942,233.9495,442.1942l5.93493,60.53633,40.95105,2.374s19.58528-91.99147-5.93494-103.86134-79.52811-25.52022-79.52811-25.52022Z" transform="translate(-39.5 -16.49472)" fill="#2f2e41"/><path d="M239.88443,534.77917s8.30891-4.15445,9.4959-4.15445c0,0,5.21664-12.03225,14.77493-10.76407L284.98993,550.21s31.45515,22.55275,9.4959,28.48768-39.17057,1.187-39.17057,1.187l-8.9024-6.52843s1.187-6.52843-6.52843-5.34144c0,0-16.02432-6.52843-15.43082-11.27638s13.19974-25.4148,13.19974-25.4148Z" transform="translate(-39.5 -16.49472)" fill="#2f2e41"/><circle cx="205.42913" cy="224.80197" r="23.73974" fill="#a0616a"/><path d="M225.64059,233.878s-21.36576,15.43082-25.52021,16.02432S219.70566,279.577,219.70566,279.577s11.27637-18.3983,18.39829-20.77227S225.64059,233.878,225.64059,233.878Z" transform="translate(-39.5 -16.49472)" fill="#a0616a"/><path d="M209.61627,253.46331s-8.9024-11.86987-14.24384-11.86987-53.4144,5.34144-57.56886,45.1055-1.78048,109.20278-1.78048,109.20278-3.561-17.21131,36.2031-10.08939c0,0,47.47947-10.08939,55.78838-10.08939s11.86986-84.86955,11.86986-84.86955l-13.51315-20.95128S220.29915,281.3575,209.61627,253.46331Z" transform="translate(-39.5 -16.49472)" fill="#d0cde1"/><path d="M230.982,286.10544l8.9024,4.748,10.68289,65.28427,14.83733,33.82912s-16.02432-5.51658-17.21131,1.09942l-23.73973-34.335Z" transform="translate(-39.5 -16.49472)" fill="#d0cde1"/><path d="M239.59174,221.82742l12.915,1.61329c-.24655,2.62817-.178,5.884,2.15065,7.1272,1.09473.58442,2.48381.55455,3.45411,1.32819,2.33365,1.86066.05094,5.86193,1.36849,8.54l3.77724.99943a7.301,7.301,0,0,0,9.9214,2.97569c2.53815-1.52411,3.83157-4.43606,4.9736-7.16752,1.36444-3.26337,2.7569-6.76947,2.07391-10.24-.73377-3.72863-3.78-6.82731-3.91826-10.625-.06184-1.69888.29692-3.81688-1.13523-4.73284a6.05456,6.05456,0,0,0-2.09426-.55583c-3.29945-.689-5.13658-4.10389-7.59715-6.40753-5.15647-4.82762-13.07516-4.70086-20.12625-4.27983a17.87605,17.87605,0,0,0-5.9229,1.03247,17.2568,17.2568,0,0,0-5.5802,4.44971c-3.78142,4.03316-7.463,8.25742-9.95751,13.19127s-3.72344,10.69847-2.36767,16.05827c-.13352-.51575,4.35452-3.89049,4.913-4.4313,1.7541-1.6986,1.91373-2.50975,2.86291-4.46416C231.51529,221.683,234.59209,221.20289,239.59174,221.82742Z" transform="translate(-39.5 -16.49472)" fill="#2f2e41"/><polygon points="162.104 281.777 163.885 323.322 190.284 354.281 166.259 319.761 162.104 281.777" opacity="0.1"/><polygon points="114.625 293.054 135.397 341.127 162.104 363.086 133.616 343.501 114.625 293.054" opacity="0.1"/><path d="M266.95753,348.51327l12.55128,8.63375a3.46577,3.46577,0,0,1,.95894,4.264l-1.67865,3.46413.38873.26739-1.90741,3.93622-.38872-.26739-13.82528,28.53037a2.67692,2.67692,0,0,1-3.9831,1.27159l-11.79513-8.11366a3.98493,3.98493,0,0,1-1.10259-4.90268L263.631,349.57527A2.23567,2.23567,0,0,1,266.95753,348.51327Z" transform="translate(-39.5 -16.49472)" fill="#3f3d56"/><polygon points="207.976 368.787 221.485 378.08 239.108 341.713 225.598 332.42 207.976 368.787" fill="#fff"/><path d="M241.61036,377.27649s23.54176,16.31379,15.33769,21.41628-25.29356-17.5427-25.29356-17.5427Z" transform="translate(-39.5 -16.49472)" fill="#a0616a"/><path d="M171.6327,256.43077s-30.86166,8.9024-21.95926,36.2031c2.14748,6.58562,4.74393,13.65473,7.44776,20.59085,8.50493,21.81761,18.07246,42.31945,18.07246,42.31945L202.019,379.79885,238.104,389.96678l4.15446-3.561s1.187-11.27637-4.15446-12.46336-13.65034-5.93493-13.65034-5.93493l-21.36577-31.45515S202.49435,258.21125,171.6327,256.43077Z" transform="translate(-39.5 -16.49472)" fill="#d0cde1"/><rect x="758.22822" y="329.36149" width="387.99211" height="394.54357" transform="translate(1864.94854 1036.77183) rotate(-180)" fill="#ffffff"/><polygon points="733.389 322.881 1079.02 322.881 1098.611 322.881 1098.611 343.871 1098.611 692.301 1079.02 692.301 1079.02 343.871 733.389 343.871 733.389 322.881" fill="#3f3d56"/><polygon points="733.389 322.881 1079.02 322.881 1098.611 322.881 1098.611 343.871 1098.611 692.301 1079.02 692.301 1079.02 343.871 733.389 343.871 733.389 322.881" opacity="0.3"/><polygon points="789.362 343.871 804.754 343.871 1079.02 343.871 1079.02 394.246 804.754 394.246 804.754 692.301 733.389 692.301 733.389 343.871 789.362 343.871" opacity="0.1"/><path d="M750.5,316.98651V731.18446h410V316.98651Zm22.38908,22.38908h365.22184V708.79538H772.88908Z" transform="translate(-39.5 -16.49472)" fill="#3f3d56"/><path d="M990.07473,512.2639c-8.8288-14.91793-26.29587-15.61318-26.29587-15.61318s-17.02066-2.17658-27.93931,20.54362c-10.17705,21.17709-24.22268,41.624-2.26123,46.58141l3.96687-12.34669,2.45667,13.26589a85.92932,85.92932,0,0,0,9.39649.16059c23.51893-.75933,45.91717.22216,45.196-8.21742C993.63563,545.41888,998.56981,526.61794,990.07473,512.2639Z" transform="translate(-39.5 -16.49472)" fill="#2f2e41"/><polygon points="886.939 616.17 885.081 649.604 939.565 655.176 941.423 620.504 922.848 608.741 886.939 616.17" fill="#a0616a"/><path d="M1072.86447,706.03279c-1.63392-15.7945-66.49972-22.964-82.08861-24.461l-5.82886-3.40019-1.85741-19.81239s-57.57975-4.9531-61.91371-5.57223-8.04879,7.42964-8.04879,9.28705c0,1.34239-.81,10.92858-4.06293,16.61044-7.02474,5.64464-28.44177,23.40538-28.44177,30.13442,0,8.04878,17.02628,109.2777,17.02628,109.2777l1.85741,21.05066,17.33584,3.09569-1.23828-65.62854s6.19137-37.76736-2.47655-48.29269v-4.334s25.42321-6.62361,34.38343-13.83544c2.5963-.55792,9.89244-1.93242,13.922-.73707.55259.3254,1.18976.65961,1.898.99959a2.89531,2.89531,0,0,1,.25625.26147l.06991-.107c11.59106,5.42531,41.32521,12.26843,53.48545,10.32278a42.5575,42.5575,0,0,1,27.242,4.9531c-6.8105,8.66792-1.85741,33.4334-1.85741,33.4334l.61914,53.2458,8.66792,10.52533h11.7636V793.95026S1074.72188,723.98777,1072.86447,706.03279Z" transform="translate(-39.5 -16.49472)" fill="#2f2e41"/><circle cx="918.8241" cy="516.17968" r="20.43153" fill="#a0616a"/><path d="M945.94136,545.67627s3.09569,13.621-1.23827,14.85929a58.59449,58.59449,0,0,0-9.9062,4.334l-4.95309,16.09757v16.09757l60.0563,6.8105,1.85741-5.57223v-8.04878L984.947,577.8714l-3.09569-3.09568s-13.621-14.85929-10.52533-29.09945Z" transform="translate(-39.5 -16.49472)" fill="#a0616a"/><path d="M999.49672,594.89768s1.85741,21.66979,0,31.576-1.23827,24.76548-1.23827,24.76548l-13.621-2.47654V615.3292l3.09569-17.955Z" transform="translate(-39.5 -16.49472)" fill="#a0616a"/><circle cx="926.41665" cy="480.23157" r="12.62965" fill="#2f2e41"/><path d="M951.95757,493.40269A12.63014,12.63014,0,0,1,963.25778,480.844a12.758,12.758,0,0,0-1.32944-.071,12.62965,12.62965,0,0,0,0,25.2593,12.758,12.758,0,0,0,1.32944-.071A12.63013,12.63013,0,0,1,951.95757,493.40269Z" transform="translate(-39.5 -16.49472)" fill="#2f2e41"/><polygon points="946.671 494.331 929.415 485.292 905.584 488.99 900.654 510.766 912.927 510.294 916.356 502.294 916.356 510.162 922.019 509.944 925.306 497.207 927.36 510.766 947.493 510.355 946.671 494.331" fill="#2f2e41"/><path d="M915.87868,818.35567s8.78562,4.13441,11.36962,5.68481,12.92-1.5504,10.85281,7.752-10.85281,18.088-10.85281,18.088-4.13441,4.6512-4.13441,7.752-10.336,26.87363-22.73923,25.84-10.336-13.43682-10.336-13.43682l2.584-13.43682s5.168-22.73923,6.20161-22.22242,3.61761,4.1344,3.61761,4.1344S915.36188,833.34289,915.87868,818.35567Z" transform="translate(-39.5 -16.49472)" fill="#d0cde1"/><path d="M1044.72826,802.87725s-8.78561,4.1344-11.36962,5.6848-12.92-1.5504-10.85281,7.752,10.85281,18.088,10.85281,18.088,4.13441,4.6512,4.13441,7.752,10.336,26.87363,22.73923,25.84,10.336-13.43682,10.336-13.43682l-2.584-13.43681s-5.168-22.73923-6.20161-22.22243-3.6176,4.1344-3.6176,4.1344S1045.24506,817.86447,1044.72826,802.87725Z" transform="translate(-39.5 -16.49472)" fill="#d0cde1"/><path d="M976.61026,655.56968v-4.9136h-1.09191v-2.18382a3.82168,3.82168,0,0,0-3.82168-3.82169H958.59375a3.82169,3.82169,0,0,0-3.82169,3.82169v36.579a3.8217,3.8217,0,0,0,3.82169,3.82169h13.10292a3.8217,3.8217,0,0,0,3.82168-3.82169V662.12114h1.09191v-4.9136h-1.09191v-1.63786Z" transform="translate(-39.5 -16.49472)" fill="#d0cde1"/><circle cx="926.19116" cy="639.07496" r="2.18382" fill="#3f3d56"/><path d="M910.96011,584.37234l-11.14446,45.81615s-4.334,9.9062,5.57223,16.09757S937.583,660.52621,937.583,660.52621s19.81239,27.242,22.28894,16.09757-14.85929-25.38463-14.85929-25.38463L914.67494,632.0459l11.7636-32.19513Z" transform="translate(-39.5 -16.49472)" fill="#a0616a"/><path d="M991.44794,641.9521s9.28706-1.23828,8.66792,9.28705S987.114,663.00276,987.114,663.00276,981.54175,686.53,973.493,682.196s4.334-27.86117,4.334-27.86117l10.52533-8.04878Z" transform="translate(-39.5 -16.49472)" fill="#a0616a"/><path d="M931.70121,580.348l9.90619-20.43152L921.795,566.72694s-11.14447,5.57223-11.7636,18.57411,14.24015,19.81239,14.24015,19.81239,2.47655,18.57411,1.23828,21.05066,0,12.38274,0,12.38274,23.83678-6.50094,35.60038,1.54785,21.36023,3.40525,21.36023,3.40525-.61914-15.47843,4.334-17.955,9.28706-14.24015,4.9531-21.6698c0,0,9.90619,1.23828,9.28706-8.04878s-5.57224-17.33584-13.621-21.05066-8.93854-4.30835-8.93854-4.30835l11.41509,21.02505v5.57224s-20.20795-12.89869-40.20092-13.97359a26.62961,26.62961,0,0,0-17.9976,5.9245l-.00037.0003Z" transform="translate(-39.5 -16.49472)" fill="#2f2e41"/></svg>
                    </div>
                </Visual>
                <p className="finding__copy">Users feel more private and more comfortable sharing when they know who is seeing their content. </p>
            </div>
            <div className="finding">
                <h2 className="recommendation__title">Prioritize Privacy</h2>
                <Visual>
                    <div className="recommendation-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="921.67049" height="831.29516" viewBox="0 0 921.67049 831.29516"><title>privacy_protection</title><circle cx="436.46932" cy="576.55581" r="216.46236" fill="#f2f2f2"/><ellipse cx="405.89011" cy="803.23377" rx="205.41211" ry="28.06139" fill="#3f3d56"/><ellipse cx="550.93528" cy="262.3079" rx="14.54025" ry="7.05806" transform="translate(-194.02831 154.86044) rotate(-18.57978)" fill="#3f3d56"/><path d="M521.45984,294.47867l76.27461-34.75382S726.95654,210.88119,837.5,330.10945c0,0-49.54223-31.8027-87.09376,10.207,0,0-70.66206-19.1171-129.961,51.12411,0,0-92.74716,14.04481-131.3753,63.26528,0,0-43.06382-6.62283-60.20459,47.97007a1.6372,1.6372,0,0,1-2.70874.67441h0a1.62664,1.62664,0,0,1-.46047-.85878C424.08674,494.05426,405.14671,381.5055,521.45984,294.47867Z" transform="translate(-139.16475 -34.35242)" fill="#000000"/><path d="M521.45984,294.47867l76.27461-34.75382S726.95654,210.88119,837.5,330.10945c0,0-49.54223-31.8027-87.09376,10.207,0,0-70.66206-19.1171-129.961,51.12411,0,0-92.74716,14.04481-131.3753,63.26528,0,0-43.06382-6.62283-60.20459,47.97007a1.6372,1.6372,0,0,1-2.70874.67441h0a1.62664,1.62664,0,0,1-.46047-.85878C424.08674,494.05426,405.14671,381.5055,521.45984,294.47867Z" transform="translate(-139.16475 -34.35242)" opacity="0.2"/><polygon points="405.524 404.125 437.285 409.419 447.872 359.13 422.287 348.543 405.524 404.125" fill="#2f2e41"/><circle cx="449.19566" cy="366.62921" r="27.34998" fill="#a0616a"/><path d="M576.44995,416.42113s2.64677,33.52578-17.64515,36.17255,17.64515,62.64026,27.35,61.758,27.35-65.287,27.35-65.287S590.56606,433.184,598.50638,419.0679Z" transform="translate(-139.16475 -34.35242)" fill="#a0616a"/><path d="M542.483,538.61376s3.529,25.58546,14.11612,25.58546-7.05806-29.11449-7.05806-29.11449Z" transform="translate(-139.16475 -34.35242)" fill="#a0616a"/><path d="M696.87806,564.19922s26.46772,22.05643,22.93869,29.11449-26.46772-7.94031-28.23223-25.58546Z" transform="translate(-139.16475 -34.35242)" fill="#a0616a"/><path d="M537.1895,648.89592l-16.76289,62.64026-18.5274,75.87413h17.64514s6.1758-23.82095,17.64515-36.17255c0,0,11.46934-19.40966,11.46934-32.64352l27.35-64.40478Z" transform="translate(-139.16475 -34.35242)" fill="#a0616a"/><path d="M609.53459,652.425l5.29355,59.11123s-.88226,42.34835,0,52.05318,0,23.82095,0,23.82095h15.88063s14.99837-52.05318,10.58708-80.28541l6.1758-66.1693Z" transform="translate(-139.16475 -34.35242)" fill="#a0616a"/><path d="M588.36042,490.08961s-23.77-18.83744-17.61966-45.15014c0,0-23.84643,1.03728-33.55126,10.74211s2.64677,42.34835,2.64677,42.34835,21.17417,35.29029,17.64514,51.17092-41.46609,99.69507-29.11449,104.98861,87.34347,23.82095,125.28054-7.05806c0,0,9.70483-87.34347-29.11449-115.5757V509.49927s7.058-6.1758,3.529-22.05643c0,0,14.99838-27.35,6.17581-32.64352s-29.0887-13.05117-29.0887-13.05117S606.88782,481.267,588.36042,490.08961Z" transform="translate(-139.16475 -34.35242)" fill="#2f2e41"/><path d="M542.483,455.68158S531.0137,453.91706,519.54435,470.68s-41.46609,43.23061-27.35,56.46447,52.05318,22.05643,52.05318,22.05643l8.82257-15.88063-37.93706-18.52741,31.76126-23.82094Z" transform="translate(-139.16475 -34.35242)" fill="#2f2e41"/><path d="M629.82651,455.68158s12.3516,0,17.64514,14.99837,36.17255,66.1693,36.17255,66.1693l17.64515,27.35-12.3516,14.11612-34.408-38.81932-32.64352-53.8177Z" transform="translate(-139.16475 -34.35242)" fill="#2f2e41"/><path d="M523.07338,785.64579h-24.7032l-5.29355,43.23061s-14.11611,22.93869,7.05806,20.29192,14.11612-26.46772,14.11612-26.46772l5.29354-8.82257,1.76452,18.5274,1.76451-.88226V811.23125S532.77821,802.40868,523.07338,785.64579Z" transform="translate(-139.16475 -34.35242)" fill="#2f2e41"/><path d="M635.12005,785.64579l-22.93869-1.76451-4.41128,49.40641s-2.64677,18.5274,13.23386,15.88063S631.591,831.52317,631.591,831.52317v-27.35Z" transform="translate(-139.16475 -34.35242)" fill="#2f2e41"/><path d="M568.50963,373.19052s-12.85305,4.28435-13.5057,21.2042a30.01115,30.01115,0,0,0,.89217,8.03435c.72373,3.0672,1.189,9.66685-4.41983,18.29121a181.06369,181.06369,0,0,0-10.27641,17.67686l-.04021.08042,14.11612,1.76452,3.00156-23.39848a116.515,116.515,0,0,1,9.25236-32.84814l.09768-.21785s6.1758,11.46935,18.5274,11.46935l-4.41128-4.41129s19.40966,7.94031,26.46772,7.94031c0,0,5.29354,3.529,0,8.82258s-15.88063,17.64514-9.70483,27.35.88225,12.3516.88225,12.3516l9.70483-5.29354,4.41129-2.64677v3.529l22.93869-2.64677s6.1758-.88226-7.05806-15.88063c0,0-3.49462-5.82437-1.96569-10.8478a25.33854,25.33854,0,0,0,.96317-11.85005C625.41814,385.12415,613.78618,352.24167,568.50963,373.19052Z" transform="translate(-139.16475 -34.35242)" fill="#2f2e41"/><path d="M706.47248,591.74916c8.72963-8.8774-.939-27.26315-1.69463-28.66107L605.07538,359.49481a2.596,2.596,0,0,0-4.6629,2.28336L700.16491,565.4725l.028.051c.099.182,9.72559,18.46593,1.15184,23.70465-9.23357,5.64577-20.00163-3.50035-20.10924-3.59337a2.59558,2.59558,0,1,0-3.39362,3.92828c.5565.4811,13.7801,11.69562,26.21089,4.09426A12.57535,12.57535,0,0,0,706.47248,591.74916Z" transform="translate(-139.16475 -34.35242)" fill="#3f3d56"/><path d="M514.32738,279.88055l73.87332-33.6597s125.15392-47.306,232.21725,68.16875c0,0-47.98254-30.80149-84.35187,9.88562,0,0-68.43748-18.51526-125.8696,49.51461,0,0-89.8273,13.60266-127.23935,61.27357,0,0-43.00714-6.61412-59.06065,48.95392l-2.221-2.184S397.22106,367.50085,514.32738,279.88055Z" transform="translate(-139.16475 -34.35242)" fill="#000000"/><path d="M514.69194,279.67125s-36.17255,121.75151-31.76126,155.27728" transform="translate(-139.16475 -34.35242)" fill="#3f3d56"/><path d="M552.92157,262.29546s45.58481,102.95475,57.05415,111.77732" transform="translate(-139.16475 -34.35242)" fill="#3f3d56"/><path d="M587.91929,246.14548s117.34022,70.58058,148.21922,78.52089" transform="translate(-139.16475 -34.35242)" fill="#3f3d56"/><path d="M411.50669,832.89852c-.212-.34649-5.21175-8.69467-6.94509-26.02988-1.58988-15.90414-.56756-42.71181,13.33526-80.1063,26.33846-70.84137-6.06985-128.00009-6.401-128.56945l1.59889-.92757c.08392.14437,8.44654,14.7176,13.3867,37.92324a165.44659,165.44659,0,0,1-6.85216,92.218c-26.29335,70.72046-6.74568,104.19892-6.54536,104.52916Z" transform="translate(-139.16475 -34.35242)" fill="#3f3d56"/><circle cx="262.04295" cy="547.66925" r="12.01157" fill="#3f3d56"/><circle cx="299.92559" cy="592.01966" r="12.01157" fill="#3f3d56"/><circle cx="274.05452" cy="621.5866" r="12.01157" fill="#000000"/><circle cx="305.46939" cy="646.5337" r="12.01157" fill="#000000"/><circle cx="264.81485" cy="685.34031" r="12.01157" fill="#3f3d56"/><path d="M418.76307,833.34065s-12.01156-29.56694,24.02314-51.74214Z" transform="translate(-139.16475 -34.35242)" fill="#3f3d56"/><path d="M403.99071,832.80432s-5.46658-31.442-47.77694-31.1725Z" transform="translate(-139.16475 -34.35242)" fill="#3f3d56"/><polygon points="191.762 0 234.041 23.132 152.123 77.386 112.936 51.535 191.762 0" fill="#3f3d56"/><polygon points="90.089 73.493 0 131.572 41.837 156.437 131.892 96.318 90.089 73.493" fill="#3f3d56"/><path d="M245.83478,79.01991a35.50777,35.50777,0,0,0-19.113,24.204,10.49372,10.49372,0,0,0,3.44177,10.49713l26.04431,21.99527a12.07189,12.07189,0,0,0,13.651,1.3169c10.58913-5.87205,27.59406-18.1986,20.0009-33.80926A10.79238,10.79238,0,0,0,286.1,98.954l-29.0262-19.19415A11.3309,11.3309,0,0,0,245.83478,79.01991Z" transform="translate(-139.16475 -34.35242)" fill="#d0cde1"/><ellipse cx="301.38909" cy="130.98402" rx="42.84102" ry="29.09417" transform="translate(-122.82677 260.14939) rotate(-53.33029)" fill="#3f3d56"/><path d="M288.12757,164.85893c5.28053,3.934,17.83968-3.82122,29.12941-17.57854q1.49993-1.82442,2.96537-3.78865,1.0734-1.443,2.06913-2.88554c10.46805-15.12554,14.60605-29.96212,9.19925-33.98731-5.4465-4.0575-18.62519,4.31143-30.17828,18.87094q-.96769,1.22355-1.91649,2.49625a98.89706,98.89706,0,0,0-6.05725,9.13963C285.89261,149.90734,283.47226,161.3905,288.12757,164.85893Z" transform="translate(-139.16475 -34.35242)" opacity="0.2"/><path d="M293.33871,137.12571,317.257,147.28039l17.11321,7.26465,2.53083-3.41577L322.29148,140.6062l-20.979-15.11637q-.96769,1.22355-1.91649,2.49625A98.89706,98.89706,0,0,0,293.33871,137.12571Z" transform="translate(-139.16475 -34.35242)" fill="#d0cde1"/><circle cx="199.8441" cy="120.82018" r="5.19893" fill="#d0cde1"/><path d="M340.53451,210.09164a2.48185,2.48185,0,0,1,1.17624-.59983c28.00239-5.78582,45.62246-21.9089,53.86527-49.28893a2.49108,2.49108,0,0,1,4.77075,1.43591c-8.6965,28.88662-28.085,46.62787-57.62822,52.73218a2.49139,2.49139,0,0,1-2.184-4.27933Z" transform="translate(-139.16475 -34.35242)" fill="#000000"/><path d="M333.643,188.41487a2.47686,2.47686,0,0,1,1.17625-.59983c20.99616-4.33861,34.20718-16.42723,40.388-36.95671a2.49108,2.49108,0,0,1,4.77075,1.4359c-6.66287,22.13125-21.51666,35.72308-44.151,40.4a2.49139,2.49139,0,0,1-2.18405-4.27932Z" transform="translate(-139.16475 -34.35242)" fill="#000000"/><path d="M350.71665,232.28949a2.47682,2.47682,0,0,1,1.17625-.59983c27.945-5.774,58.50393-33.73665,66.72989-61.0606a2.49108,2.49108,0,0,1,4.77075,1.4359c-8.6898,28.86511-40.97163,58.40431-70.49285,64.50385a2.49138,2.49138,0,0,1-2.184-4.27932Z" transform="translate(-139.16475 -34.35242)" fill="#000000"/><polygon points="729.909 0 687.63 23.132 769.547 77.386 808.734 51.535 729.909 0" fill="#3f3d56"/><polygon points="831.582 73.493 921.67 131.572 879.833 156.437 789.779 96.318 831.582 73.493" fill="#3f3d56"/><path d="M954.16522,79.01991a35.50777,35.50777,0,0,1,19.113,24.204,10.49372,10.49372,0,0,1-3.44177,10.49713l-26.04431,21.99527a12.07189,12.07189,0,0,1-13.651,1.3169c-10.58913-5.87205-27.59406-18.1986-20.0009-33.80926a10.79238,10.79238,0,0,1,3.75978-4.27l29.0262-19.19415A11.3309,11.3309,0,0,1,954.16522,79.01991Z" transform="translate(-139.16475 -34.35242)" fill="#d0cde1"/><ellipse cx="898.61091" cy="130.98402" rx="29.09417" ry="42.84102" transform="translate(-39.54578 528.222) rotate(-36.66971)" fill="#3f3d56"/><path d="M911.87243,164.85893c-5.28053,3.934-17.83968-3.82122-29.12941-17.57854q-1.49992-1.82442-2.96537-3.78865-1.0734-1.443-2.06913-2.88554c-10.46805-15.12554-14.606-29.96212-9.19925-33.98731,5.4465-4.0575,18.62519,4.31143,30.17828,18.87094q.96769,1.22355,1.91649,2.49625a98.89706,98.89706,0,0,1,6.05725,9.13963C914.10739,149.90734,916.52774,161.3905,911.87243,164.85893Z" transform="translate(-139.16475 -34.35242)" opacity="0.2"/><path d="M906.66129,137.12571,882.743,147.28039,865.62981,154.545l-2.53083-3.41577,14.60954-10.52307,20.979-15.11637q.96769,1.22355,1.91649,2.49625A98.89706,98.89706,0,0,1,906.66129,137.12571Z" transform="translate(-139.16475 -34.35242)" fill="#d0cde1"/><circle cx="721.8264" cy="120.82018" r="5.19893" fill="#d0cde1"/><path d="M859.46549,210.09164a2.48185,2.48185,0,0,0-1.17624-.59983c-28.00239-5.78582-45.62246-21.9089-53.86527-49.28893a2.49108,2.49108,0,0,0-4.77075,1.43591c8.6965,28.88662,28.085,46.62787,57.62822,52.73218a2.49139,2.49139,0,0,0,2.184-4.27933Z" transform="translate(-139.16475 -34.35242)" fill="#000000"/><path d="M866.357,188.41487a2.47686,2.47686,0,0,0-1.17625-.59983c-20.99616-4.33861-34.20718-16.42723-40.388-36.95671a2.49108,2.49108,0,0,0-4.77075,1.4359c6.66287,22.13125,21.51666,35.72308,44.151,40.4a2.49139,2.49139,0,0,0,2.184-4.27932Z" transform="translate(-139.16475 -34.35242)" fill="#000000"/><path d="M849.28335,232.28949a2.47682,2.47682,0,0,0-1.17625-.59983c-27.945-5.774-58.50393-33.73665-66.72989-61.0606a2.49108,2.49108,0,0,0-4.77075,1.4359c8.6898,28.86511,40.97163,58.40431,70.49285,64.50385a2.49138,2.49138,0,0,0,2.184-4.27932Z" transform="translate(-139.16475 -34.35242)" fill="#000000"/></svg>
                    </div>
                </Visual>
                <p className="finding__copy">By focusing on privacy through all aspects of the platform, users will feel more comfortable developing online meaningful connections, and <strong>sharing the content that matters most.</strong></p>
            </div>
        </div>
        <footer>
            <p>Created by <a href="https://twitter.com/carbnology">Mike Carbone</a></p>
            <p>Pennoni Honors College Submission for IDM-417, Drexel University 2019</p>
        </footer>
    </>
);

export default present;