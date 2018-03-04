import React from 'react';
import ReactDOM from 'react-dom';
import grace from './grace-hopper.jpg';
import './index.css';

class Title extends React.Component {
    render() {
      return (
        <header>
            <h1>Grace Hopper</h1>
        </header>
      );
    }
  }
  
class Paragraph extends React.Component {
  
    render() {
      return (
        <div>
            <section>
            <p><strong>Grace Brewster Murray Hopper</strong> (née Murray; December 9, 1906 – January 1, 1992) was an American <a href="https://en.wikipedia.org/wiki/Computer_scientist" target="_blank">computer scientist</a> and United States Navy rear admiral.[1] <mark>One of the first programmers of the Harvard Mark I computer</mark>, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early high-level programming language still in use today.</p>
            <p>Hopper had attempted to enlist in the Navy during World War II, but she was rejected by the military because she was 34 years of age and too old to enlist. She instead joined the Navy Reserves. Hopper began her computing career when she worked on the Harvard Mark I team that was led by Howard H. Aiken. In 1949, she joined the Eckert–Mauchly Computer Corporation and was part of the development team that designed the UNIVAC I computer in 1944. It was at Eckert–Mauchly that she began developing the compiler. She believed that computer code could be written in English by using a programming language that was based on English words. The compiler would convert that code into machine code that would be understood by computers. By 1952, Hopper finished her compiler, which was written for the A-0 System programming language.</p>
            <p>In 1954, Eckert–Mauchly chose Hopper to lead their department for automatic programming, and she led the release of some of the first compiled languages like FLOW-MATIC. In 1959, she participated in the CODASYL consortium, which consulted Hopper to guide them in creating a machine-independent programming language. This led to the COBOL language, which was inspired by her idea of a language being based on English words. In 1966, she retired from the Naval Reserve, but in 1967, the Navy recalled her to active duty. She retired from the Navy in 1986 and found work as a consultant for the Digital Equipment Corporation, sharing her computing experiences.</p>
            <p>Owing to her accomplishments and her naval rank, she was sometimes referred to as "Amazing Grace".[6][7] The U.S. Navy Arleigh Burke-class guided-missile destroyer USS Hopper was named for her, as was the Cray XE6 "Hopper" supercomputer at NERSC.[8] During her lifetime, Hopper was awarded 40 honorary degrees from universities across the world. In 1991, she received the National Medal of Technology. On November 22, 2016, she was posthumously awarded the Presidential Medal of Freedom by President Barack Obama.</p>    
            </section>
        </div>
      );
    }
  }
  
  class Contain extends React.Component {
    render() {
      return (
        <div className="container">
            <Title />
            <Section />
            <About />
          </div>
       
      );
    }
  }

  class Section extends React.Component {
    render() {
      return (
        <div className="section-one">
            <Paragraph />
            <Career />
            <Phrase />
          </div>
       
      );
    }
  }

  class Career extends React.Component {
    render() {
      return (
        <section>
        <h3>Career</h3>
        <ol>
            <li>World War II</li>
            <li>UNIVAC</li>
            <li>COBOL</li>
            <li>Standards</li>
        </ol>
        </section>
      );
    }
  }

  class Phrase extends React.Component {
    render() {
      return (
        <section>
        <h2>Phrase</h2>
        <blockquote cite = "http://www.azquotes.com/quote/553883">
            Humans are allergic to change. They love to say, 'We've always done it this way.' I try to fight that. That's why I have a clock on my wall that runs counter-clockwise.
        </blockquote>
        </section>
      );
    }
  }

  class About extends React.Component {
    render() {
      return (
        <aside class="summary">
        <table class="summary-table">
            <thead>
                <tr>
                    <th colspan ="2">Grace Murray Hopper</th>
                </tr>
            </thead>
             <tbody>
                <tr>
                    <td colspan ="2">
                        <img src={grace} />
                        <p>Rear Admiral Grace M. Hopper, 1984</p>
                    </td>
                </tr>
                <tr>
                    <th>Nickname</th>
                    <td>"Amazing Grace"</td>
                </tr>
                <tr>
                    <th>Born</th>
                    <td>December 9, 1906</td>
                </tr>
                <tr>
                    <th>Died</th>
                    <td>January 1, 1992 (aged 85)</td>
                </tr>
                <tr>
                    <th>Allegiance</th>
                    <td>United States of America</td>
                </tr>
            </tbody>
        </table>
    </aside>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Contain />,
    document.getElementById('root')
  );
