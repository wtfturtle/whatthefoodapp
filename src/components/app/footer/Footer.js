import React, { Component } from 'react';
import '../App.css';

export default class Footer extends Component {

  render() { 
    return (
      <footer role="contentinfo" id="footer">
        <section className="footer maxwidth-wrap"> 
          <p>(c) <a href="https://github.com/wtfturtle/whatthefoodapp/" target="_blank" rel="author noopener noreferrer">What The Food App</a> </p>
          <p>Team Turtle: <a href="https://github.com/CharlyWelch" target="_blank" rel="author noopener noreferrer">Charly</a> | <a href="https://github.com/lomax715" target="_blank" rel="author noopener noreferrer">Jack</a> | <a href="https://github.com/limongoo" target="_blank" rel="author noopener noreferrer">Ivan Limongan</a></p>
        </section>
      </footer>
    );
  }
}